import { useEffect } from 'react'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { getGalleryProducts, getNewProduct } from '@store/reducers/dataSlice'

/* Components */
import { CategoryList, HeaderContent } from '@components'

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNewProduct())
    dispatch(getGalleryProducts())
  }, [])
  return (
    <>
      <HeaderContent />
      <CategoryList />
    </>
  )
}

export default HomePage
