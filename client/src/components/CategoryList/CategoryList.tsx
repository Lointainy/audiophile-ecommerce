/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Utils */
import { links } from '@/utils/links'

/* Styles */
import style from './CategoryList.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler, PropsWithChildren } from 'react'

/* Types */
interface Props extends PropsWithChildren {
  mobile?: boolean
  closeNav?: () => void
}

const CategoryList: React.FC<Props> = ({ closeNav, mobile }) => {
  const category = links.filter((i) => i.id != 1)

  return (
    <div className={style.category}>
      <ul className={style.list}>
        {category.map((item) => {
          return (
            <li key={item.id} className={style.item}>
              <NavLink to={ROUTES.category(`${item.url}`)} className={style.item__field} onClick={closeNav}>
                <img src={`${item.img}`} alt="" className={style.img} />
                <div className={style.title}>{item.title}</div>
                <div className={style.subtitle}>
                  <span className={style.link}>SHOP</span>
                  <Icon icon="chevron-right" className={style.icon} />
                </div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryList
