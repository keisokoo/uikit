import React from 'react'
import ReactDOM from 'react-dom/client'
import { CodeBlock, TestComp } from '../../src'

function App() {
  return (
    <div>
      <TestComp />
      <CodeBlock title="test.tsx">{`interface TestProps{
  hello?: string
}`}</CodeBlock>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
