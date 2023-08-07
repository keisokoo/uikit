import { KuiContext } from '@/KuiProvider/context'
import { DefaultThemes } from '@/themes'
import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'

export function getButtonStyle(theme: DefaultThemes) {
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
export type ButtonThemeType = ReturnType<typeof getButtonStyle>

export const getButtonTheme = (
  currentTheme: ButtonThemeType,
  customTheme?: PartialDeep<ButtonThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const ButtonProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<ButtonThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultButtonTheme = getButtonStyle(globalTheme.theme)
  return (
    <ThemeProvider
      theme={
        customTheme
          ? getButtonTheme(defaultButtonTheme, customTheme)
          : defaultButtonTheme
      }
    >
      {children}
    </ThemeProvider>
  )
}
