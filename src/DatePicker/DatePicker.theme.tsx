
import { KuiContext } from '../KuiProvider/context'
import { DefaultThemes } from '../themes'
import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'

export function getDatePickerStyle(theme: DefaultThemes) {
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
export type DatePickerThemeType = ReturnType<typeof getDatePickerStyle>

export const getDatePickerTheme = (
  currentTheme: DatePickerThemeType,
  customTheme?: PartialDeep<DatePickerThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const DatePickerProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<DatePickerThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultDatePickerTheme = getDatePickerStyle(globalTheme.theme)
  return (
    <ThemeProvider
      theme={
        customTheme
          ? getDatePickerTheme(defaultDatePickerTheme, customTheme)
          : defaultDatePickerTheme
      }
    >
      {children}
    </ThemeProvider>
  )
}
  