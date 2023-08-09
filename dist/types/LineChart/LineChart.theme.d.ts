import React from 'react';
import { PartialDeep } from 'type-fest';
import { DefaultThemes } from '../themes';
export declare function getLineChartStyle(theme: DefaultThemes): {
    color: {
        textDataColor: string;
        textColor: string;
        textDeepColor: string;
        textBlackColor: string;
        labelColor: string;
        lineColor: string;
        xLineColor: string;
        chartLineColor: string;
        chartCircleColor: string;
        chartStrokeColor: string;
        averageLineColor: string;
    };
    textStyle: {
        default: string;
        small: string;
        smallBold: string;
    };
};
export type LineChartThemeType = ReturnType<typeof getLineChartStyle>;
export declare const getLineChartTheme: (currentTheme: LineChartThemeType, customTheme?: PartialDeep<LineChartThemeType>) => {
    color: {
        textDataColor: string;
        textColor: string;
        textDeepColor: string;
        textBlackColor: string;
        labelColor: string;
        lineColor: string;
        xLineColor: string;
        chartLineColor: string;
        chartCircleColor: string;
        chartStrokeColor: string;
        averageLineColor: string;
    };
    textStyle: {
        default: string;
        small: string;
        smallBold: string;
    };
} & import("type-fest/source/partial-deep").PartialObjectDeep<{
    color: {
        textDataColor: string;
        textColor: string;
        textDeepColor: string;
        textBlackColor: string;
        labelColor: string;
        lineColor: string;
        xLineColor: string;
        chartLineColor: string;
        chartCircleColor: string;
        chartStrokeColor: string;
        averageLineColor: string;
    };
    textStyle: {
        default: string;
        small: string;
        smallBold: string;
    };
}, {}>;
export declare const LineChartProvider: ({ children, customTheme, }: {
    children: React.ReactElement;
    customTheme?: import("type-fest/source/partial-deep").PartialObjectDeep<{
        color: {
            textDataColor: string;
            textColor: string;
            textDeepColor: string;
            textBlackColor: string;
            labelColor: string;
            lineColor: string;
            xLineColor: string;
            chartLineColor: string;
            chartCircleColor: string;
            chartStrokeColor: string;
            averageLineColor: string;
        };
        textStyle: {
            default: string;
            small: string;
            smallBold: string;
        };
    }, {}> | undefined;
}) => React.JSX.Element;
