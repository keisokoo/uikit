'use client'
import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import CalendarStyle from './Calendar.styled'
import { CalendarProvider } from './Calendar.theme'
import { CalendarProps } from './Calendar.type'
import { GeneratedReturnType, generateCalendar } from './Calendar.utils'

const {
  Wrap,
  WeeksRow,
  WeekColumn,
  DaysRow,
  DayColumn,
  DayPart,
  TodayBackground,
  SelectedBackground,
} = CalendarStyle

const DefaultCalendar = ({
  $css,
  customTheme,
  comparisonType = 'start',
  ...props
}: CalendarProps) => {
  const [calendarData, set_calendarData] = React.useState<
    GeneratedReturnType[][]
  >([])
  const [selectedDate, set_selectedDate] = React.useState<dayjs.Dayjs>()
  const [comparisonDate, set_comparisonDate] = React.useState<dayjs.Dayjs>()
  useEffect(() => {
    const generatedData = generateCalendar(
      dayjs(),
      selectedDate,
      comparisonDate
    )
    set_calendarData(generatedData)
  }, [selectedDate, comparisonDate])
  return (
    <CalendarProvider customTheme={customTheme}>
      <Wrap $css={$css} {...props}>
        <WeeksRow className="week">
          <WeekColumn>일</WeekColumn>
          <WeekColumn>월</WeekColumn>
          <WeekColumn>화</WeekColumn>
          <WeekColumn>수</WeekColumn>
          <WeekColumn>목</WeekColumn>
          <WeekColumn>금</WeekColumn>
          <WeekColumn>토</WeekColumn>
        </WeeksRow>
        {calendarData &&
          calendarData.map((week, index) => (
            <DaysRow key={'week' + index}>
              {week.map((day, _index) => {
                const {
                  isGrayed,
                  isSelected,
                  isToday,
                  isAfter,
                  isBefore,
                  endBetween,
                  startBetween,
                  comparisonDateInThisMonth,
                  hasComparisonDate,
                  isAfterWithComparison,
                  isBeforeWithComparison,
                } = day
                return (
                  <DayColumn
                    key={'day' + _index}
                    className={classNames({
                      isGrayed,
                      isSelected,
                      isToday,
                      isAfter,
                      isBefore,
                      endBetween,
                      startBetween,
                      comparisonDateInThisMonth,
                      hasComparisonDate: isSelected && hasComparisonDate,
                      isAfterWithComparison:
                        isAfterWithComparison && comparisonType === 'end',
                      isBeforeWithComparison:
                        isBeforeWithComparison && comparisonType === 'start',
                    })}
                    onClick={() => {
                      if (selectedDate && comparisonDate) {
                        set_selectedDate(day.current)
                        set_comparisonDate(undefined)
                      } else if (selectedDate) {
                        if (isBefore) {
                          set_selectedDate(day.current)
                          return
                        }
                        set_comparisonDate(day.current)
                      } else {
                        set_selectedDate(day.current)
                      }
                    }}
                  >
                    <DayPart>
                      <div
                        className="day-part"
                        data-date={day.current.format('YYYY-MM-DD')}
                      >
                        <span>{day.current.format('D')}</span>
                        {isToday && <TodayBackground />}
                        {isSelected && <SelectedBackground />}
                      </div>
                    </DayPart>
                  </DayColumn>
                )
              })}
            </DaysRow>
          ))}
      </Wrap>
    </CalendarProvider>
  )
}

const Calendar = (props: CalendarProps) => {
  return <DefaultCalendar {...props} />
}

export default Calendar
