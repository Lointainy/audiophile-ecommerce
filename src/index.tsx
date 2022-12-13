import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* Styles */
import '@styles/main.scss'

/* Fonts */
import '@fontsource/manrope'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/700.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
