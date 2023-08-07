import styled, { CSSProp, css } from 'styled-components'
import { ButtonThemeType } from './Button.theme'

interface ButtonProps {
  $css?: CSSProp | string
  theme: ButtonThemeType
}
const ButtonStyle = {
  Wrap: styled.div<ButtonProps>(
    ({ theme: { color }, $css }) => css`
      ${$css ?? ''}
    `
  ),
}
export default ButtonStyle
