'use client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultThemes } from '../themes'
import { KuiContext, KuiContextProps } from './context'

interface KuiProviderProps {
  children: React.ReactNode
  theme?: KuiContextProps
}
interface UseThemeProps {
  theme?: typeof defaultThemes
}
const useTheme = ({ theme }: UseThemeProps) => {
  const [themes, setThemes] = React.useState<typeof defaultThemes>(
    theme ?? defaultThemes
  )
  const handleTheme = (_theme?: Partial<typeof defaultThemes>) => {
    setThemes({ ...themes, ..._theme })
  }
  const currentTheme = { theme: themes, setTheme: handleTheme }
  return currentTheme
}
const KuiProvider = ({ children, theme }: KuiProviderProps) => {
  const currentTheme = useTheme({ theme: theme?.theme })
  return (
    <KuiContext.Provider value={currentTheme}>{children}</KuiContext.Provider>
  )
}
interface StyledProviderProps {
  children: React.ReactNode
  theme?: typeof defaultThemes
}
export const StyledProvider = ({ children, theme }: StyledProviderProps) => {
  const currentTheme = useTheme({ theme })
  return (
    <KuiProvider theme={currentTheme}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </KuiProvider>
  )
}
