'use client'
import classNames from 'classnames'
import React, { MutableRefObject, useRef, useState } from 'react'
import TextInputStyle from './TextInput.styled'
import { TextInputProvider } from './TextInput.theme'
import { TextInputProps, TextInputStyleType } from './TextInput.type'
import { DeleteInput } from './icons'

const { Wrap, Input } = TextInputStyle

const DefaultTextInput = ({
  $wrapCss,
  wrapProps,
  inputStyle = 'default',
  prepend,
  append,
  $radius,
  onFocus,
  onBlur,
  onChange,
  customTheme,
  disableRemoveButton,
  ...props
}: TextInputProps & {
  inputStyle: TextInputStyleType
  $radius?: number | string
}) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [focus, set_focus] = useState<boolean>(false)
  const [valued, set_valued] = useState<boolean>(false)
  return (
    <TextInputProvider customTheme={customTheme}>
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
        {!disableRemoveButton && (
          <button
            className={classNames('delete-icon', { hidden: !focus })}
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
        )}
      </Wrap>
    </TextInputProvider>
  )
}

const BoxInput = (props: TextInputProps & { $radius?: number | string }) => (
  <DefaultTextInput inputStyle="box" {...props} />
)

const UnderlineInput = (props: TextInputProps) => (
  <DefaultTextInput inputStyle="underline" {...props} />
)

const TextInput = (props: TextInputProps & { $radius?: number | string }) => (
  <DefaultTextInput inputStyle="default" {...props} />
)
TextInput.Underline = UnderlineInput
TextInput.Box = BoxInput

export default TextInput
