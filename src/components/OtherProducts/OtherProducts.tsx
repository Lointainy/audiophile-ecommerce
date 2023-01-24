/* Router */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Styles */
import style from './OtherProducts.module.scss'

const OtherProducts: React.FC = ({ products }) => {
  return (
    <div className={style.products}>
      <h2 className={style.title}>You may also like</h2>
      <ul className={style.list}>
        {products?.map((product) => {
          return (
            <li key={product.name} className={style.item}>
              <div className={style.field}>
                <div className={style.img}>
                  <img src="" alt="" />
                </div>
              </div>
              <h2 className={style.name}>{product.name}</h2>
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
