/* Store */
import { useGetGalleryQuery } from '@store/reducers/productsApi'

/* Components */
import { CategoryList, Loader, ProductsGallery } from '@components'

/* Styles */
import style from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const { data, isSuccess, isLoading } = useGetGalleryQuery()

  return (
    <>
      <div className={style.page}>
        <CategoryList />
        {isSuccess && <ProductsGallery products={data} />}
        {isLoading && <Loader />}
      </div>
    </>
  )
}

export default HomePage
