import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { KuiContext } from '../KuiProvider/context'
import { DefaultThemes } from '../themes'

export function getTextInputStyle(theme: DefaultThemes) {
  const { colors, fonts } = theme
  return {
    color: {
      iconFocusColor: colors.primary,
      box: {
        textColor: colors.foreground,
        textDisabledColor: colors.gray5,
        backgroundColor: colors.gray6,
        backgroundFocusColor: colors.fog,
        borderColor: colors.gray4,
        borderFocusColor: colors.primary,
        placeholderColor: colors.gray3,
        borderDisabledColor: colors.white30,
        iconFocusColor: colors.primary,
      },
      underline: {
        textColor: colors.foreground,
        textDisabledColor: colors.gray5,
        backgroundFocusColor: colors.gray6,
        borderColor: colors.gray4,
        borderFocusColor: colors.primary,
        placeholderColor: colors.gray3,
        borderDisabledColor: colors.white30,
        iconFocusColor: colors.primary,
      },
    },
    textStyle: {
      default: fonts.default,
    },
  }
}
export type TextInputThemeType = ReturnType<typeof getTextInputStyle>

export const getTextInputTheme = (
  currentTheme: TextInputThemeType,
  customTheme?: PartialDeep<TextInputThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const TextInputProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<TextInputThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultTextInputTheme = React.useMemo(
    () =>
      getTextInputTheme(
        getTextInputStyle(globalTheme.theme),
        customTheme ?? {}
      ),
    []
  )
  return <ThemeProvider theme={defaultTextInputTheme}>{children}</ThemeProvider>
}
