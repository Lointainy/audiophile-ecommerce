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
      {/* <ul className={style.list}>
        {galleryList.map((item, index) => {
          return index === 0 ? (
            <li key={item.id} className={style.item}>
              <img src={`${item.img[picSize]}`} alt="" className={style.img} />

              <img src="assets/home/desktop/pattern-circles.svg" alt="" className={style.pattern} />
              <div className={style.field}>
                <div className={style.content}>
                  <h1 className={style.title}>{item.name}</h1>

                  <p className={style.desc}>{item.description}</p>

                  <NavLink to={ROUTES.product(`${item.slug}`)} className={style.button}>
                    see product
                  </NavLink>
                </div>
              </div>
            </li>
          ) : (
            <li key={item.id} className={style.item}>
              <img src={`${item.img[picSize]}`} alt="" className={style.img} />
              <div className={style.field}>
                <div className={style.content}>
                  <h2 className={style.title}>{item.name}</h2>

                  <NavLink to={ROUTES.product(`${item.slug}`)} className={style.button}>
                    see product
                  </NavLink>
                </div>
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}
export default ProductsGallery
