/* Styles */
import style from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.loader}></div>
    </div>
  )
}

export default Loader
