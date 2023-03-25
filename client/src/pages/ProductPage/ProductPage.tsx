import { useEffect } from 'react'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { useGetProductQuery } from '@/store/reducers/productsApi'
import { addToCart } from '@store/reducers/cartSlice'

/* Router */
import { useParams } from 'react-router-dom'

/* Components */
import { BackButton, CategoryList, Loader, OtherInfo, OtherProducts, PhotoGallery, ProductInfo } from '@components'

/* Styles */
import style from './ProductPage.module.scss'

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { productName } = useParams()

  const { data: product, isLoading, isSuccess, isError } = useGetProductQuery(productName)

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [productName])

  const handleAddProduct = (quantity: number) => {
    let addedProduct = { ...product, quantity }
    dispatch(addToCart(addedProduct))
  }

  return (
    <div className={style.page}>
      <div className={style.back}>
        <BackButton />
      </div>
      {isSuccess && (
        <>
          <ProductInfo product={product} addProduct={handleAddProduct} />
          <OtherInfo features={product.features} includes={product.includes} />
          <PhotoGallery gallery={product.gallery} />
          <OtherProducts products={product.others} />
        </>
      )}
      {isLoading && <Loader />}
      {isError && (
        <div className={style.error}>
          <h1>This product is not found</h1>
        </div>
      )}
      <CategoryList />
    </div>
  )
}
export default ProductPage
