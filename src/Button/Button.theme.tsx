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
      fill: {
        textColor: colors.foreground,
        textDisabledColor: colors.gray5,
        backgroundColor: colors.gray6,
        backgroundActiveColor: colors.white30,
        backgroundFocusColor: colors.fog,
        backgroundHoverColor: colors.fog,
        borderColor: colors.gray4,
        borderFocusColor: colors.primary,
        borderDisabledColor: colors.white30,
        iconFocusColor: colors.primary,
      },
      border: {
        textColor: colors.foreground,
        textDisabledColor: colors.gray5,
        backgroundColor: colors.transparent,
        backgroundActiveColor: colors.white30,
        backgroundFocusColor: colors.white10,
        backgroundHoverColor: colors.white10,
        borderColor: colors.white20,
        borderFocusColor: colors.primary,
        borderDisabledColor: colors.white30,
        iconFocusColor: colors.primary,
      },
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
