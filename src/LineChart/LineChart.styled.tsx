import styled, { CSSProp, css } from 'styled-components'
import { LineChartThemeType } from './LineChart.theme'

interface LineChartProps {
  $css?: CSSProp | string
  theme: LineChartThemeType
}
const SvgChartWrap = styled.div`
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #fff;
  & > svg {
    &:first-of-type {
      position: sticky;
      left: 0px;
    }
  }
`
const LineChartStyle = {
  SvgChartWrap,
  LineChartWrap: styled.div<LineChartProps>(
    ({ theme: { color }, $css }) => css`
      display: flex;
      justify-content: center;
      padding: 0;
      position: relative;
      & > div {
        width: 100%;
        display: flex;
      }
      &.noData > div {
        width: fit-content;
      }
      &.scrollable {
        overflow-x: auto;
        &.noData {
          touch-action: none;
        }
      }
      max-width: 1084px;
      margin: 0 auto;
      &.responsive:not(.scrollable) {
        width: 100%;
        margin: 0 auto;
        ${SvgChartWrap} {
          width: 100%;
        }
        svg {
          position: relative;
          height: auto;
        }
        & > div {
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      ${$css ?? ''}
    `
  ),
  Nodata: styled.div<LineChartProps>(
    ({ theme: { color }, $css }) => css`
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      & > div {
        transform: translate(26px, -50%);
        /* typography['Body/Small/Bold']} */
        /* color:colors['Grayscale/Gray Dark']}; */
        background: #fff;
        padding: 8px 20px;
        white-space: nowrap;
        box-shadow: 0px 2px 8px rgba(33, 33, 45, 0.16);
        border-radius: 32px;
      }
      &.disableY {
        & > div {
          transform: translate(0, -50%);
        }
      }
      &.scrolledX {
        width: auto;
        left: calc(50%);
        & > div {
          transform: translate(-50%, -50%);
        }
      }
      ${$css ?? ''}
    `
  ),
  YText: styled.text`
    /* {typography['Body/Small/Regular']} */
    font-size: 10px;
  `,
  XText: styled.text`
    /* {typography['Body/Small/Regular']} */
    font-size: 10px;
    text-align: center;
  `,
  LineInfoWrap: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    /* {typography['Body/Small/Regular']} */
    font-size: 12px;
    /* color: {colors['Grayscale/Gray Default']}; */
    .line {
      width: 20px;
      height: 2px;
    }
  `,
  BottomInfoWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin: 12px auto 0;
    max-width: 1084px;
    // for : 월간 그래프 시에 우측 사이드 블러처리
    &.paddingRight {
      padding-right: 20px;
    }
  `,
}
export default LineChartStyle
