/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './GalleryItem.module.scss'

import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  id: number
  name: string
  slug: string
  description: string
  img: { [index: string]: string }
}

const GalleryItem: React.FC<Props> = ({ id, name, slug, img, description }) => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  return (
    <li className={style.item}>
      {id == 1 ? <img src="assets/home/desktop/pattern-circles.svg" alt="" className={style.pattern} /> : ''}
      <div className={style.img}>
        <img src={`${img[picSize]}`} alt="" />
      </div>
      <div className={style.field}>
        <div className={style.content}>
          {id == 1 ? <h1 className={style.title}>{name}</h1> : <h2 className={style.title}>{name}</h2>}
          {id == 1 ? <p className={style.desc}>{description}</p> : ''}
          <NavLink to={ROUTES.product(`${slug}`)} className={style.button}>
            see product
          </NavLink>
        </div>
      </div>
    </li>
  )
}
export default GalleryItem
