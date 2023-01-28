import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RecorderProvider } from './react/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecorderProvider audio={true}>
      <App />
    </RecorderProvider>
  </React.StrictMode>,
)
