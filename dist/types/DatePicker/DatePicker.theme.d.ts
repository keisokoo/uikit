import { DefaultThemes } from '../themes';
import React from 'react';
import { PartialDeep } from 'type-fest';
export declare function getDatePickerStyle(theme: DefaultThemes): {
    color: {
        textColor: string;
    };
    textStyle: {
        default: string;
    };
};
export type DatePickerThemeType = ReturnType<typeof getDatePickerStyle>;
export declare const getDatePickerTheme: (currentTheme: DatePickerThemeType, customTheme?: PartialDeep<DatePickerThemeType>) => {
    color: {
        textColor: string;
    };
    textStyle: {
        default: string;
    };
} & import("type-fest/source/partial-deep").PartialObjectDeep<{
    color: {
        textColor: string;
    };
    textStyle: {
        default: string;
    };
}, {}>;
export declare const DatePickerProvider: ({ children, customTheme, }: {
    children: React.ReactNode;
    customTheme?: import("type-fest/source/partial-deep").PartialObjectDeep<{
        color: {
            textColor: string;
        };
        textStyle: {
            default: string;
        };
    }, {}> | undefined;
}) => React.JSX.Element;
