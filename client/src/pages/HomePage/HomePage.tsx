/* Store */
import { useGetGalleryQuery } from '@store/reducers/productsApi'

/* Components */
import { CategoryList, Loader, ProductsGallery } from '@components'

/* Styles */
import style from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const products = useGetGalleryQuery()

  return (
    <>
      <div className={style.page}>
        <CategoryList />
        {products.isSuccess && <ProductsGallery products={products.data} />}
        {products.isLoading && <Loader />}
      </div>
    </>
  )
}

export default HomePage
