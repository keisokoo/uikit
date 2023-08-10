import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp, RuleSet } from 'styled-components'

export interface CodeBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string | RuleSet<object>
  children?: string
  title?: string
}
