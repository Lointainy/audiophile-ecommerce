/* Styles */
import style from './OtherInfo.module.scss'

const OtherInfo: React.FC = ({ features, includes }) => {
  return (
    <div className={style.info}>
      <div className={style.features}>
        <h2 className={style.title}>Features</h2>
        <p className={style.desc}>{features}</p>
      </div>
      <div className={style.includes}>
        <h2 className={style.title}>in the box</h2>
        <ul className={style.list}>
          {includes?.map((i) => {
            return (
              <li key={i.item} className={style.item}>
                <span className={style.accent}>{i.quantity}x</span>
                <p className={style.include}>{i.item}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OtherInfo
