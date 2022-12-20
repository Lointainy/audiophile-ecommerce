/* Styles */
import style from './HeaderContent.module.scss'

const HeaderContent: React.FC = () => {
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
      <div className={style.img}>
        <img src="" alt="" />
      </div>
    </div>
  )
}
export default HeaderContent
