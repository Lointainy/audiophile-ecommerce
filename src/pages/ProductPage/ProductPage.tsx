import { useEffect } from 'react'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { getProduct } from '@store/reducers/dataSlice'

/* Router */
import { ROUTES } from '@router/routes'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

/* Components */
import { CategoryList, OtherInfo, PhotoGallery, ProductInfo } from '@components'

/* Styles */
import style from './ProductPage.module.scss'

const ProductPage: React.FC = () => {
  const { productName } = useParams()

  const dispath = useAppDispatch()

  const product = useAppSelector((store) => store.data.product)

  let navigate = useNavigate()

  const goBack = () => {
    window.history.length <= 1 ? navigate('/') : navigate(-1)
  }

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    dispath(getProduct(productName))
  }, [productName])

  return (
    <div className={style.page}>
      <button className={style.btn} onClick={goBack}>
        Go back
      </button>

      <ProductInfo product={product} />
      <OtherInfo features={product.features} includes={product.includes} />
      <PhotoGallery gallery={product.gallery} />

      <h2 className={style.title}>You may also like</h2>
      <ul className={style.list}>
        {product.others?.map((item) => {
          return (
            <li key={item.name} className={style.item}>
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
      <CategoryList />
    </div>
  )
}
export default ProductPage
