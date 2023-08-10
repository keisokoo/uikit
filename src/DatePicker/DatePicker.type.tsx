import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp, RuleSet } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { DatePickerThemeType } from './DatePicker.theme'
export interface DatePickerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string | RuleSet<object>
  customTheme?: PartialDeep<DatePickerThemeType>
}
