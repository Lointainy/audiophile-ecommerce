/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './PhotoGallery.module.scss'

const PhotoGallery: React.FC = ({ gallery }) => {
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
