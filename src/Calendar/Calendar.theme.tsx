import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { KuiContext } from '../KuiProvider/context'
import { DefaultThemes } from '../themes'

export function getCalendarStyle(theme: DefaultThemes) {
  const { colors, fonts } = theme
  return {
    color: {
      textColor: colors.foreground,
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
