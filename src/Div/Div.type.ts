import { CSSProperties } from 'react'
import { CSSProp, RuleSet } from 'styled-components'

export type AddCssProps<T> = T & {
  $css?: ExtraCss
}

export type CSSObject = {
  [P in keyof CSSProperties as `$${P}`]: CSSProperties[P]
}
export type ExtraCss = CSSProp | string | RuleSet<object>
export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  CSSObject & {
    $style?: React.CSSProperties
    $css?: ExtraCss
  }
