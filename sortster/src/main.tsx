// import block
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// context provider imports
import ColumnNumberContextProvider from './contexts/columnNumberContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColumnNumberContextProvider>
      <App />
    </ColumnNumberContextProvider>
  </React.StrictMode>,
)
