import styled, { CSSProp, css } from 'styled-components'
import { CalendarThemeType } from './Calendar.theme'

const height = 24

interface CalendarProps {
  $css?: CSSProp | string
  theme: CalendarThemeType
}
const CalendarStyle = {
  Wrap: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      display: flex;
      flex-direction: column;
      gap: 16px;
      & > div {
        flex: 1;
      }
      width: 340px;
      ${$css ?? ''}
    `
  ),
  WeeksRow: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${$css ?? ''}
    `
  ),
  WeekColumn: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      &:first-of-type {
        color: #ff7b7b;
      }
      &:last-of-type {
        color: #7b93ff;
      }
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
    ({ theme: { color }, $css }) => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${$css ?? ''}
    `
  ),
  DayColumn: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      &:first-of-type .day-part {
        color: #ff7b7b;
      }
      &:last-of-type .day-part {
        color: #7b93ff;
      }
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      &.isSelected .day-part {
        color: #ff6a00;
      }
      &.isSelected .day-part {
        background-color: #008b1c;
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
          background-color: #008b1c;
          border-radius: 50%;
          transform: translateX(-50%);
        }
        &::before {
          content: '';
          position: absolute;
          width: 50%;
          left: 50%;
          height: 100%;
          background-color: #008b1c;
        }
      }
      &.isToday .day-part {
        color: #ffd737;
      }
      &.startBetween {
        background-color: #008b1c;
        .day-part {
          color: #58ff7a;
        }
      }
      &.endBetween {
        background-color: #008b1c;
        .day-part {
          color: #58ff7a;
        }
      }
      &.isGrayed .day-part {
        color: #d3d3d37a;
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
          background-color: #008b1c;
          border-radius: 50%;
          transform: translateX(-50%);
        }
        &::before {
          content: '';
          position: absolute;
          width: 50%;
          right: 50%;
          height: 100%;
          background-color: #008b1c;
        }
      }
      &.comparisonDateInThisMonth .day-part {
        color: #ff6a00;
        background-color: #008b1c;
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
          transform: translateY(2px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      }
      ${$css ?? ''}
    `
  ),
  TodayBackground: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      ${$css ?? ''}
    `
  ),
  SelectedBackground: styled.div<CalendarProps>(
    ({ theme: { color }, $css }) => css`
      ${$css ?? ''}
    `
  ),
}
export default CalendarStyle
