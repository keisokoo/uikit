import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { KuiContext } from '../KuiProvider'
import { DefaultThemes } from '../themes'

export function getDropdownStyle(theme: DefaultThemes) {
  const { colors, fonts } = theme
  return {
    color: {
      textColor: colors.foreground,
      textDisabledColor: colors.gray5,
      backgroundColor: colors.gray6,
      backgroundFocusColor: colors.fog,
      backgroundHoverColor: colors.fog,
      borderColor: colors.gray4,
      borderFocusColor: colors.primary,
      placeholderColor: colors.gray3,
      borderDisabledColor: colors.white30,
      textFocusColor: colors.primary,
    },
    textStyle: {
      default: fonts.default,
    },
  }
}
export type DropdownThemeType = ReturnType<typeof getDropdownStyle>

export const getDropdownTheme = (
  currentTheme: DropdownThemeType,
  customTheme?: PartialDeep<DropdownThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const DropdownProvider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<DropdownThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const defaultDropdownTheme = getDropdownStyle(globalTheme.theme)
  return (
    <ThemeProvider
      theme={
        customTheme
          ? getDropdownTheme(defaultDropdownTheme, customTheme)
          : defaultDropdownTheme
      }
    >
      {children}
    </ThemeProvider>
  )
}
