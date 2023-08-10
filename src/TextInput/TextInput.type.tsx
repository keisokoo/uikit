import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CSSProp, RuleSet } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { TextInputThemeType } from './TextInput.theme'

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  $css?: CSSProp | string | RuleSet<object>
  $wrapCss?: CSSProp | string | RuleSet<object>
  wrapProps?: React.HTMLAttributes<HTMLDivElement>
  prepend?: React.ReactNode
  append?: React.ReactNode
  customTheme?: PartialDeep<TextInputThemeType>
  disableRemoveButton?: boolean
}
export type TextInputStyleType = 'default' | 'box' | 'underline'
export interface TextInputStyleProps {
  theme: TextInputThemeType
  $css?: CSSProp | string | RuleSet<object>
  $inputStyle: TextInputStyleType
  $radius?: number | string
}
