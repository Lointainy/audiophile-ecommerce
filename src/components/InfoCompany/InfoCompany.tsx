/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './InfoCompany.module.scss'

const InfoCompany: React.FC = () => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  return (
    <div className={style.info}>
      <div className={style.field}>
        <div className={style.content}>
          <h2 className={style.title}>
            Bringing you the
            <span className="accent"> best </span>
            audio gear
          </h2>
          <p className={style.desc}>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className={style.pic}>
        <img src={`assets/shared/${picSize}/image-best-gear.jpg`} alt="" className={style.img} />
      </div>
    </div>
  )
}

export default InfoCompany
