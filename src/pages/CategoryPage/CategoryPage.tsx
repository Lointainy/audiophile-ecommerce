import { useAppDispatch } from '@/hooks/useRedux'
import { getProductsByCategory } from '@/store/reducers/dataSlice'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProductsByCategory(categoryName))
  }, [])

  return <>{categoryName} </>
}
export default CategoryPage
