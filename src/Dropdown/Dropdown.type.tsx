import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { DropdownThemeType } from './Dropdown.theme'

export type DropdownListType<T extends string | number> = {
  [key in T]: string | number
}

export interface DropdownProps<T extends string | number>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string
  $width?: number | string
  list: string[] | DropdownListType<T>
  placeholder?: string
  customTheme?: PartialDeep<DropdownThemeType>
  disabled?: boolean
  readOnly?: boolean
  value?: T | null
  emitValue?: (value: T) => void
}
