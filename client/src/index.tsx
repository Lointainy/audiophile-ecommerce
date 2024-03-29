import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* Store */
import { store } from '@/store/store'
import { Provider } from 'react-redux'

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
import {
  faTruckRampBox,
  faBars,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faMinus,
  faMoon,
  faPlus,
  faSun,
  faXmark,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTruckRampBox,
  faCartShopping,
  faPlus,
  faMinus,
  faFacebook,
  faInstagram,
  faTwitter,
  faChevronLeft,
  faChevronRight,
  faSun,
  faMoon,
  faBars,
  faXmark,
  faCircleXmark
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
