import { useParams } from 'react-router-dom'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams()
  return <>{categoryName} </>
}
export default CategoryPage
