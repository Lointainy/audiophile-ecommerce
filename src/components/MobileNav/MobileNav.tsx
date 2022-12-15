/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Utils */
import { links } from '@/utils/links'

/* Style */
import style from './MobileNav.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const MobileNav: React.FC = () => {
  const dropdown = useAppSelector((store) => store.data.nav)

  const category = links.filter((i) => i.id != 1)

  return (
    <>
      {dropdown ? (
        <nav className={style.navigation}>
          <ul className={style.list}>
            {category.map((item) => {
              return (
                <li key={item.id} className={style.item}>
                  <NavLink to={ROUTES.category(`${item.url}`)} className={style.field}>
                    <img src={`${item.img}`} alt="" className={style.img} />
                    <div className={style.title}>{item.title}</div>
                    <div className={style.subtitle}>
                      <span>SHOP</span>
                      <Icon icon="chevron-right" className={style.icon} />
                    </div>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : (
        ''
      )}
    </>
  )
}
export default MobileNav
