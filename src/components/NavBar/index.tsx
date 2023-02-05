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

const NavBar: React.FC = () => {
  const theme = useAppSelector((store) => store.ui.colorTheme)
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <NavLink to={ROUTES.home}>
          <img src={`./assets/${theme}-logo.svg`} alt="" />
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
