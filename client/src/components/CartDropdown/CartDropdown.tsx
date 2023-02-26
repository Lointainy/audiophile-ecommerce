/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Store */
import { increaseCart, decreaseCart, clearCart } from '@store/reducers/cartSlice'
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'

/* Styles */
import style from './CartDropdown.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { EmptyCart } from '@components'

const CartDropdown: React.FC = () => {
  const products = useAppSelector((store) => store.cart.order)

  const totalPrice = useAppSelector((store) => store.cart.total)

  const dispatch = useAppDispatch()

  const {
    mediaQuery: { name: displaySize },
  } = useMediaQuery()

  return (
    <div className={style.field}>
      {products.length > 0 && (
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
                    <img src={`../${product.categoryImage[displaySize]}`} alt="" />
                  </div>

                  <div className={style.name}>
                    {displaySize == 'mobile' ? product.name.split(' ')[0] : product.name}
                  </div>
                  <div className={style.price}>${product.price}</div>

                  <div className={style.quantity}>
                    <button className={style.button} onClick={() => dispatch(decreaseCart(product))}>
                      <Icon icon="minus" />
                    </button>
                    <div className={style.number}>{product.quantity}</div>
                    <button className={style.button} onClick={() => dispatch(increaseCart(product))}>
                      <Icon icon="plus" />
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
      )}

      {!products.length && <EmptyCart />}
    </div>
  )
}
export default CartDropdown
