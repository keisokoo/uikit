import * as React from 'react'
import styled from 'styled-components'
import styles from './styles.module.scss'

const TestDiv = styled.div`
  color: blue;
`
export interface TestCompProps {
  hello?: string
}
export const TestComp = ({ hello }: TestCompProps) => {
  return (
    <div className={styles.page}>
      {hello}
      <TestDiv>Blue</TestDiv>
      TestComp
    </div>
  )
}
