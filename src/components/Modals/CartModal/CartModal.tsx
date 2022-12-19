/* Route */
import { ROUTES } from '@/router/routes'
import { NavLink } from 'react-router-dom'

/* Styles */
import style from './CartModal.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const CartModal: React.FC = () => {
  return (
    <div className={style.cart}>
      <div className={style.field}>
        <div className={style.header}>
          <div className={style.title}>Cart (1)</div>
          <button className={style.remove}>Remove All</button>
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <div className={style.img}>
              <img src="" alt="" />
            </div>

            <div className={style.name}>name</div>
            <div className={style.price}>$100</div>

            <div className={style.quantity}>
              <button className={style.button}>
                <Icon icon="plus" />
              </button>
              <input type="number" name="" id="" className={style.number} />
              <button className={style.button}>
                <Icon icon="minus" />
              </button>
            </div>
          </li>
        </ul>
        <div className={style.total}>
          <span>total</span>
          <div className={style.total__price}>$100</div>
        </div>
        <NavLink className={style.checkout} to={ROUTES.checkout}>
          checkout
        </NavLink>
      </div>
    </div>
  )
}
export default CartModal
