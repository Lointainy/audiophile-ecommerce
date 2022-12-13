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

/* ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faChevronLeft, faMinus, faMoon, faPlus, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faPlus, faMinus, faFacebook, faInstagram, faTwitter, faChevronLeft, faSun, faMoon)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
