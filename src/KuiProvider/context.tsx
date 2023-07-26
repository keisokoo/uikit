'use client'
import React from 'react'
import { defaultThemes } from '../themes'

export interface KuiContextProps {
  theme: typeof defaultThemes
  setTheme?: (theme?: Partial<typeof defaultThemes>) => void
}
export const KuiContext = React.createContext<KuiContextProps>({
  theme: defaultThemes,
})
