import { useEffect } from 'react'

/* Store */
import { useGetCategoryQuery } from '@store/reducers/productsApi'

/* Router */
import { ROUTES } from '@router/routes'
import { useParams, useNavigate } from 'react-router-dom'

/* Styles */
import style from './CategoryPage.module.scss'

/* Components */
import { CategoryList, Loader, ProductsByCategory } from '@components'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()

  const { data, isSuccess, isLoading, isError } = useGetCategoryQuery(categoryName)

  let navigate = useNavigate()

  useEffect(() => {
    isError && navigate(`${ROUTES.error}`)
  }, [isError])

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [categoryName])

  return (
    <div className={style.page}>
      <div className={style.field}>
        <h2 className={style.title}>{categoryName}</h2>
      </div>

      {isSuccess && <ProductsByCategory products={data} />}
      {isLoading && <Loader />}
      <CategoryList />
    </div>
  )
}
export default CategoryPage
