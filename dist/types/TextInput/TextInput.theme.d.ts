import React from 'react';
import { PartialDeep } from 'type-fest';
import { DefaultThemes } from '../themes';
export declare function getTextInputStyle(theme: DefaultThemes): {
    color: {
        iconFocusColor: string;
        box: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundFocusColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
        underline: {
            textColor: string;
            textDisabledColor: string;
            backgroundFocusColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
    };
    textStyle: {
        default: string;
    };
};
export type TextInputThemeType = ReturnType<typeof getTextInputStyle>;
export declare const getTextInputTheme: (currentTheme: TextInputThemeType, customTheme?: PartialDeep<TextInputThemeType>) => {
    color: {
        iconFocusColor: string;
        box: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundFocusColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
        underline: {
            textColor: string;
            textDisabledColor: string;
            backgroundFocusColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
    };
    textStyle: {
        default: string;
    };
} & import("type-fest/source/partial-deep").PartialObjectDeep<{
    color: {
        iconFocusColor: string;
        box: {
            textColor: string;
            textDisabledColor: string;
            backgroundColor: string;
            backgroundFocusColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
        underline: {
            textColor: string;
            textDisabledColor: string;
            backgroundFocusColor: string;
            borderColor: string;
            borderFocusColor: string;
            placeholderColor: string;
            borderDisabledColor: string;
            iconFocusColor: string;
        };
    };
    textStyle: {
        default: string;
    };
}, {}>;
export declare const TextInputProvider: ({ children, customTheme, }: {
    children: React.ReactNode;
    customTheme?: import("type-fest/source/partial-deep").PartialObjectDeep<{
        color: {
            iconFocusColor: string;
            box: {
                textColor: string;
                textDisabledColor: string;
                backgroundColor: string;
                backgroundFocusColor: string;
                borderColor: string;
                borderFocusColor: string;
                placeholderColor: string;
                borderDisabledColor: string;
                iconFocusColor: string;
            };
            underline: {
                textColor: string;
                textDisabledColor: string;
                backgroundFocusColor: string;
                borderColor: string;
                borderFocusColor: string;
                placeholderColor: string;
                borderDisabledColor: string;
                iconFocusColor: string;
            };
        };
        textStyle: {
            default: string;
        };
    }, {}> | undefined;
}) => React.JSX.Element;
