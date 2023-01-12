/* Styles */
import style from './GalleryList.module.scss'

/* Components */
import GalleryItem from '../GalleryItem/GalleryItem'

const GalleryList: React.FC = ({ products }) => {
  return (
    <ul className={style.list}>
      {products.map((product) => {
        return <GalleryItem key={product.id} {...product} />
      })}
    </ul>
  )
}
export default GalleryList
