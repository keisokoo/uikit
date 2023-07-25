import React from 'react'
import ReactDOM from 'react-dom/client'
import { css } from 'styled-components'
import { CodeBlock, Div, TextInput } from '../../src'
import '../scss/style.scss'

function App() {
  return (
    <div>
      <Div
        $display={'flex'}
        $css={css`
          & > div {
            flex: 1;
            text-align: center;
          }
        `}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Div>
      <TextInput placeholder="입력해주세요." />
      <CodeBlock title="test.tsx">{`interface TestProps{
  hello?: string
}`}</CodeBlock>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <App />
)
