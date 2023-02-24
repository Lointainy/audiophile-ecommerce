import { useEffect } from 'react'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { useGetProductQuery } from '@/store/reducers/productsApi'
import { addToCart } from '@store/reducers/cartSlice'

/* Router */
import { ROUTES } from '@router/routes'
import { useParams, useNavigate } from 'react-router-dom'

/* Components */
import { BackButton, CategoryList, Loader, OtherInfo, OtherProducts, PhotoGallery, ProductInfo } from '@components'

/* Styles */
import style from './ProductPage.module.scss'

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { productName } = useParams()

  const { data: product, isLoading, isSuccess, isError } = useGetProductQuery(productName)

  let navigate = useNavigate()

  useEffect(() => {
    isError && navigate(`${ROUTES.error}`)
  }, [isError])

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [productName])

  const handleAddProduct = (quantity: number) => {
    let addedProduct = { ...product, quantity }
    dispatch(addToCart(addedProduct))
  }

  return (
    <div className={style.page}>
      <BackButton />
      {isSuccess && (
        <>
          <ProductInfo product={product} addProduct={handleAddProduct} />
          <OtherInfo features={product.features} includes={product.includes} />
          <PhotoGallery gallery={product.gallery} />
          <OtherProducts products={product.others} />
        </>
      )}
      {isLoading && <Loader />}
      <CategoryList />
    </div>
  )
}
export default ProductPage
