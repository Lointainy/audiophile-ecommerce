/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './PhotoGallery.module.scss'
import { PropsWithChildren } from 'react'

/* Types */
import { galleryType } from '@types'
interface Props extends PropsWithChildren {
  gallery: galleryType
}

const PhotoGallery: React.FC<Props> = ({ gallery }) => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  return (
    <ul className={style.gallery}>
      <li className={style.field}>
        <div className={style.img}>
          <img src={`../${gallery?.first[picSize]}`} alt="" />
        </div>
      </li>
      <li className={style.field}>
        <div className={style.img}>
          <img src={`../${gallery?.second[picSize]}`} alt="" />
        </div>
      </li>
      <li className={style.field}>
        <div className={style.img}>
          <img src={`../${gallery?.third[picSize]}`} alt="" />
        </div>
      </li>
    </ul>
  )
}

export default PhotoGallery
