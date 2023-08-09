import dayjs, { Dayjs } from 'dayjs';
type AxisLabel = {
    [key in string]: number;
};
type AxisType = {
    axis: number;
    label: string;
};
export type ChartDataType = {
    y: number;
    x: number;
};
export type ExtraChartData = {
    title: string;
    value: number;
    color: string;
};
interface NumberStep {
    step: number;
    max?: number;
    min?: number;
    toFixed?: number;
}
export interface LabelStep {
    step: AxisLabel;
    max?: number;
    min?: number;
}
export type ChartStringValue = {
    [key in string]: number;
};
type AxisStepType = NumberStep | LabelStep;
type LineGraphConfigType = {
    width: number;
    height: number;
    yStep: NumberStep;
    xStep: LabelStep;
};
type GraphPointType = {
    y: number;
    x: number;
    original: ChartDataType;
};
export type DefaultStepType = {
    max: number;
    min: number;
    step: number;
    toFixed: number;
};
declare class LineGraph {
    config: LineGraphConfigType;
    xAxis: AxisType[];
    yAxis: AxisType[];
    chartValues: {
        chartPoint: GraphPointType[];
        chartLine: string;
        yAverage: number;
        extraData?: ExtraChartData[];
    };
    static responsive?: true | 'disableY';
    constructor(config: Partial<LineGraphConfigType>, chartData?: ChartDataType[], extraData?: ExtraChartData[], responsive?: true | 'disableY');
    /**
     * threshold 단위로 step 생성
     *
     * @static
     * @param {ChartDataType[]} value
     * @param {number} threshold
     * @memberof LineGraph
     */
    static getYStandardByThreshold: (value: ChartDataType[], threshold: number, defaultValue: DefaultStepType) => DefaultStepType;
    /**
     * · 최대값-최소값 의 차이로 threshold 계산시 기준 ( 지비 기획 요청 사항 )
     * · 최대값-최소값=10이하일 경우엔 2,±
     * · 최대값-최소값=15이하일 경우엔 3,±
     * · 최대값-최소값=20이하일 경우엔 4,±
     * · 그외엔5
     * @static
     * @param {ChartDataType[]} value
     * @param {{
     *       max: number
     *       min: number
     *       step: number
     *     }} defaultValue
     * @memberof LineGraph
     */
    static getYVariableStandard: (value: ChartDataType[], defaultValue: DefaultStepType) => DefaultStepType;
    static getPeriods: (start: Dayjs, end: Dayjs) => dayjs.Dayjs[];
    static getWeeks: () => {
        [x: string]: number;
    };
    static getMonthDays: () => {
        [x: string]: number;
    };
    static disposeUndef: (num?: number) => number;
    static getStan: (max?: number, min?: number) => number;
    static getPerSize: (numberOfStep: number | AxisLabel, size: number) => number;
    static getPercent: (value: number, max?: number, min?: number) => number;
    static getYAxis: (percent: number, size: number) => number;
    static getXAxis: (percent: number, size: number, perWidth: number) => number;
    static parseChartData: (chartStringValue: ChartStringValue, xCalibration: {
        [x: string]: number;
    }) => ChartDataType[];
    private getYAveragePercent;
    private axisLabelByStepSize;
    private createStandard;
    disposeChartData: (chartSize: {
        width: number;
        height: number;
    }, xStep: AxisStepType, yStep: AxisStepType, chartData?: ChartDataType[], extraData?: ExtraChartData[]) => {
        chartPoint: GraphPointType[];
        chartLine: string;
        yAverage: number;
        extraData?: ExtraChartData[] | undefined;
    };
}
export default LineGraph;
