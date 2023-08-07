'use client'
import React from 'react'
import ButtonStyle from './Button.styled'
import { ButtonProvider } from './Button.theme'
import { ButtonProps } from './Button.type'

const { Wrap } = ButtonStyle

const DefaultButton = ({ $css, customTheme, ...props }: ButtonProps) => {
  return (
    <ButtonProvider customTheme={customTheme}>
      <Wrap $css={$css} {...props}>
        Button
      </Wrap>
    </ButtonProvider>
  )
}

const Button = (props: ButtonProps) => {
  return <DefaultButton {...props} />
}

export default Button
