/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Utils */
import { links } from '@/utils/links'

/* Styles */
import style from './DesktopNav.module.scss'

const DesktopNav: React.FC = () => {
  return (
    <ul className={style.desktop}>
      {links.map((item) => {
        return (
          <li className={style.item} key={item.id}>
            <NavLink to={item.title == 'home' ? ROUTES.home : ROUTES.category(`${item.url}`)}>{item.title}</NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default DesktopNav
