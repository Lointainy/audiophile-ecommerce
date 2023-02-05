/* Styles */
import style from './Footer.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { DesktopNav } from '@components'

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className={style.logo}>
          <img src="" alt="" />
          logo
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
