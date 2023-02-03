/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Store */
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'
import { increaseCart, decreaseCart, clearCart } from '@store/reducers/cartSlice'

/* Styles */
import style from './CartModal.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const CartModal: React.FC = () => {
  const products = useAppSelector((store) => store.cart.order)

  const totalPrice = useAppSelector((store) => store.cart.total)

  const dispatch = useAppDispatch()

  return (
    <div className={style.cart}>
      <div className={style.field}>
        {products.length ? (
          <div className={style.content}>
            <div className={style.header}>
              <div className={style.title}>Cart ({products.length})</div>
              <button className={style.remove} onClick={() => dispatch(clearCart())}>
                Remove All
              </button>
            </div>
            <ul className={style.list}>
              {products.map((product) => {
                return (
                  <li className={style.item} key={product.slug}>
                    <div className={style.img}>
                      <img src="" alt="" />
                    </div>

                    <div className={style.name}>{product.name}</div>
                    <div className={style.price}>${product.price}</div>

                    <div className={style.quantity}>
                      <button className={style.button} onClick={() => dispatch(increaseCart(product))}>
                        <Icon icon="plus" />
                      </button>
                      <input type="number" value={product.quantity} className={style.number} />
                      <button className={style.button} onClick={() => dispatch(decreaseCart(product))}>
                        <Icon icon="minus" />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className={style.total}>
              <span>total</span>
              <div className={style.total__price}>${totalPrice}</div>
            </div>
            <NavLink className={style.checkout} to={ROUTES.checkout}>
              checkout
            </NavLink>
          </div>
        ) : (
          <div className={style.empty}>
            <div className={style.title}>You cart is empty</div>
            <Icon icon="cart-shopping" className={style.icon} />
          </div>
        )}
      </div>
    </div>
  )
}
export default CartModal
