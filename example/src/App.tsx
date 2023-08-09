import React from 'react'
import { css } from 'styled-components'
import {
  Button,
  Calendar,
  CodeBlock,
  Div,
  Dropdown,
  KuiProvider,
  LineChart,
  TextInput,
} from '../../src'
import '../scss/style.scss'
import DragSample from './DragSample'

function App() {
  const [value, set_value] = React.useState<string | null>(null)
  const [callDragSample, set_callDragSample] = React.useState(false)
  if (callDragSample) {
    return (
      <DragSample
        onClose={() => {
          set_callDragSample(false)
        }}
      />
    )
  }
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
        <Button
          onClick={() => {
            set_callDragSample(true)
          }}
        >
          드래그 샘플
        </Button>
      </div>
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
      <div>
        <br />
        <LineChart
          chartData={[
            { y: 99, x: 0 },
            { y: 95, x: 16.66 },
            { y: 88, x: 33.33 },
            { y: 98, x: 50 },
            { y: 80, x: 66.66 },
            { y: 86, x: 83.33 },
            { y: 94, x: 100 },
          ]}
          width={257}
          height={220}
          YChartType={'맥박'}
          XChartType={'주간'}
          extraData={[
            { value: 90, color: '#F34040', title: '샘플1' },
            { value: 98, color: 'orange', title: '샘플2' },
          ]}
        />
      </div>
      <div>
        <Calendar pickType="single" emitValue={(value) => console.log(value)} />
      </div>
      <div>
        <Calendar pickType="range" emitValue={(value) => console.log(value)} />
      </div>
    </div>
  )
}
export default App
