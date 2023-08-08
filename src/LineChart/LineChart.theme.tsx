
import { KuiContext } from '../KuiProvider/context'
import { DefaultThemes } from '../themes'
import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'

export function getLineChartStyle(theme: DefaultThemes) {
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
export type LineChartThemeType = ReturnType<typeof getLineChartStyle>

export const getLineChartTheme = (
  currentTheme: LineChartThemeType,
  customTheme?: PartialDeep<LineChartThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const LineChartProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<LineChartThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultLineChartTheme = getLineChartStyle(globalTheme.theme)
  return (
    <ThemeProvider
      theme={
        customTheme
          ? getLineChartTheme(defaultLineChartTheme, customTheme)
          : defaultLineChartTheme
      }
    >
      {children}
    </ThemeProvider>
  )
}
  