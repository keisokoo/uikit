import dayjs, { Dayjs } from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)

export interface GeneratedReturnType {
  current: Dayjs
  isSelected: boolean
  isGrayed: boolean
  isToday: boolean
  isBefore: boolean
  isAfter: boolean
  endBetween: boolean
  startBetween: boolean
  comparisonDateInThisMonth: boolean
  hasComparisonDate: boolean
  isAfterWithComparison: boolean
  isBeforeWithComparison: boolean
}

export const generateCalendar = (
  defaultDate: Dayjs,
  selectedDate?: Dayjs | null,
  comparisonDate?: Dayjs | null
): GeneratedReturnType[][] => {
  defaultDate =
    dayjs.isDayjs(defaultDate) && defaultDate.isValid() ? defaultDate : dayjs()
  const today = dayjs()
  const comparison =
    dayjs.isDayjs(comparisonDate) && comparisonDate.isValid()
      ? comparisonDate
      : null
  const standardDate =
    dayjs.isDayjs(selectedDate) && selectedDate.isValid() ? selectedDate : null
  const startWeek = defaultDate.clone().startOf('month').week()
  const endWeek =
    defaultDate.clone().endOf('month').week() === 1
      ? 53
      : defaultDate.clone().endOf('month').week()
  let calendar = []
  for (let week = startWeek; week <= endWeek; week++) {
    calendar.push(
      Array(7)
        .fill(0)
        .map((n, i) => {
          const current: Dayjs = defaultDate
            .clone()
            .week(week)
            .startOf('week')
            .add(n + i, 'day')
          const isSelected =
            standardDate?.format('YYYYMMDD') === current.format('YYYYMMDD')
          const isGrayed = current.format('MM') !== defaultDate.format('MM')
          const isToday =
            current.format('YYYYMMDD') === today.format('YYYYMMDD')
          const isBefore = standardDate
            ? current.isBefore(standardDate, 'day')
            : false
          const isAfter = standardDate
            ? current.isAfter(standardDate, 'day')
            : false
          const isAfterWithComparison = comparison
            ? current.isAfter(comparison, 'day')
            : false
          const isBeforeWithComparison = comparison
            ? current.isBefore(comparison, 'day')
            : false
          let startBetween = false
          let endBetween = false
          if (
            comparison &&
            current.isAfter(comparison, 'day') &&
            current.isBefore(standardDate, 'day')
          ) {
            endBetween = true
          }
          if (
            comparison &&
            current.isAfter(standardDate, 'day') &&
            current.isBefore(comparison, 'day')
          ) {
            startBetween = true
          }
          let comparisonDateInThisMonth = false
          if (comparison && current.isSame(comparison, 'day')) {
            comparisonDateInThisMonth = true
          }
          return {
            current,
            isBefore,
            isAfter,
            isSelected,
            isGrayed,
            isToday,
            endBetween,
            startBetween,
            comparisonDateInThisMonth,
            hasComparisonDate: !!comparison,
            isAfterWithComparison,
            isBeforeWithComparison,
          }
        })
    )
  }
  return calendar
}
