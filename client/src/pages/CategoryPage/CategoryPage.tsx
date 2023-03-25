import { useEffect } from 'react'

/* Store */
import { useGetCategoryQuery } from '@store/reducers/productsApi'

/* Router */
import { useParams } from 'react-router-dom'

/* Styles */
import style from './CategoryPage.module.scss'

/* Components */
import { CategoryList, Loader, ProductsByCategory } from '@components'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()

  const { data, isSuccess, isLoading, isError } = useGetCategoryQuery(categoryName)

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [categoryName])

  return (
    <div className={style.page}>
      <div className={style.field}>
        <h2 className={style.title}>{isSuccess ? categoryName : 'Not found'}</h2>
      </div>

      {isSuccess && <ProductsByCategory products={data} />}
      {isLoading && <Loader />}
      {isError && (
        <div className={style.error}>
          <h1>This category is not found</h1>
        </div>
      )}
      <CategoryList />
    </div>
  )
}
export default CategoryPage
