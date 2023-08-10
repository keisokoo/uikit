import styled, { CSSProp, RuleSet, css } from 'styled-components'
import { CalendarThemeType } from './Calendar.theme'

const height = 24

interface CalendarProps {
  $css?: CSSProp | string | RuleSet<object>
  theme: CalendarThemeType
}
const CalendarStyle = {
  Wrap: styled.div<CalendarProps>(
    ({ theme: { color, style }, $css }) => css`
      display: flex;
      flex-direction: column;
      gap: ${style.calendarRowGap};
      & > div {
        flex: 1;
      }
      max-width: ${style.calendarWidth};
      width: 100%;
      height: ${style.calendarHeight};
      color: ${color.textColor};
      ${$css ?? ''};
    `
  ),
  WeeksRow: styled.div<CalendarProps>(
    ({ theme: { color, style }, $css }) => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${style.calendarColGap};
      color: ${color.weeksColor};
      ${$css ?? ''}
    `
  ),
  WeekColumn: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      /* &:first-of-type {
        color: ${color.firstDayColor};
      }
      &:last-of-type {
        color: ${color.lastDayColor};
      } */
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 36px;
      max-height: 36px;
      ${$css ?? ''}
    `
  ),
  DaysRow: styled.div<CalendarProps>(
    ({ theme: { color, style }, $css }) => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${style.calendarColGap};
      ${$css ?? ''}
    `
  ),
  DayColumn: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      &:first-of-type .day-part {
        color: ${color.firstDayColor};
      }
      &:last-of-type .day-part {
        color: ${color.lastDayColor};
      }
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      &.isSelected .day-part {
        color: ${color.selectedTextColor};
      }
      &.isSelected .day-part {
        background-color: ${color.selectedBackgroundColor};
      }
      &.isSelected.hasComparisonDate:not(.comparisonDateInThisMonth) {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 24px;
          z-index: -1;
          left: 40%;
          height: 100%;
          background-color: ${color.selectedBackgroundColor};
          border-radius: 50%;
          transform: translateX(-50%);
        }
        &::before {
          content: '';
          position: absolute;
          width: 50%;
          left: 50%;
          height: 100%;
          z-index: -1;
          background-color: ${color.selectedBackgroundColor};
        }
      }
      &.isToday .day-part {
        color: ${color.todayColor};
      }
      &.startBetween {
        background-color: ${color.selectedBackgroundColor};
        .day-part {
          color: ${color.rangeTextColor};
        }
      }
      &.endBetween {
        background-color: ${color.selectedBackgroundColor};
        .day-part {
          color: ${color.rangeTextColor};
        }
      }
      &.isGrayed .day-part {
        color: ${color.outOfMonthsColor};
      }
      &.comparisonDateInThisMonth:not(.isSelected) {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 24px;
          z-index: -1;
          left: 60%;
          height: 100%;
          background-color: ${color.selectedBackgroundColor};
          border-radius: 50%;
          transform: translateX(-50%);
        }
        &::before {
          content: '';
          position: absolute;
          width: 50%;
          right: 50%;
          height: 100%;
          z-index: -1;
          background-color: ${color.selectedBackgroundColor};
        }
      }
      &.comparisonDateInThisMonth .day-part {
        color: #ff6a00;
        background-color: ${color.selectedBackgroundColor};
      }
      ${$css ?? ''}
    `
  ),
  DayPart: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .day-part {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 24px;
        width: 24px;
        border-radius: ${height}px;
        span {
          user-select: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      }
      ${$css ?? ''}
    `
  ),
}
export default CalendarStyle
