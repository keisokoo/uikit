import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { KuiContext } from '../KuiProvider/context'
import { DefaultThemes } from '../themes'

export function getLineChartStyle(theme: DefaultThemes) {
  const { colors, fonts } = theme
  return {
    color: {
      textDataColor: colors.white70,
      textColor: colors.gray4,
      textDeepColor: colors.gray6,
      textBlackColor: colors.black,
      labelColor: colors.black,
      lineColor: colors.gray2,
      xLineColor: colors.gray3,
      chartLineColor: colors.primary,
      chartCircleColor: colors.primary,
      chartStrokeColor: colors.white,
      averageLineColor: colors.success,
    },
    textStyle: {
      default: fonts.default,
      small: fonts.small,
      smallBold: fonts.smallBold,
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
  children: React.ReactElement
  customTheme?: PartialDeep<LineChartThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultLineChartTheme = getLineChartStyle(globalTheme.theme)
  const nextTheme = customTheme
    ? getLineChartTheme(defaultLineChartTheme, customTheme)
    : defaultLineChartTheme
  return (
    <ThemeProvider theme={nextTheme}>
      {React.cloneElement(children, { nextTheme })}
    </ThemeProvider>
  )
}
