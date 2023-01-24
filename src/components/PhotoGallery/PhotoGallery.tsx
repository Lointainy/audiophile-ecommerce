/* Styles */
import style from './PhotoGallery.module.scss'

const PhotoGallery: React.FC = ({ gallery }) => {
  return (
    <ul className={style.gallery}>
      <li className={style.field}>
        <div className={style.img}>
          <img src="" alt="" />
        </div>
      </li>
      <li className={style.field}>
        <div className={style.img}>
          <img src="" alt="" />
        </div>
      </li>
      <li className={style.field}>
        <div className={style.img}>
          <img src="" alt="" />
        </div>
      </li>
    </ul>
  )
}

export default PhotoGallery
