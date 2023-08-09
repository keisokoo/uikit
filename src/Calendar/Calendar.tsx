'use client'
import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import CalendarStyle from './Calendar.styled'
import { CalendarProvider } from './Calendar.theme'
import { CalendarProps } from './Calendar.type'
import { GeneratedReturnType, generateCalendar } from './Calendar.utils'

const { Wrap, WeeksRow, WeekColumn, DaysRow, DayColumn, DayPart } =
  CalendarStyle

const DefaultCalendar = ({
  $css,
  customTheme,
  comparisonType = 'start',
  pickType,
  value,
  emitValue,
  ...props
}: CalendarProps) => {
  const [calendarData, set_calendarData] = React.useState<
    GeneratedReturnType[][]
  >([])
  const [selectedDate, set_selectedDate] = React.useState<dayjs.Dayjs | null>(
    null
  )
  const [comparisonDate, set_comparisonDate] =
    React.useState<dayjs.Dayjs | null>(null)
  useEffect(() => {
    if (pickType) {
      if (pickType === 'single') {
        set_selectedDate(value ?? null)
      }
      if (pickType === 'range') {
        set_selectedDate(value?.start ?? null)
        set_comparisonDate(value?.end ?? null)
      }
    }
  }, [value, pickType])
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
        <WeeksRow className="weeks-row">
          <WeekColumn className="week">일</WeekColumn>
          <WeekColumn className="week">월</WeekColumn>
          <WeekColumn className="week">화</WeekColumn>
          <WeekColumn className="week">수</WeekColumn>
          <WeekColumn className="week">목</WeekColumn>
          <WeekColumn className="week">금</WeekColumn>
          <WeekColumn className="week">토</WeekColumn>
        </WeeksRow>
        {calendarData &&
          calendarData.map((week, index) => (
            <DaysRow key={'week' + index} className="days-row">
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
                    className={classNames(
                      {
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
                      },
                      'days-column'
                    )}
                    onClick={() => {
                      if (pickType === 'range') {
                        if (selectedDate && !comparisonDate && !isBefore) {
                          set_comparisonDate(day.current)
                          emitValue &&
                            emitValue({ start: selectedDate, end: day.current })
                        } else {
                          set_selectedDate(day.current)
                          set_comparisonDate(null)
                          emitValue &&
                            emitValue({ start: day.current, end: null })
                        }
                      } else if (pickType === 'single') {
                        set_selectedDate(day.current)
                        emitValue && emitValue(day.current)
                      }
                    }}
                  >
                    <DayPart className="day">
                      <div
                        className="day-part"
                        data-date={day.current.format('YYYY-MM-DD')}
                      >
                        <span>{day.current.format('D')}</span>
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
