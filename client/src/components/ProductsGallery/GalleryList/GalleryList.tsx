/* Styles */
import style from './GalleryList.module.scss'

/* Components */
import GalleryItem from '../GalleryItem/GalleryItem'

/* Types */
import { Igallery } from '@/types'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  products: Igallery[]
}

const GalleryList: React.FC<Props> = ({ products }) => {
  return (
    <ul className={style.list}>
      {products.map((product) => {
        return <GalleryItem key={product.id} {...product} />
      })}
    </ul>
  )
}
export default GalleryList
