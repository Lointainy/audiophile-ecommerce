import { useEffect } from 'react'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { getProduct } from '@store/reducers/dataSlice'

/* Router */
import { useNavigate, useParams } from 'react-router-dom'

/* Components */
import { CategoryList, OtherInfo, OtherProducts, PhotoGallery, ProductInfo } from '@components'

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
      <OtherProducts products={product.others} />

      <CategoryList />
    </div>
  )
}
export default ProductPage
