/// <reference types="react" />
import { CSSProp, RuleSet } from 'styled-components';
import { CalendarThemeType } from './Calendar.theme';
interface CalendarProps {
    $css?: CSSProp | string | RuleSet<object>;
    theme: CalendarThemeType;
}
declare const CalendarStyle: {
    Wrap: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CalendarProps>>;
    WeeksRow: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CalendarProps>>;
    WeekColumn: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CalendarProps>>;
    DaysRow: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CalendarProps>>;
    DayColumn: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CalendarProps>>;
    DayPart: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CalendarProps>>;
};
export default CalendarStyle;
