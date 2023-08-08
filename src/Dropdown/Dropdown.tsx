'use client'
import classNames from 'classnames'
import { uniq } from 'lodash-es'
import React, { useEffect } from 'react'
import { useOutsideClick } from '../hooks'
import DropdownStyle from './Dropdown.styled'
import { DropdownProvider } from './Dropdown.theme'
import { DropdownListType, DropdownProps } from './Dropdown.type'
import SvgCaretDown from './icons/CaretDown'

const { Wrap, Label, List, Item } = DropdownStyle

const DefaultDropdown = <T extends string | number>({
  $css,
  $width,
  list,
  customTheme,
  placeholder = '선택해주세요.',
  disabled,
  readOnly,
  value,
  emitValue,
  ...props
}: DropdownProps<T>) => {
  const [init, set_init] = React.useState<boolean>(false)
  const [focus, set_focus] = React.useState<boolean>(false)
  const [minWidth, set_minWidth] = React.useState<number>(0)
  const [selectedItem, set_selectedItem] = React.useState<
    { [key in string | number]: string | number } | null
  >(null)
  const valueKey = React.useMemo(() => {
    if (selectedItem) {
      return Object.keys(selectedItem)[0]
    }
    return null
  }, [selectedItem])

  const labelString = React.useMemo(() => {
    if (selectedItem && valueKey !== null) {
      return selectedItem[valueKey]
    }
    return null
  }, [selectedItem])
  const [memorizedList, set_memorizedList] =
    React.useState<DropdownListType<T> | null>(null)
  const [currentList, set_currentList] =
    React.useState<DropdownListType<T> | null>(null)

  const getCurrentList = React.useCallback(() => {
    if (Array.isArray(list)) {
      const obj = (uniq(list) as Array<T>).reduce((acc, cur) => {
        acc[cur] = cur
        return acc
      }, {} as DropdownListType<T>)
      return obj
    } else {
      return list
    }
  }, [list])

  useEffect(() => {
    if (value && list) {
      const current = getCurrentList()
      const obj = current[value as T]
      set_selectedItem({ [value]: obj })
    }
    set_init(true)
  }, [value, getCurrentList])

  React.useEffect(() => {
    const obj = getCurrentList()
    set_memorizedList(obj)
  }, [])
  const memorizedRef = React.useRef<HTMLDivElement>(null)
  const labelRef = React.useRef<HTMLDivElement>(null)
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const refs = list ? Object.keys(list).map(() => React.useRef(null)) : []
  React.useEffect(() => {
    if (memorizedRef.current) {
      const { width } = memorizedRef.current.getBoundingClientRect()
      width && set_minWidth(width)
    }
  }, [memorizedRef.current])
  useOutsideClick(
    wrapRef.current,
    () => {
      set_currentList(null)
    },
    [currentList]
  )
  return (
    <DropdownProvider customTheme={customTheme}>
      <Wrap ref={wrapRef} $css={$css} $width={$width} {...props}>
        {minWidth === 0 && !$width && (
          <List ref={memorizedRef}>
            {memorizedList &&
              (Object.keys(memorizedList) as Array<T>).map((key) => (
                <div key={key} data-value={key.toString()}>
                  {memorizedList[key]}
                </div>
              ))}
          </List>
        )}
        <Label
          ref={labelRef}
          tabIndex={0}
          {...(!$width && { style: { minWidth } })}
          $width={$width}
          className={classNames({
            focus,
            disabled,
            readOnly,
            active: currentList !== null,
            placeholder: !valueKey,
          })}
          onClick={() => {
            if (disabled || readOnly) return
            const obj = getCurrentList()
            set_currentList((prev) => (prev === null ? obj : null))
          }}
          onKeyDown={(e) => {
            if (disabled || readOnly) return
            if (e.code.includes('Enter') || e.code === 'Space') {
              const obj = getCurrentList()
              set_currentList((prev) => (prev === null ? obj : null))
            }
            if (currentList) {
              if (e.key === 'ArrowDown') {
                const activeIndex = 0
                const currentRef = refs[activeIndex].current
                if (currentRef) (currentRef as HTMLDivElement).focus()
                e.preventDefault()
              } else if (e.key === 'ArrowUp') {
                const activeIndex = Object.keys(currentList).length - 1
                const currentRef = refs[activeIndex].current
                if (currentRef) (currentRef as HTMLDivElement).focus()
                e.preventDefault()
              }
            }
          }}
          onFocus={() => {
            if (disabled || readOnly) return
            set_focus(true)
          }}
          onBlur={() => {
            if (disabled || readOnly) return
            set_focus(false)
          }}
        >
          <div>{init ? labelString ?? placeholder : ''}</div>
          <SvgCaretDown width={18} height={18} />
        </Label>
        {currentList && (
          <List className={classNames({ focus })}>
            {(Object.keys(currentList) as Array<T>).map((key, index) => (
              <Item
                ref={refs[index]}
                tabIndex={0}
                key={key}
                className={classNames({ current: valueKey === key })}
                data-value={key.toString()}
                onClick={() => {
                  set_selectedItem({ [key]: currentList[key] })
                  set_currentList(null)
                  labelRef.current?.focus()
                  emitValue && emitValue(key)
                }}
                onFocus={() => {
                  if (disabled || readOnly) return
                  set_focus(true)
                }}
                onBlur={() => {
                  if (disabled || readOnly) return
                  set_focus(false)
                }}
                onKeyDown={(e) => {
                  if (disabled || readOnly) return
                  if (e.code.includes('Enter') || e.code === 'Space') {
                    set_selectedItem({ [key]: currentList[key] })
                    set_currentList(null)
                    labelRef.current?.focus()
                    emitValue && emitValue(key)
                  }
                  if (e.key === 'ArrowDown') {
                    const activeIndex =
                      (index + 1) % Object.keys(currentList).length
                    const currentRef = refs[activeIndex].current
                    if (currentRef) (currentRef as HTMLDivElement).focus()
                    e.preventDefault()
                  } else if (e.key === 'ArrowUp') {
                    const activeIndex =
                      (index + Object.keys(currentList).length - 1) %
                      Object.keys(currentList).length
                    const currentRef = refs[activeIndex].current
                    if (currentRef) (currentRef as HTMLDivElement).focus()
                    e.preventDefault()
                  }
                }}
                style={{ width: '100%' }}
              >
                {currentList[key]}
              </Item>
            ))}
          </List>
        )}
      </Wrap>
    </DropdownProvider>
  )
}

const Dropdown = <T extends string | number>(props: DropdownProps<T>) => {
  return <DefaultDropdown {...props} />
}

export default Dropdown
