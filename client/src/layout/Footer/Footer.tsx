/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Styles */
import style from './Footer.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { DesktopNav } from '@components'

/* logo */
import darkLogo from '@/assets/image/dark-theme-logo.svg'
import lightLogo from '@/assets/image/light-theme-logo.svg'

// import lightLogo from ''

const Footer: React.FC = () => {
  const theme = useAppSelector((store) => store.ui.colorTheme)
  return (
    <>
      <footer>
        <div className={style.logo}>
          <NavLink to={ROUTES.home}>
            {theme == 'dark-theme' && <img src={`${darkLogo}`} alt="" />}
            {theme == 'light-theme' && <img src={`${lightLogo}`} alt="" />}
          </NavLink>
        </div>
        <nav className={style.navigation}>
          <DesktopNav />
        </nav>
        <div className={style.desc}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
          </p>
        </div>
        <ul className={style.social}>
          <li>
            <Icon icon={['fab', 'facebook']} />
          </li>
          <li>
            <Icon icon={['fab', 'twitter']} />
          </li>
          <li>
            <Icon icon={['fab', 'instagram']} />
          </li>
        </ul>
        <div className={style.copyright}>
          <span>Copyright {new Date().getFullYear()}. All Rights Reserved</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
