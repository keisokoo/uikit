import React from 'react';
import { PartialDeep } from 'type-fest';
import { DefaultThemes } from '../themes';
export declare function getCalendarStyle(theme: DefaultThemes): {
    style: {
        calendarWidth: string;
        calendarHeight: string;
        calendarRowGap: string;
        calendarColGap: string;
    };
    color: {
        textColor: string;
        weeksColor: string;
        firstDayColor: string;
        lastDayColor: string;
        daysColor: string;
        todayColor: string;
        selectedTextColor: string;
        selectedBackgroundColor: string;
        rangeTextColor: string;
        outOfMonthsColor: string;
    };
    textStyle: {
        default: string;
    };
};
export type CalendarThemeType = ReturnType<typeof getCalendarStyle>;
export declare const getCalendarTheme: (currentTheme: CalendarThemeType, customTheme?: PartialDeep<CalendarThemeType>) => {
    style: {
        calendarWidth: string;
        calendarHeight: string;
        calendarRowGap: string;
        calendarColGap: string;
    };
    color: {
        textColor: string;
        weeksColor: string;
        firstDayColor: string;
        lastDayColor: string;
        daysColor: string;
        todayColor: string;
        selectedTextColor: string;
        selectedBackgroundColor: string;
        rangeTextColor: string;
        outOfMonthsColor: string;
    };
    textStyle: {
        default: string;
    };
} & import("type-fest/source/partial-deep").PartialObjectDeep<{
    style: {
        calendarWidth: string;
        calendarHeight: string;
        calendarRowGap: string;
        calendarColGap: string;
    };
    color: {
        textColor: string;
        weeksColor: string;
        firstDayColor: string;
        lastDayColor: string;
        daysColor: string;
        todayColor: string;
        selectedTextColor: string;
        selectedBackgroundColor: string;
        rangeTextColor: string;
        outOfMonthsColor: string;
    };
    textStyle: {
        default: string;
    };
}, {}>;
export declare const CalendarProvider: ({ children, customTheme, }: {
    children: React.ReactNode;
    customTheme?: import("type-fest/source/partial-deep").PartialObjectDeep<{
        style: {
            calendarWidth: string;
            calendarHeight: string;
            calendarRowGap: string;
            calendarColGap: string;
        };
        color: {
            textColor: string;
            weeksColor: string;
            firstDayColor: string;
            lastDayColor: string;
            daysColor: string;
            todayColor: string;
            selectedTextColor: string;
            selectedBackgroundColor: string;
            rangeTextColor: string;
            outOfMonthsColor: string;
        };
        textStyle: {
            default: string;
        };
    }, {}> | undefined;
}) => React.JSX.Element;
