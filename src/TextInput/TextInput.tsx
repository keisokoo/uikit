import classNames from 'classnames'
import React, { MutableRefObject, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import TextInputStyle from './TextInput.styled'
import TextInputTheme from './TextInput.theme'
import { TextInputProps, TextInputStyleType } from './TextInput.type'
import { DeleteInput } from './icons'

const { Wrap, Input } = TextInputStyle

const DefaultTextInput = ({
  $wrapCss,
  wrapProps,
  inputStyle,
  prepend,
  append,
  $radius,
  onFocus,
  onBlur,
  onChange,
  ...props
}: TextInputProps & {
  inputStyle: TextInputStyleType
  $radius?: number | string
}) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [focus, set_focus] = useState<boolean>(false)
  const [valued, set_valued] = useState<boolean>(false)
  return (
    <ThemeProvider theme={TextInputTheme}>
      <Wrap
        className={classNames({
          readOnly: props.readOnly,
          disabled: props.disabled,
          valued,
          focus,
        })}
        $inputStyle={inputStyle}
        $css={$wrapCss}
        $radius={$radius}
        {...wrapProps}
      >
        {prepend}
        <Input
          ref={inputRef}
          onFocus={(e) => {
            set_focus(true)
            onFocus && onFocus(e)
          }}
          onBlur={(e) => {
            set_focus(false)
            onBlur && onBlur(e)
          }}
          onChange={(e) => {
            set_valued(e.target.value.length > 0)
            onChange && onChange(e)
          }}
          $inputStyle={inputStyle}
          {...props}
        />
        {append}
        <button
          className="delete-icon"
          onClick={() => {
            if (!valued) return
            const inputEl = inputRef.current
            if (inputEl) {
              const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'value'
              )?.set

              if (nativeInputValueSetter === undefined) return
              nativeInputValueSetter?.call(inputEl, '')
              const nextEvent = new Event('change', { bubbles: true })
              inputEl.dispatchEvent(nextEvent)
              inputEl.focus()
            }
          }}
        >
          {valued && <DeleteInput />}
        </button>
      </Wrap>
    </ThemeProvider>
  )
}

const BoxInput = (props: TextInputProps & { $radius?: number | string }) => (
  <DefaultTextInput inputStyle="box" {...props} />
)

const UnderlineInput = (props: TextInputProps) => (
  <DefaultTextInput inputStyle="underline" {...props} />
)

const TextInput = (props: TextInputProps & { $radius?: number | string }) => (
  <BoxInput {...props} />
)
TextInput.Underline = UnderlineInput

export default TextInput
