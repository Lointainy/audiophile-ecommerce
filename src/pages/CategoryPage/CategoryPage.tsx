import { useEffect } from 'react'

/* Store */
import { useAppDispatch } from '@/hooks/useRedux'
import { getProductsByCategory } from '@/store/reducers/dataSlice'

/* Router */
import { useParams } from 'react-router-dom'

/* Styles */
import { CategoryList, ProductsByCategory } from '@components'
import style from './CategoryPage.module.scss'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    dispatch(getProductsByCategory(categoryName))
  }, [categoryName])

  return (
    <div className={style.page}>
      <div className={style.field}>
        <h2 className={style.title}>{categoryName}</h2>
      </div>
      <ProductsByCategory />
      <CategoryList />
    </div>
  )
}
export default CategoryPage
