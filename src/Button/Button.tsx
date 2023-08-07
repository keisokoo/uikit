'use client'
import React from 'react'
import ButtonStyle from './Button.styled'
import { ButtonProvider } from './Button.theme'
import { ButtonProps } from './Button.type'
import SvgLoading from './icons/Loading'

const { Wrap } = ButtonStyle

const DefaultButton = ({ customTheme, loading, ...props }: ButtonProps) => {
  return (
    <ButtonProvider customTheme={customTheme}>
      <Wrap $pending={!!loading} {...props}>
        {loading ? <SvgLoading /> : props.children}
      </Wrap>
    </ButtonProvider>
  )
}

const Button = (props: ButtonProps) => {
  return <DefaultButton {...props} />
}

export default Button
