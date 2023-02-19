/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Styles */
import GalleryList from './GalleryList/GalleryList'
import style from './ProductsGallery.module.scss'

const ProductsGallery: React.FC = ({ products }) => {
  return (
    <div className={style.gallery}>
      <GalleryList products={products} />
    </div>
  )
}
export default ProductsGallery
