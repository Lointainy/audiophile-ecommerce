/* Styles */
import style from './OtherInfo.module.scss'

const OtherInfo: React.FC = ({ features, includes }) => {
  return (
    <div className={style.info}>
      <h2 className={style.title}>Features</h2>
      <p className={style.features}>{features}</p>

      <h2 className={style.title}>in the box</h2>
      <ul className={style.includes}>
        {includes?.map((i) => {
          return (
            <li key={i.item} className={style.item}>
              <span className={style.quantity}>x{i.item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default OtherInfo
