'use client'
import React from 'react'
import DropdownStyle from './Dropdown.styled'
import { DropdownProps } from './Dropdown.type'

const { Wrap } = DropdownStyle

export default function Dropdown({ $css, ...props }: DropdownProps) {
  return (
    <Wrap $css={$css} {...props}>
      Dropdown
    </Wrap>
  )
}
