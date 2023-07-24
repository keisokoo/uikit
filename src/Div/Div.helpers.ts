import { CSSProp, css } from 'styled-components'
import { AddCssProps } from './Div.type'

function convertToCSS(key: string, value: string | number, inline?: boolean) {
  if (inline) {
    if (!key.includes('$')) return ''
    key = key.replace('$', '')
  }
  const cssKey = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  return `${cssKey}: ${typeof value === 'number' ? value + 'px' : value};`
}
export function convertObjectToCSS(
  styles: React.CSSProperties,
  inline?: boolean
) {
  return Object.entries(styles)
    .map(([key, value]) => {
      return convertToCSS(key, value, inline)
    })
    .join(' ')
}

export const AddCss = <T>(props: AddCssProps<T>): CSSProp =>
  typeof props.$css === 'string'
    ? css`
        ${props.$css}
      `
    : props.$css || css``
