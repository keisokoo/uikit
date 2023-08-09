/// <reference types="react" />
import { CSSProp } from 'styled-components';
import { DatePickerThemeType } from './DatePicker.theme';
interface DatePickerProps {
    $css?: CSSProp | string;
    theme: DatePickerThemeType;
}
declare const DatePickerStyle: {
    Wrap: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DatePickerProps>>;
};
export default DatePickerStyle;
