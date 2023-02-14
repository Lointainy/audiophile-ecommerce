/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Components */
import { DesktopNav, MobileNav, SwitchTheme } from '@components'

/* Styles */
import style from './index.module.scss'
import CartDropdown from './CartDropdown/CartDropdown'

/* Logo */
import darkLogo from '@public/assets/dark-theme-logo.svg'
import lightLogo from '@public/assets/light-theme-logo.svg'

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

      <CartDropdown />
    </nav>
  )
}
export default NavBar
