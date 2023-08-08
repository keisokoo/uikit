import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { CalendarThemeType } from './Calendar.theme'

export interface CalendarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string
  customTheme?: PartialDeep<CalendarThemeType>
  comparisonType?: 'start' | 'end'
}
