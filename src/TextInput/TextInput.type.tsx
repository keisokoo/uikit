import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CSSProp } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { TextInputThemeType } from './TextInput.theme'

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  $css?: CSSProp | string
  $wrapCss?: CSSProp | string
  wrapProps?: React.HTMLAttributes<HTMLDivElement>
  prepend?: React.ReactNode
  append?: React.ReactNode
  customTheme?: PartialDeep<TextInputThemeType>
  disableRemoveButton?: boolean
}
export type TextInputStyleType = 'default' | 'box' | 'underline'
export interface TextInputStyleProps {
  theme: TextInputThemeType
  $css?: CSSProp | string
  $inputStyle: TextInputStyleType
  $radius?: number | string
}
