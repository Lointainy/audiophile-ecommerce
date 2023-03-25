/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Components */
import { DesktopNav, MobileNav, SwitchTheme, SwitchCart } from '@components'

/* Styles */
import style from './index.module.scss'

/* Logo */
import darkLogo from '@/assets/image/dark-theme-logo.svg'
import lightLogo from '@/assets/image/light-theme-logo.svg'

const NavBar: React.FC = () => {
  const theme = useAppSelector((store) => store.ui.colorTheme)
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <NavLink to={ROUTES.home}>
          {theme == 'dark-theme' && <img src={`${darkLogo}`} alt="logo" />}
          {theme == 'light-theme' && <img src={`${lightLogo}`} alt="logo" />}
        </NavLink>
      </div>

      <MobileNav />

      <DesktopNav />

      <SwitchTheme />

      <SwitchCart />
    </nav>
  )
}
export default NavBar
