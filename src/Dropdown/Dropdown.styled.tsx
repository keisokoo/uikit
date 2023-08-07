import styled, { CSSProp, css } from 'styled-components'
import { DropdownThemeType } from './Dropdown.theme'

interface DropdownProps {
  $css?: CSSProp | string
  theme: DropdownThemeType
}
const DropdownStyle = {
  Wrap: styled.div<DropdownProps>(
    ({ theme: { color }, $css }) => css`
      display: inline-block;
      min-width: 100px;
      position: relative;
      ${$css ?? ''}
    `
  ),
  Label: styled.div<DropdownProps>(
    ({ theme: { color }, $css }) => css`
      padding: 4px 8px;
      ${$css ?? ''}
    `
  ),
  List: styled.div<DropdownProps>(
    ({ theme: { color }, $css }) => css`
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      ${$css ?? ''}
    `
  ),
  Item: styled.div<DropdownProps>(
    ({ theme: { color }, $css }) => css`
      width: 100%;
      padding: 4px 8px;
      ${$css ?? ''}
    `
  ),
}
export default DropdownStyle
