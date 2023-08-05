import styled, { CSSProp, css } from 'styled-components'
  
  interface DropdownProps {
    $css?: CSSProp | string
  }
  const DropdownStyle = {
    Wrap: styled.div<DropdownProps>(
      ({ theme: { color }, $css }) => css`
        ${$css ?? ''}
      `
    ),
  }
  export default DropdownStyle
  