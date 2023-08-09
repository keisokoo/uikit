import { Dayjs } from 'dayjs';
export interface GeneratedReturnType {
    current: Dayjs;
    isSelected: boolean;
    isGrayed: boolean;
    isToday: boolean;
    isBefore: boolean;
    isAfter: boolean;
    endBetween: boolean;
    startBetween: boolean;
    comparisonDateInThisMonth: boolean;
    hasComparisonDate: boolean;
    isAfterWithComparison: boolean;
    isBeforeWithComparison: boolean;
}
export declare const generateCalendar: (defaultDate: Dayjs, selectedDate?: Dayjs | null, comparisonDate?: Dayjs | null) => GeneratedReturnType[][];
