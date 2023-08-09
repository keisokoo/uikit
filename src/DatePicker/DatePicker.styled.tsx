import styled, { CSSProp, css } from 'styled-components'
import { DatePickerThemeType } from './DatePicker.theme'

interface DatePickerProps {
  $css?: CSSProp | string
  theme: DatePickerThemeType
}
const DatePickerStyle = {
  Wrap: styled.div<DatePickerProps>(
    ({ theme: { color }, $css }) => css`
      ${$css ?? ''}
    `
  ),
}
export default DatePickerStyle
