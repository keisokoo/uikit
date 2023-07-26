'use client'
import styled, { css } from 'styled-components'
import { AddCss, convertObjectToCSS } from './Div.helpers'
import { DivProps } from './Div.type'

export const Div = styled.div<DivProps>`
  ${AddCss}
  ${({ $style, $css, ...rest }) => {
    const inlineStyle = convertObjectToCSS(rest, true)
    const objectStyle = $style ? convertObjectToCSS($style) : ``
    const cssStyle =
      typeof $css === 'string'
        ? css`
            ${$css}
          `
        : $css || css``
    return (cssStyle.toString() + objectStyle + inlineStyle).trim()
  }}
`
