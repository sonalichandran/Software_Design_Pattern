import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/Style.css'
import App from './App'
import { ThemeProvider } from '@/components/theme-provider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
