/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Styles */
import GalleryList from './GalleryList/GalleryList'
import style from './ProductsGallery.module.scss'

const ProductsGallery: React.FC = () => {
  const galleryList = useAppSelector((store) => store.data.galleryProducts)

  return (
    <div className={style.gallery}>
      <GalleryList products={galleryList} />
    </div>
  )
}
export default ProductsGallery
