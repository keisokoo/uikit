'use client'
import classNames from 'classnames'
import { isArray } from 'lodash-es'
import React, {
  Fragment,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import LineChartStyle from './LineChart.styled'
import { LineChartProvider } from './LineChart.theme'
import { LineChartProps, disposeChartType } from './LineChart.type'
import LineGraph from './LineGraph'

const {
  LineChartWrap,
  Nodata,
  YText,
  XText,
  SvgChartWrap,
  LineInfoWrap,
  BottomInfoWrap,
} = LineChartStyle

const DefaultLineChart = ({
  $css,
  customTheme,
  calibration = 10, // optional - 차트 height에 관여
  positionUp = 20, // optional - 차트 y 포치션
  chartData: _chartData, // 차트 데이터
  width, // 차트 가로 크기 ( y 텍스트 영역은 제외 )
  height, // 차트 세로 크기
  YChartType, // 차트 타입 또는 {max, min, toFixed, step}, step은 단계를 나눠질 갯수
  XChartType, // x축 라벨, 위치값은 퍼센트
  extraData, // 추가로 표시할 path 라인
  className,
  ...props
}: LineChartProps) => {
  const chartWrapRef = useRef() as MutableRefObject<HTMLDivElement>
  const [lineGraphData, set_lineGraphData] = useState<LineGraph | null>(null) // 그래프 인스턴스
  const [graphWidth, set_graphWidth] = useState<number>(width)

  // 그래프 설정값 세팅 및 인스턴스 생성
  useEffect(() => {
    // 차트 데이터 없을 시 리턴
    if (!_chartData) return
    // 각 x축 라벨들의 위치값 ( ex : { 04/01 : 1, 04/02 : 2, ... } )
    const xStepValue =
      XChartType === '월간' ? LineGraph.getMonthDays() : LineGraph.getWeeks()
    // x 축의 길이 세팅
    // set_xStepLength(Object.keys(xStepValue).length)
    // 각 데이터들의 X,y 좌표들의 배열 ( ex : [ { x : 1, y : 1 }, { x : 2, y : 2 }, ... ])
    const chartData = isArray(_chartData) // _chartData가 배열일 때 ( ChartDataType[] )
      ? _chartData
      : typeof _chartData === 'object' // _chartData가 객체일 때 ( ChartStringValue )
      ? LineGraph.parseChartData(_chartData, xStepValue)
      : _chartData(xStepValue) // _chartData가 함수일 때
    // y축 눈금의 설정 값
    const yStep =
      typeof YChartType === 'string'
        ? disposeChartType(chartData, YChartType)
        : YChartType
    // 위의 설정한 값들을 바탕으로 그래프 인스턴스 생성
    const chartGraphData = new LineGraph(
      {
        width: graphWidth,
        height: height,
        yStep,
        xStep: {
          step: xStepValue,
        },
      },
      chartData,
      extraData
    )
    set_lineGraphData(chartGraphData)
  }, [_chartData, graphWidth, height, YChartType, XChartType, extraData])

  const yAverage = useMemo(() => {
    return lineGraphData?.chartValues.yAverage ?? 0
  }, [lineGraphData])

  // 화면 사이즈 변경 시 그래프 리사이징
  useEffect(() => {
    function rePosition() {
      if (!lineGraphData) return
      const wrapRef = chartWrapRef.current
      if (XChartType === '월간') {
        set_graphWidth(width)
      } else if (XChartType === '주간') {
        const wrapRect = wrapRef.getBoundingClientRect()
        wrapRect && set_graphWidth(wrapRect.width - Y_AXIS_WIDTH)
      }
    }
    if (lineGraphData) {
      rePosition()
    }
    window.addEventListener('resize', rePosition)
    return () => {
      window.removeEventListener('resize', rePosition)
    }
  }, [lineGraphData, XChartType, width])

  const isNoData = useMemo(() => {
    return lineGraphData && lineGraphData.chartValues.chartPoint.length < 1
  }, [lineGraphData])

  return (
    <LineChartProvider customTheme={customTheme}>
      <LineChartWrap
        ref={chartWrapRef}
        $css={$css}
        className={classNames(
          {
            scrollable: XChartType === '월간',
            noData:
              lineGraphData && lineGraphData.chartValues.chartPoint.length < 1,
          },
          className
        )}
        {...props}
      >
        <div>
          <SvgChartWrap>
            {isNoData && (
              <Nodata
                className={classNames({
                  disableY: XChartType === '주간',
                  scrolledX: XChartType === '월간',
                })}
              >
                <div>등록된 데이터가 없습니다.</div>
              </Nodata>
            )}
            {/* y축 라벨 display */}
            {!isNoData && (
              <svg
                width={Y_AXIS_WIDTH}
                height={
                  height +
                  GRAPH_MARGIN_TOP +
                  GRAPH_MARGIN_BOTTOM +
                  X_AXIS_HEIGHT
                }
                viewBox={`0 -${GRAPH_MARGIN_TOP} ${Y_AXIS_WIDTH} ${
                  height +
                  GRAPH_MARGIN_TOP +
                  GRAPH_MARGIN_BOTTOM +
                  X_AXIS_HEIGHT
                }`}
                preserveAspectRatio="xMidYMid meet"
              >
                {lineGraphData?.yAxis.map((item, index) => {
                  return (
                    <YText
                      alignmentBaseline="central"
                      textAnchor="middle"
                      key={'yValues' + index}
                      x={Y_AXIS_WIDTH / 2 - 1} // style적인 이유로 - 1을 해주었음, 큰 의미는 없음
                      y={item.axis}
                      fill={'#1e1e1e'}
                    >
                      {item.label}
                    </YText>
                  )
                })}
              </svg>
            )}
            {/* main 그래프 */}
            <svg
              className="line-chart-main"
              width={graphWidth}
              height={
                height + GRAPH_MARGIN_TOP + GRAPH_MARGIN_BOTTOM + X_AXIS_HEIGHT
              }
              viewBox={`0 -${GRAPH_MARGIN_TOP} ${graphWidth} ${
                height + GRAPH_MARGIN_TOP + GRAPH_MARGIN_BOTTOM + X_AXIS_HEIGHT
              }`}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* x축 라벨 display */}
              {lineGraphData?.xAxis.map((item) => {
                return (
                  <XText
                    className="x-axis"
                    alignmentBaseline={'text-before-edge'}
                    textAnchor="middle"
                    key={'xValues' + item.axis}
                    x={item.axis}
                    y={height + GRAPH_MARGIN_BOTTOM}
                    fill={'#565656'}
                    data-date={item.label}
                  >
                    {item.label}
                  </XText>
                )
              })}
              {/* y축 눈금 수평 선 그리기 */}
              {lineGraphData?.yAxis.map((item, itemIndex) => {
                return (
                  <path
                    key={'y' + item.axis}
                    d={`M0 ${item.axis} H${graphWidth}`}
                    stroke={'#D1D1D6'}
                    strokeWidth={1}
                    {...(itemIndex !== lineGraphData.yAxis.length - 1 && {
                      strokeDasharray: `3 2`,
                    })}
                  />
                )
              })}
              {/* 그래프 x축 그리기 */}
              <path
                d={`M0 ${height} H${graphWidth}`}
                stroke="#D1D1D6"
                strokeWidth={1}
              />
              {/* 그래프 평균 값 수평선 그리기 */}
              {yAverage && (
                <path
                  d={`M0 ${LineGraph.getYAxis(
                    yAverage,
                    height
                  )} H${graphWidth}`}
                  stroke={`#ACCCF8`}
                  fill="transparent"
                  strokeWidth={1}
                />
              )}
              {/* 발열과 같이 평균 외에 그래프에 표시할 수평선 그리기 */}
              {lineGraphData && lineGraphData.chartValues.extraData && (
                <>
                  {lineGraphData.chartValues.extraData.map(
                    (extra, extraIndex) => {
                      return (
                        <path
                          key={'extraIndex' + extraIndex}
                          d={`M0 ${LineGraph.getYAxis(
                            extra.value,
                            height
                          )} H${graphWidth}`}
                          stroke={extra.color}
                          fill="transparent"
                          strokeWidth={1}
                        />
                      )
                    }
                  )}
                </>
              )}
              {lineGraphData &&
                lineGraphData?.chartValues.chartPoint.length > 0 && (
                  <>
                    {/* 점 연결하는 선들 그리기 */}
                    <path
                      className="line"
                      d={lineGraphData.chartValues.chartLine}
                      stroke={'#0c6bf0'}
                      fill="transparent"
                      strokeWidth={1}
                    />
                    {/* 좌표 점들 찍기 */}
                    {lineGraphData.chartValues.chartPoint.map(
                      (item, itemIndex) => {
                        return (
                          <Fragment key={'circle' + itemIndex}>
                            <circle
                              className="circle"
                              cx={item.x}
                              cy={item.y}
                              r="4"
                              fill={'#0c6bf0'}
                              stroke={'white'}
                              strokeWidth={2}
                              alignmentBaseline={'middle'}
                            />
                          </Fragment>
                        )
                      }
                    )}
                  </>
                )}
            </svg>
          </SvgChartWrap>
        </div>
      </LineChartWrap>
      {/* 그래프 하단 설명 라벨 */}
      <BottomInfoWrap
        className={classNames({
          paddingRight: XChartType === '월간' && !isNoData,
        })}
        {...(XChartType === '주간' && {
          style: { margin: '12px auto 0' },
        })}
      >
        <LineInfoWrap>
          <div>평균 :</div>
          <div className="line" style={{ backgroundColor: '#ACCCF8' }}></div>
        </LineInfoWrap>
        {lineGraphData && lineGraphData.chartValues.extraData && (
          <>
            {lineGraphData.chartValues.extraData.map((extra, extraIndex) => {
              return (
                <LineInfoWrap key={'extraInfo' + extraIndex}>
                  <div>{extra.title} :</div>
                  <div
                    className="line"
                    style={{
                      backgroundColor: extra.color,
                    }}
                  ></div>
                </LineInfoWrap>
              )
            })}
          </>
        )}
      </BottomInfoWrap>
    </LineChartProvider>
  )
}

const Y_AXIS_WIDTH = 22
const X_AXIS_HEIGHT = 15

const GRAPH_MARGIN_TOP = 7
const GRAPH_MARGIN_BOTTOM = 10

const LineChart = (props: LineChartProps) => {
  return <DefaultLineChart {...props} />
}

export default LineChart
