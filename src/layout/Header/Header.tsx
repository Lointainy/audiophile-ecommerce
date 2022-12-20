/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Styles */
import style from './Header.module.scss'

/* Components */
import { CartToggle, DesktopNav, MobileNav, SwitchTheme, ToggleMenu } from '@components'

const Header: React.FC = () => {
  const mobileNav = useAppSelector((store) => store.data.nav)

  return (
    <header>
      <div className={style.logo}>
        <NavLink to={ROUTES.home}>
          <img src="" alt="" />
          logo
        </NavLink>
      </div>

      <div className={style.mobile}>
        <div className={style.toggle}>
          <ToggleMenu />
        </div>
        {mobileNav && <MobileNav />}
      </div>

      <div className={style.desktop}>
        <DesktopNav />
      </div>

      <div className={style.theme}>
        <SwitchTheme />
      </div>

      <div className={style.cart}>
        <CartToggle />
      </div>
      {/* <div className={style.mobile}>
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
      </div> */}
    </header>
  )
}

export default Header
