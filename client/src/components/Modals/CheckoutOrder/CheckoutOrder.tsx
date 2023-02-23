import { useState } from 'react'

/* Route */
import { ROUTES } from '@router/routes'
import { NavLink } from 'react-router-dom'

/* Store */
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'
import { closeModal } from '@store/reducers/modalSlice'
import { clearCart } from '@store/reducers/cartSlice'

/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './CheckoutOrder.module.scss'

const CheckoutOrder: React.FC = () => {
  const dispatch = useAppDispatch()

  const products = useAppSelector((store) => store.cart.order)

  const { grandTotal } = useAppSelector((store) => store.cart)

  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  const [page, setPage] = useState({
    start: 0,
    end: 1,
    status: false,
  })

  const handleClose = () => {
    dispatch(clearCart())
    dispatch(closeModal())
  }

  const handleLoadMore = () => {
    if (!page.status && products.length > 1) {
      setPage({ ...page, end: products.length, status: true })
    } else {
      setPage({ ...page, end: 1, status: false })
    }
  }

  return (
    <div className={style.modal}>
      <h3 className={style.title}>THANK YOU FOR YOUR ORDER</h3>
      <p className={style.subtitle}> You will receive an email confirmation shortly.</p>

      <div className={style.order}>
        <ul className={style.list}>
          {products.slice(page.start, page.end).map((product) => {
            return (
              <li className={style.item} key={product.slug}>
                <div className={style.img}>
                  <img src={`../${product.categoryImage[picSize]}`} alt="" />
                </div>

                <div className={style.name}>{product.name.split(' ')[0]}</div>
                <div className={style.price}>${product.price}</div>

                <div className={style.quantity}>x{product.quantity}</div>
              </li>
            )
          })}
        </ul>

        <div className={style.more} onClick={handleLoadMore}>
          {!page.status && <span>and {products.length - 1} other item(s)</span>}
          {page.status && products.length > 1 ? <span>view less</span> : ''}
        </div>
        <div className={style.total}>
          <p className={style.total__title}>grand total</p>
          <span className={style.total__price}>${grandTotal}</span>
        </div>
      </div>

      <NavLink to={ROUTES.home} className={style.button} onClick={handleClose}>
        back to home
      </NavLink>
    </div>
  )
}

export default CheckoutOrder
