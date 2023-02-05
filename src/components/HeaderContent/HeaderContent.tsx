/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './HeaderContent.module.scss'

const HeaderContent: React.FC = () => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  const backgroundImg = {
    background: `url(./assets/home/${picSize}/image-header.jpg) center/contain no-repeat`,
  }

  return (
    <div className={style.content}>
      <div className={style.info}>
        <span className={style.subtitle}>new product</span>
        <h1 className={style.title}>XX99 Mark II Headphones</h1>
        <p className={style.desc}>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <button className={style.button}>see product</button>
      </div>
      <div className={style.background} style={backgroundImg}></div>
    </div>
  )
}
export default HeaderContent
