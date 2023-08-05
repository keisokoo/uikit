import { DetailedHTMLProps, HTMLAttributes } from 'react'
  import { CSSProp } from 'styled-components'

  export interface DropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    $css?: CSSProp | string
  }
  