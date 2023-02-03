import { useEffect } from 'react'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { getProduct } from '@store/reducers/dataSlice'
import { AddToCart } from '@store/reducers/cartSlice'

/* Router */
import { useParams } from 'react-router-dom'

/* Components */
import { BackButton, CategoryList, OtherInfo, OtherProducts, PhotoGallery, ProductInfo } from '@components'

/* Styles */
import style from './ProductPage.module.scss'

const ProductPage: React.FC = () => {
  const { productName } = useParams()

  const dispatch = useAppDispatch()

  const product = useAppSelector((store) => store.data.product)

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    dispatch(getProduct(productName))
  }, [productName])

  const handleAddProduct = (quantity: number) => {
    let addedProduct = { ...product, quantity }
    dispatch(AddToCart(addedProduct))
  }

  return (
    <div className={style.page}>
      <BackButton />
      <ProductInfo product={product} addProduct={handleAddProduct} />
      <OtherInfo features={product.features} includes={product.includes} />
      <PhotoGallery gallery={product.gallery} />
      <OtherProducts products={product.others} />

      <CategoryList />
    </div>
  )
}
export default ProductPage
