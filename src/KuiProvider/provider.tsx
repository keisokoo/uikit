'use client'
import { merge } from 'lodash-es'
import React from 'react'
import { PartialDeep } from 'type-fest'
import { DefaultThemes, defaultThemes } from '../themes'
import { KuiContext } from './context'

export interface KuiProviderProps {
  children: React.ReactNode
  theme?: PartialDeep<DefaultThemes>
}
interface UseThemeProps {
  theme?: PartialDeep<DefaultThemes>
}
const useTheme = ({ theme }: UseThemeProps) => {
  const [themes, setThemes] = React.useState<DefaultThemes>(
    theme ? merge(defaultThemes, theme) : defaultThemes
  )

  const handleTheme = (_theme?: PartialDeep<DefaultThemes>) => {
    setThemes(merge(themes, _theme))
  }

  const currentTheme = { theme: themes, setTheme: handleTheme }

  return currentTheme
}
export const KuiProvider = ({ children, theme }: KuiProviderProps) => {
  const currentTheme = useTheme({ theme })
  return (
    <KuiContext.Provider value={currentTheme}>{children}</KuiContext.Provider>
  )
}
