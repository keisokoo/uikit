import React from 'react'
import { css } from 'styled-components'
import {
  Button,
  CodeBlock,
  Div,
  Dropdown,
  KuiProvider,
  TextInput,
} from '../../src'
import '../scss/style.scss'

function App() {
  const [value, set_value] = React.useState<string | null>(null)
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
        <div>4</div>
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
          $width={220}
          value={value}
          emitValue={(value) => set_value(value)}
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
      <div>
        <br />
        <Button loading={true}>test</Button>
      </div>
      <div>
        <br />
        <Button>test</Button>
      </div>
      <div>
        <br />
        <Button disabled>test</Button>
      </div>
      <div>
        <br />
        <Button $buttonStyle="border" $width={140}>
          test
        </Button>
      </div>
    </div>
  )
}
export default App
