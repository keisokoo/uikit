import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { DropdownThemeType } from './Dropdown.theme'

export type DropdownListType = {
  [key in string | number]: string | number
}

export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string
  list: string[] | DropdownListType
  placeholder?: string
  customTheme?: PartialDeep<DropdownThemeType>
}
