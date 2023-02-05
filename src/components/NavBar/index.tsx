/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Components */
import { DesktopNav, MobileNav, SwitchTheme } from '@components'

/* Styles */
import style from './index.module.scss'
import CartDropdown from './CartDropdown/CartDropdown'

const NavBar: React.FC = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <NavLink to={ROUTES.home}>
          <img src="" alt="" />
          audiophile
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
