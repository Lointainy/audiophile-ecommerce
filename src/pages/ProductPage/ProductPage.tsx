import { useEffect } from 'react'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { getProduct } from '@store/reducers/dataSlice'

/* Router */
import { useParams } from 'react-router-dom'

/* Components */
import { BackButton, CategoryList, OtherInfo, OtherProducts, PhotoGallery, ProductInfo } from '@components'

/* Styles */
import style from './ProductPage.module.scss'

const ProductPage: React.FC = () => {
  const { productName } = useParams()

  const dispath = useAppDispatch()

  const product = useAppSelector((store) => store.data.product)

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    dispath(getProduct(productName))
  }, [productName])

  return (
    <div className={style.page}>
      <BackButton />
      <ProductInfo product={product} />
      <OtherInfo features={product.features} includes={product.includes} />
      <PhotoGallery gallery={product.gallery} />
      <OtherProducts products={product.others} />

      <CategoryList />
    </div>
  )
}
export default ProductPage
