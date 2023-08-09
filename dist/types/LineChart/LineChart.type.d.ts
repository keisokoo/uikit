/// <reference types="react" />
import { CSSProp } from 'styled-components';
import { PartialDeep } from 'type-fest';
import { LineChartThemeType } from './LineChart.theme';
import { ChartDataType, ChartStringValue, DefaultStepType, ExtraChartData } from './LineGraph';
export declare const CHART_TYPES: {
    readonly 체온: {
        readonly type: "threshold";
        readonly threshold: 0.5;
        readonly defaultValue: {
            readonly max: 38;
            readonly min: 36;
            readonly step: 4;
            readonly toFixed: 1;
        };
    };
    readonly 맥박: {
        readonly type: "variable";
        readonly defaultValue: {
            readonly max: 105;
            readonly min: 85;
            readonly step: 4;
            readonly toFixed: 0;
        };
    };
    readonly 산소포화도: {
        readonly type: "fixed";
        readonly defaultValue: {
            readonly max: 100;
            readonly min: 95;
            readonly step: 5;
            readonly toFixed: 0;
        };
    };
    readonly 최고혈압: {
        readonly type: "variable";
        readonly defaultValue: {
            readonly max: 140;
            readonly min: 120;
            readonly step: 4;
            readonly toFixed: 0;
        };
    };
    readonly 최저혈압: {
        readonly type: "variable";
        readonly defaultValue: {
            readonly max: 95;
            readonly min: 75;
            readonly step: 4;
            readonly toFixed: 0;
        };
    };
    readonly 알코올농도: {
        readonly type: "fixed";
        readonly defaultValue: {
            readonly max: 0.08;
            readonly min: 0;
            readonly step: 4;
            readonly toFixed: 2;
        };
    };
};
export declare const disposeChartType: (value: ChartDataType[], type: keyof typeof CHART_TYPES) => DefaultStepType;
export interface LineChartProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    $css?: CSSProp | string;
    customTheme?: PartialDeep<LineChartThemeType>;
    calibration?: number;
    positionUp?: number;
    chartData: ChartDataType[] | ChartStringValue | ((xValue: {
        [x: string]: number;
    }) => ChartDataType[]);
    width: number;
    height: number;
    XChartType: '월간' | '주간';
    YChartType: keyof typeof CHART_TYPES | DefaultStepType;
    extraData?: ExtraChartData[];
    nextTheme?: LineChartThemeType;
}
