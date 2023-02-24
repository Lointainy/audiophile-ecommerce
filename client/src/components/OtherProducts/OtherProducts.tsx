/* Router */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './OtherProducts.module.scss'
import { PropsWithChildren } from 'react'

/* Types */
import { otherType } from '@types'
interface Props extends PropsWithChildren {
  products: otherType[]
}

const OtherProducts: React.FC<Props> = ({ products }) => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  return (
    <div className={style.products}>
      <h2 className={style.title}>You may also like</h2>
      <ul className={style.list}>
        {products?.map((product) => {
          return (
            <li key={product.name} className={style.item}>
              <div className={style.img}>
                <img src={`../${product.image[picSize]}`} alt="" />
              </div>
              <h5 className={style.name}>{product.name}</h5>
              <NavLink to={ROUTES.product(`${product.slug}`)} className={style.btn}>
                see product
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OtherProducts
