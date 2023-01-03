import { useEffect } from 'react'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { getGalleryProducts, getNewProduct } from '@store/reducers/dataSlice'

/* Components */
import { CategoryList, HeaderContent, HomeGallery } from '@components'

/* Styles */
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNewProduct())
    dispatch(getGalleryProducts())
  }, [])
  return (
    <>
      <HeaderContent />
      <div className={styles.content}>
        {/* <CategoryList /> */}
        <HomeGallery />
      </div>
    </>
  )
}

export default HomePage
