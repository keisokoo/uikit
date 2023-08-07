import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { ButtonThemeType } from './Button.theme'

export interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string
  customTheme?: PartialDeep<ButtonThemeType>
}
