/* Store */
import { useAppSelector } from '@/hooks/useRedux'

/* Styles */
import style from './SummaryField.module.scss'

const SummaryField: React.FC = () => {
  const products = useAppSelector((store) => store.cart.order)

  return (
    <div className={style.summary}>
      <div className={style.field}>
        <h6 className={style.title}>summary</h6>
        <ul className={style.list}>
          {products.map((product) => {
            return (
              <li className={style.item}>
                <div className={style.img}>
                  <img src="" alt="" />
                </div>

                <div className={style.name}>{product.name}</div>
                <div className={style.price}>${product.price}</div>

                <div className={style.quantity}>x{product.quantity}</div>
              </li>
            )
          })}
        </ul>

        <ul className={style.total}>
          <li className={style.total__item}>
            <span>total</span>
            <p className={style.item__price}>$5000</p>
          </li>
          <li className={style.total__item}>
            <span>shipping</span>
            <p className={style.item__price}>$5000</p>
          </li>
          <li className={style.total__item}>
            <span>vat (included)</span>
            <p className={style.item__price}>$5000</p>
          </li>
          <li className={style.total__item}>
            <span>grand total</span>
            <p className={`${style.item__price} ${style.accent}`}>$5000</p>
          </li>
        </ul>

        <button className={style.btn} type="submit">
          continue & pay
        </button>
      </div>
    </div>
  )
}
export default SummaryField
