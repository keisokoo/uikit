import { TestComp } from '@keisokoo/uikit'
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>
      <TestComp />
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
