/* Styles */
import GalleryList from './GalleryList/GalleryList'
import style from './ProductsGallery.module.scss'

/* Types */
import { Igallery } from '@/types'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  products: Igallery[]
}

const ProductsGallery: React.FC<Props> = ({ products }) => {
  return (
    <div className={style.gallery}>
      <GalleryList products={products} />
    </div>
  )
}
export default ProductsGallery
