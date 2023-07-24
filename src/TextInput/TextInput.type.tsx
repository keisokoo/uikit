import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CSSProp } from 'styled-components'
import TextInputTheme from './TextInput.theme'

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
}
export type CurrentTextInputThemeType = typeof TextInputTheme
export type TextInputStyleType = 'box' | 'underline'
export interface TextInputStyleProps {
  theme: CurrentTextInputThemeType
  $css?: CSSProp | string
  $inputStyle: TextInputStyleType
  $radius?: number | string
}
