import * as React from 'react'
import styled from 'styled-components'
import styles from './styles.module.scss'

const TestDiv = styled.div`
  color: blue;
`
export const TestComp = () => {
  return (
    <div className={styles.page}>
      <TestDiv>Blue</TestDiv>
      TestComp
    </div>
  )
}
