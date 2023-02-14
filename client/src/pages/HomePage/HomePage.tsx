import { useEffect } from 'react'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { getGalleryProducts, getNewProduct } from '@store/reducers/dataSlice'

/* Components */
import { CategoryList, ProductsGallery } from '@components'

/* Styles */
import style from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNewProduct())
    dispatch(getGalleryProducts())
  }, [])
  return (
    <>
      <div className={style.page}>
        <CategoryList />
        <ProductsGallery />
      </div>
    </>
  )
}

export default HomePage
