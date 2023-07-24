import { PartialDeep } from 'type-fest';
declare const TextInputTheme: {
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
export type TextInputThemeType = typeof TextInputTheme;
export declare const getTextInputTheme: (customTheme?: PartialDeep<TextInputThemeType>) => {
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
export default TextInputTheme;
