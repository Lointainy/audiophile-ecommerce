/* Styles */
import style from './Header.module.scss'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Components */
import { SwitchTheme, ToggleMenu } from '@components'

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.menu__mobile}>
        <ToggleMenu />
      </div>

      <div className={style.logo}>
        <NavLink to={ROUTES.home}>
          <img src="" alt="" />
          logo
        </NavLink>
      </div>

      <ul className={style.menu__desctop}>
        <li className={style.menu__item}>
          <NavLink to={ROUTES.home}>home</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink to={ROUTES.category('headphones')}>headphones</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink to={ROUTES.category('speakers')}>speakers</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink to={ROUTES.category('earphones')}>earphones</NavLink>
        </li>
      </ul>

      <div className={style.theme}>
        <SwitchTheme />
      </div>

      <div className={style.cart}>c</div>
    </div>
  )
}

export default Header
