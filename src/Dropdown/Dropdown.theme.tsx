import { KuiContext } from '@/KuiProvider'
import { DefaultThemes } from '@/themes'
import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'

export function getDropdownStyle(theme: DefaultThemes) {
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
