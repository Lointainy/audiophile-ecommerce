/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Store */
import { useGetNewProductQuery } from '@store/reducers/productsApi'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Styles */
import style from './HeaderContent.module.scss'

const HeaderContent: React.FC = () => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  const backgroundImg = {
    background: `url(./assets/home/${picSize}/image-header.jpg) center/contain no-repeat`,
  }

  const product = useGetNewProductQuery()

  return (
    <>
      {product.isSuccess && (
        <div className={style.content}>
          <div className={style.info}>
            <span className={style.subtitle}>new product</span>
            <h1 className={style.title}>{product.data.name}</h1>
            <p className={style.desc}>{product.data.description}</p>
            <NavLink to={ROUTES.product(`${product.data.slug}`)} className={style.button}>
              see product
            </NavLink>
          </div>
          <div className={style.background} style={backgroundImg}></div>
        </div>
      )}
    </>
  )
}
export default HeaderContent
