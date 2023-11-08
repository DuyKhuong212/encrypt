import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TestComponent from './TestComponent'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  {/* <TestComponent/> */}
    <App />
    {/* <Test/> */}
  </>,
)
