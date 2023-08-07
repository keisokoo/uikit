import styled, { CSSProp, css } from 'styled-components'
import { TextInputThemeType } from './TextInput.theme'
import { TextInputStyleProps, TextInputStyleType } from './TextInput.type'

const getWrapStyle = (
  props: TextInputThemeType,
  styleType: TextInputStyleType
) => {
  const { color, textStyle } = props
  const WrapStyleCSS = {
    default: css``,
    box: css`
      border: 1px solid ${color.box.borderColor};
      background-color: ${color.box.backgroundColor};
      transition: border-bottom 0.3s linear;
      color: ${color.box.textColor};
      ${textStyle.default}
      padding: 0 8px;
      &.focus {
        background-color: ${color.box.backgroundFocusColor};
        border: 1px solid ${color.box.borderFocusColor};
      }
      &.readOnly {
        border: none;
      }
      &.disabled {
        color: ${color.box.textDisabledColor};
        border: 1px solid ${color.box.borderDisabledColor};
      }
    `,
    underline: css`
      border-bottom: 1px solid ${color.underline.borderColor};
      background-color: transparent;
      transition: border-bottom 0.3s linear;
      color: ${color.underline.textColor};
      ${textStyle.default}
      &.focus {
        background-color: ${color.underline.backgroundFocusColor};
        border-bottom: 1px solid ${color.underline.borderFocusColor};
      }
      &.readOnly {
        border-bottom: none;
      }
      &.disabled {
        color: ${color.underline.textDisabledColor};
        border-bottom: 1px solid ${color.underline.borderDisabledColor};
      }
    `,
  } as { [key in TextInputStyleType]: CSSProp }
  return WrapStyleCSS[styleType]
}
const getInputStyle = (
  props: TextInputThemeType,
  styleType: TextInputStyleType
) => {
  const { color, textStyle } = props
  const InputStyleCSS = {
    default: css`
      appearance: none;
      border: none;
      outline: none;
      width: 100%;
      background-color: transparent;
      color: inherit;
      ${textStyle.default}
    `,
    box: css`
      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      width: 100%;
      padding: 8px 0;
      color: ${color.box.textColor};
      ${textStyle.default}
      &::placeholder {
        color: ${color.box.placeholderColor};
      }
      &:disabled {
        color: ${color.box.textDisabledColor};
      }
    `,
    underline: css`
      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      width: 100%;
      padding: 8px 0;
      color: ${color.underline.textColor};
      ${textStyle.default}
      &::placeholder {
        color: ${color.underline.placeholderColor};
      }
      &:disabled {
        color: ${color.underline.textDisabledColor};
      }
    `,
  } as { [key in TextInputStyleType]: CSSProp }
  return InputStyleCSS[styleType]
}

const TextInputStyle = {
  Wrap: styled.div<TextInputStyleProps>`
    ${({ theme, $css, $inputStyle, $radius }) => css`
      ${getWrapStyle(theme, $inputStyle)}
      display: inline-flex;
      align-items: center;
      gap: 4px;
      input {
        flex: 1;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &.delete-icon {
          width: 18px;
          height: auto;
          &.hidden {
            opacity: 0;
          }
          &:hover {
            opacity: 1;
          }
        }
        &:focus {
          outline: none;
          svg {
          }
          path {
            fill: ${theme.color.iconFocusColor};
          }
        }
      }
      ${$radius !== undefined &&
      `border-radius: ${
        typeof $radius === 'number' ? `${$radius}px` : $radius
      };`}
      ${$css ?? ''}
    `};
  `,
  Input: styled.input<TextInputStyleProps>`
    ${({ theme, $css, $inputStyle }) => css`
      ${getInputStyle(theme, $inputStyle)}
      ${$css ?? ''}
    `}
  `,
}
export default TextInputStyle
