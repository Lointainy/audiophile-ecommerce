/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink, useLocation } from 'react-router-dom'

/* Store */
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'
import { increaseCart, decreaseCart, clearCart } from '@store/reducers/cartSlice'

/* Styles */
import style from './CartDropdown.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { useToggle } from '@/hooks/useToggle'
import { useEffect } from 'react'

const initialState = {
  toggle: false,
}

const CartDropdown: React.FC = () => {
  let location = useLocation()

  const { toggle, handleToggle, setToggle } = useToggle(initialState.toggle)

  const products = useAppSelector((store) => store.cart.order)

  const totalPrice = useAppSelector((store) => store.cart.total)

  const dispatch = useAppDispatch()

  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  useEffect(() => {
    setToggle(initialState.toggle)
  }, [location])

  return (
    <div className={style.cart}>
      <div className={style.icon} onClick={handleToggle}>
        <Icon icon="cart-shopping" />
      </div>
      {products.length > 0 && <div className={style.label}>{products.length}</div>}

      {toggle && (
        <>
          <div className={style.overlay} onClick={handleToggle}></div>
          <div className={style.dropdown} onClick={(e) => e.stopPropagation()}>
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
                            <img src={`../${product.categoryImage[picSize]}`} alt="" />
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
                  <Icon icon="cart-shopping" className={style.empty__icon} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default CartDropdown
