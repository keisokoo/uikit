import styled, { CSSProp, css } from 'styled-components'
import { DropdownThemeType } from './Dropdown.theme'

interface DropdownProps {
  $css?: CSSProp | string
  $width?: number | string
  theme: DropdownThemeType
}
const DropdownStyle = {
  Wrap: styled.div<DropdownProps>(
    ({ theme: { color, textStyle }, $css, $width }) => css`
      display: inline-block;
      min-width: 100px;
      position: relative;
      ${$width
        ? `width: ${typeof $width === 'number' ? $width + 'px' : $width};`
        : ''}
      ${$css ?? ''}
    `
  ),
  Label: styled.div<DropdownProps>(
    ({ theme: { color, textStyle }, $css, $width }) => css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border: 1px solid ${color.borderColor};
      background-color: ${color.backgroundColor};
      color: ${color.textColor};
      ${textStyle.default}
      padding: 8px;
      cursor: pointer;
      svg {
        path {
          fill: ${color.placeholderColor};
        }
      }
      &.placeholder {
        color: ${color.placeholderColor};
      }
      &:focus {
        outline: none;
        background-color: ${color.backgroundFocusColor};
        border: 1px solid ${color.borderFocusColor};
        svg {
          path {
            fill: ${color.borderFocusColor};
          }
        }
      }
      &.active {
        border-bottom: none;
        svg {
          transform: rotate(-180deg);
        }
      }
      &.readOnly {
        border: none;
      }
      &.disabled {
        color: ${color.textDisabledColor};
        border: 1px solid ${color.borderDisabledColor};
      }
      &:hover {
        background-color: ${color.backgroundHoverColor};
      }
      ${$width ? `width: inherit;` : ''}
      user-select: none;
      ${$css ?? ''}
    `
  ),
  List: styled.div<DropdownProps>(
    ({ theme: { color }, $css }) => css`
      background-color: ${color.backgroundColor};
      border: 1px solid ${color.borderColor};
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      border-top: none;
      &.focus {
        border-color: ${color.borderFocusColor};
      }
      max-height: 180px;
      overflow-y: auto;
      overflow-x: hidden;
      text-overflow: ellipsis;
      ${$css ?? ''}
    `
  ),
  Item: styled.div<DropdownProps>(
    ({ theme: { color }, $css }) => css`
      cursor: pointer;
      width: 100%;
      padding: 4px 8px;
      user-select: none;
      &.current {
        color: ${color.textFocusColor};
      }
      &:hover {
        background-color: ${color.backgroundHoverColor};
      }
      &:focus {
        outline: none;
        background-color: ${color.backgroundFocusColor};
      }
      ${$css ?? ''}
    `
  ),
}
export default DropdownStyle
