import React from 'react';
import { PartialDeep } from 'type-fest';
import { DefaultThemes } from '../themes';
export declare function getButtonStyle(theme: DefaultThemes): {
    color: {
        fill: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundActiveColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
        border: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundActiveColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
    };
    textStyle: {
        default: string;
    };
};
export type ButtonThemeType = ReturnType<typeof getButtonStyle>;
export declare const getButtonTheme: (currentTheme: ButtonThemeType, customTheme?: PartialDeep<ButtonThemeType>) => {
    color: {
        fill: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundActiveColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
        border: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundActiveColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
    };
    textStyle: {
        default: string;
    };
} & import("type-fest/source/partial-deep").PartialObjectDeep<{
    color: {
        fill: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundActiveColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
        border: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundActiveColor: string;
            backgroundFocusColor: string;
            backgroundHoverColor: string;
            borderColor: string;
            borderFocusColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
    };
    textStyle: {
        default: string;
    };
}, {}>;
export declare const ButtonProvider: ({ children, customTheme, }: {
    children: React.ReactNode;
    customTheme?: import("type-fest/source/partial-deep").PartialObjectDeep<{
        color: {
            fill: {
                textColor: string;
                textDisabledColor: string;
                backgroundColor: string;
                backgroundActiveColor: string;
                backgroundFocusColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderFocusColor: string;
                borderDisabledColor: string;
                iconFocusColor: string;
            };
            border: {
                textColor: string;
                textDisabledColor: string;
                backgroundColor: string;
                backgroundActiveColor: string;
                backgroundFocusColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderFocusColor: string;
                borderDisabledColor: string;
                iconFocusColor: string;
            };
        };
        textStyle: {
            default: string;
        };
    }, {}> | undefined;
}) => React.JSX.Element;
