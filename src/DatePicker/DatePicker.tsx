'use client'
import React from 'react'
import DatePickerStyle from './DatePicker.styled'
import { DatePickerProps } from './DatePicker.type'
import { DatePickerProvider } from './DatePicker.theme'

const { Wrap } = DatePickerStyle

const DefaultDatePicker = ({
  $css,
  customTheme,
  ...props
}: DatePickerProps) => {
  return (
    <DatePickerProvider customTheme={customTheme}>
      <Wrap $css={$css} {...props}>
        DatePicker
      </Wrap>
    </DatePickerProvider>
  )
}

const DatePicker = (props: DatePickerProps) => {
  return <DefaultDatePicker {...props} />
}

export default DatePicker
