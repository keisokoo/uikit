import React from 'react'
import ReactDOM from 'react-dom/client'
import { css } from 'styled-components'
import { CodeBlock, Div, Dropdown, KuiProvider, TextInput } from '../../src'
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
      <div>
        <br />
        <TextInput.Box
          placeholder="입력해주세요."
          customTheme={{ color: { box: { textColor: 'blue' } } }}
        />
        <br />
      </div>
      <div>
        <br />
        <KuiProvider theme={{ colors: { foreground: 'white' } }}>
          <TextInput.Underline placeholder="입력해주세요." />
        </KuiProvider>
        <br />
      </div>
      <div>
        <br />
        <Dropdown
          list={[
            'a',
            'bbbbbb',
            'c',
            'd',
            'a',
            'f',
            'e',
            'gg',
            'fb',
            'dp',
            'asdf',
          ]}
        />
        <br />
      </div>
      <div>
        <br />
        <CodeBlock title="test.tsx">{`interface TestProps{
  hello?: string
}`}</CodeBlock>
      </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <App />
)
