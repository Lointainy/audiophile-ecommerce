import { useEffect } from 'react'

/* Store */
import { useGetCategoryQuery } from '@store/reducers/productsApi'

/* Router */
import { useParams } from 'react-router-dom'

/* Styles */
import { CategoryList, Loader, ProductsByCategory } from '@components'
import style from './CategoryPage.module.scss'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()

  const products = useGetCategoryQuery(categoryName)

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [categoryName])

  return (
    <div className={style.page}>
      <div className={style.field}>
        <h2 className={style.title}>{categoryName}</h2>
      </div>

      {products.isSuccess && <ProductsByCategory products={products.data} />}
      {products.isLoading && <Loader />}
      <CategoryList />
    </div>
  )
}
export default CategoryPage
