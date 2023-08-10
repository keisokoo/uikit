import { Dayjs } from 'dayjs'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CSSProp, RuleSet } from 'styled-components'
import { PartialDeep } from 'type-fest'
import { CalendarThemeType } from './Calendar.theme'
interface DefaultCalendarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $css?: CSSProp | string | RuleSet<object>
  customTheme?: PartialDeep<CalendarThemeType>
  comparisonType?: 'start' | 'end'
}
interface SingleCalendarProps extends DefaultCalendarProps {
  pickType?: 'single'
  value?: Dayjs | null
  emitValue?: (value: Dayjs | null) => void
}
interface RangeCalendarProps extends DefaultCalendarProps {
  pickType?: 'range'
  value?: { start: Dayjs | null; end: Dayjs | null }
  emitValue?: (value: { start: Dayjs | null; end: Dayjs | null }) => void
}

export type CalendarProps = SingleCalendarProps | RangeCalendarProps
