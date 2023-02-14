/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

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
        <NavLink to={ROUTES.product(`xx99-mark-two-headphones`)} className={style.button}>
          see product
        </NavLink>
      </div>
      <div className={style.background} style={backgroundImg}></div>
    </div>
  )
}
export default HeaderContent
