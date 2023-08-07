'use client'
import React from 'react'
import DropdownStyle from './Dropdown.styled'
import { DropdownProvider } from './Dropdown.theme'
import { DropdownListType, DropdownProps } from './Dropdown.type'

const { Wrap, Label, List, Item } = DropdownStyle

const DefaultDropdown = ({
  $css,
  list,
  customTheme,
  placeholder = '선택해주세요.',
  ...props
}: DropdownProps) => {
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
      const obj = list.reduce((acc, cur) => {
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
  React.useEffect(() => {
    if (memorizedRef.current) {
      const { width } = memorizedRef.current.getBoundingClientRect()
      width && set_minWidth(width)
    }
  }, [memorizedRef.current])
  return (
    <DropdownProvider customTheme={customTheme}>
      <Wrap $css={$css} {...props}>
        {minWidth === 0 && (
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
          style={{ minWidth }}
          onClick={() => {
            const obj = getCurrentList()
            set_currentList(obj)
          }}
        >
          {labelString ?? placeholder}
        </Label>
        <List>
          {currentList &&
            Object.keys(currentList).map((key) => (
              <Item
                key={key}
                data-value={key.toString()}
                onClick={() => {
                  set_value({ [key]: currentList[key] })
                  set_currentList(null)
                }}
                style={{ width: '100%' }}
              >
                {currentList[key]}
              </Item>
            ))}
        </List>
      </Wrap>
    </DropdownProvider>
  )
}

const Dropdown = (props: DropdownProps) => {
  return <DefaultDropdown {...props} />
}

export default Dropdown
