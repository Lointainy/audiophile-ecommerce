/* Styles */
import style from './Header.module.scss'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Components */
import { CartToggle, DesctopNav, SwitchTheme, ToggleMenu } from '@components'

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.mobile}>
        <ToggleMenu />
      </div>

      <div className={style.logo}>
        <NavLink to={ROUTES.home}>
          <img src="" alt="" />
          logo
        </NavLink>
      </div>

      <div className={style.desktop}>
        <DesctopNav />
      </div>

      <div className={style.theme}>
        <SwitchTheme />
      </div>

      <div className={style.cart}>
        <CartToggle />
      </div>
    </div>
  )
}

export default Header
