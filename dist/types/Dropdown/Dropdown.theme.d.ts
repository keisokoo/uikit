import React from 'react';
import { PartialDeep } from 'type-fest';
import { DefaultThemes } from '../themes';
export declare function getDropdownStyle(theme: DefaultThemes): {
    color: {
        textColor: string;
        textDisabledColor: string;
        backgroundColor: string;
        backgroundFocusColor: string;
        backgroundHoverColor: string;
        borderColor: string;
        borderFocusColor: string;
        placeholderColor: string;
        borderDisabledColor: string;
        textFocusColor: string;
    };
    textStyle: {
        default: string;
    };
};
export type DropdownThemeType = ReturnType<typeof getDropdownStyle>;
export declare const getDropdownTheme: (currentTheme: DropdownThemeType, customTheme?: PartialDeep<DropdownThemeType>) => {
    color: {
        textColor: string;
        textDisabledColor: string;
        backgroundColor: string;
        backgroundFocusColor: string;
        backgroundHoverColor: string;
        borderColor: string;
        borderFocusColor: string;
        placeholderColor: string;
        borderDisabledColor: string;
        textFocusColor: string;
    };
    textStyle: {
        default: string;
    };
} & import("type-fest/source/partial-deep").PartialObjectDeep<{
    color: {
        textColor: string;
        textDisabledColor: string;
        backgroundColor: string;
        backgroundFocusColor: string;
        backgroundHoverColor: string;
        borderColor: string;
        borderFocusColor: string;
        placeholderColor: string;
        borderDisabledColor: string;
        textFocusColor: string;
    };
    textStyle: {
        default: string;
    };
}, {}>;
export declare const DropdownProvider: ({ children, customTheme, }: {
    children: React.ReactNode;
    customTheme?: import("type-fest/source/partial-deep").PartialObjectDeep<{
        color: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            textFocusColor: string;
        };
        textStyle: {
            default: string;
        };
    }, {}> | undefined;
}) => React.JSX.Element;
