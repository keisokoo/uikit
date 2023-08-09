import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { KuiContext } from '../KuiProvider/context'
import { DefaultThemes } from '../themes'

export function getCalendarStyle(theme: DefaultThemes) {
  const { colors, fonts } = theme
  return {
    style: {
      calendarWidth: '340px',
      calendarHeight: 'auto',
      calendarRowGap: '16px',
      calendarColGap: '0px',
    },
    color: {
      textColor: colors.foreground,
      weeksColor: colors.foreground,
      firstDayColor: '#ff7b7b',
      lastDayColor: '#7b93ff',
      daysColor: colors.foreground,
      todayColor: '#ffd737',
      selectedTextColor: '#ff6a00',
      selectedBackgroundColor: '#008b1c',
      rangeTextColor: '#58ff7a',
      outOfMonthsColor: '#d3d3d37a',
    },
    textStyle: {
      default: fonts.default,
    },
  }
}
export type CalendarThemeType = ReturnType<typeof getCalendarStyle>

export const getCalendarTheme = (
  currentTheme: CalendarThemeType,
  customTheme?: PartialDeep<CalendarThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const CalendarProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<CalendarThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultCalendarTheme = getCalendarStyle(globalTheme.theme)
  return (
    <ThemeProvider
      theme={
        customTheme
          ? getCalendarTheme(defaultCalendarTheme, customTheme)
          : defaultCalendarTheme
      }
    >
      {children}
    </ThemeProvider>
  )
}
