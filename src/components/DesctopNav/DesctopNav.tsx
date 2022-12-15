/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Utils */
import { links } from '@/utils/links'

/* Styles */
import style from './DesctopNav.module.scss'

const DesctopNav: React.FC = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        {links.map((item) => {
          return (
            <li className={style.item} key={item.id}>
              <NavLink to={item.url == 'home' ? ROUTES.home : ROUTES.category(`${item.url}`)}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default DesctopNav
