import styled, { CSSProp, css, keyframes } from 'styled-components'
import { ButtonThemeType } from './Button.theme'

interface ButtonProps {
  $css?: CSSProp | string
  theme: ButtonThemeType
}
type ButtonStyleProps = {
  $pending?: boolean
  $radius?: number | string
  $buttonStyle?: 'fill' | 'border'
  $width?: number | string
}
const rotate = keyframes`
0%{
  transform: rotate(0deg);
}
100%{
  transform: rotate(360deg);
}
`
const ButtonStyle = {
  Wrap: styled.button<ButtonProps & ButtonStyleProps>(
    ({
      theme: { color, textStyle },
      $css,
      $pending,
      $radius,
      $buttonStyle = 'fill',
      $width,
    }) => css`
      cursor: pointer;
      user-select: none;
      padding: 8px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      ${$width
        ? css`
            width: ${typeof $width === 'number' ? $width + 'px' : $width};
            padding: 8px;
          `
        : ''}
      transition: 0.15s;
      background-color: ${color[$buttonStyle].backgroundColor};
      &:focus {
        outline: none;
        background-color: ${color[$buttonStyle].backgroundFocusColor};
      }
      &:hover {
        background-color: ${color[$buttonStyle].backgroundHoverColor};
      }
      &:active {
        background-color: ${color[$buttonStyle].backgroundActiveColor};
      }
      color: ${color[$buttonStyle].textColor};
      &:disabled {
        cursor: default;
        color: ${color[$buttonStyle].textDisabledColor};
        background-color: ${color[$buttonStyle].backgroundColor} !important;
      }
      ${textStyle.default}
      ${$radius
        ? `border-radius: ${
            typeof $radius === 'number' ? `${$radius}px` : $radius
          };`
        : `border-radius: 4px;`}
      ${$pending
        ? css`
            .loading {
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: ${rotate} 1s linear infinite;
            }
          `
        : ''}
      ${$buttonStyle === 'border'
        ? css`
            box-shadow: inset 0px 0px 0px 1px ${color[$buttonStyle].borderColor};
          `
        : ''}
      ${$css ?? ''}
    `
  ),
}
export default ButtonStyle
