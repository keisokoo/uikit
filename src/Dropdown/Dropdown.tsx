'use client'
import { useOutsideClick } from '@/hooks'
import classNames from 'classnames'
import { uniq } from 'lodash-es'
import React from 'react'
import DropdownStyle from './Dropdown.styled'
import { DropdownProvider } from './Dropdown.theme'
import { DropdownListType, DropdownProps } from './Dropdown.type'
import SvgCaretDown from './icons/CaretDown'

const { Wrap, Label, List, Item } = DropdownStyle

const DefaultDropdown = ({
  $css,
  $width,
  list,
  customTheme,
  placeholder = '선택해주세요.',
  disabled,
  readOnly,
  ...props
}: DropdownProps) => {
  const [focus, set_focus] = React.useState<boolean>(false)
  const [minWidth, set_minWidth] = React.useState<number>(0)
  const [value, set_value] = React.useState<
    { [key in string | number]: string | number } | null
  >(null)
  const valueKey = React.useMemo(() => {
    if (value) {
      return Object.keys(value)[0]
    }
    return null
  }, [value])

  const labelString = React.useMemo(() => {
    if (value) {
      return value[valueKey]
    }
    return null
  }, [value])
  const [memorizedList, set_memorizedList] =
    React.useState<DropdownListType | null>(null)
  const [currentList, set_currentList] =
    React.useState<DropdownListType | null>(null)

  const getCurrentList = React.useCallback(() => {
    if (Array.isArray(list)) {
      const obj = uniq(list).reduce((acc, cur) => {
        acc[cur] = cur
        return acc
      }, {} as DropdownListType)
      return obj
    } else {
      return list
    }
  }, [list])

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
              Object.keys(memorizedList).map((key) => (
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
                refs[activeIndex].current.focus()
                e.preventDefault()
              } else if (e.key === 'ArrowUp') {
                const activeIndex = Object.keys(currentList).length - 1
                refs[activeIndex].current.focus()
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
          <div>{labelString ?? placeholder}</div>
          <SvgCaretDown width={18} height={18} />
        </Label>
        {currentList && (
          <List className={classNames({ focus })}>
            {Object.keys(currentList).map((key, index) => (
              <Item
                ref={refs[index]}
                tabIndex={0}
                key={key}
                className={classNames({ current: valueKey === key })}
                data-value={key.toString()}
                onClick={() => {
                  set_value({ [key]: currentList[key] })
                  set_currentList(null)
                  labelRef.current?.focus()
                }}
                onKeyDown={(e) => {
                  if (disabled || readOnly) return
                  if (e.code.includes('Enter') || e.code === 'Space') {
                    set_value({ [key]: currentList[key] })
                    set_currentList(null)
                    labelRef.current?.focus()
                  }
                  if (e.key === 'ArrowDown') {
                    const activeIndex =
                      (index + 1) % Object.keys(currentList).length
                    refs[activeIndex].current.focus()
                    e.preventDefault()
                  } else if (e.key === 'ArrowUp') {
                    const activeIndex =
                      (index + Object.keys(currentList).length - 1) %
                      Object.keys(currentList).length
                    refs[activeIndex].current.focus()
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

const Dropdown = (props: DropdownProps) => {
  return <DefaultDropdown {...props} />
}

export default Dropdown
