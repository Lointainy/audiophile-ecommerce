/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Store */
import { useAppSelector } from '@/hooks/useRedux'

/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './ProductsByCategory.module.scss'

const ProductsByCategory: React.FC = () => {
  const products = useAppSelector((store) => store.data.category)

  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  return (
    <ul className={style.products}>
      {products.map((product) => {
        return (
          <li className={style.product} key={product.id}>
            <div className={style.field}>
              <div className={style.img}>
                <img src={`../${product.categoryImage[picSize]}`} alt="" />
              </div>
            </div>
            <div className={style.content}>
              <div className={style.title}>
                {product.new ? <span className={style.subtitle}>new product</span> : ''}
                <h2 className={style.name}>{product.name}</h2>
              </div>

              <p className={style.desc}>{product.description}</p>
              <NavLink to={ROUTES.product(`${product.slug}`)} className={style.btn}>
                see product
              </NavLink>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductsByCategory
