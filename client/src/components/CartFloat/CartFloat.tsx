import { useEffect, useState } from 'react'

/* Hooks */
import { useToggle } from '@hooks/useToggle'

/* Route */
import { useLocation } from 'react-router-dom'

/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Styles */
import style from './CartFloat.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { CartDropdown } from '@components'

const initialState = {
  toggle: false,
}

const CartFloat: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const { toggle, handleToggle, setToggle } = useToggle(initialState.toggle)

  let location = useLocation()

  const products = useAppSelector((store) => store.cart.order)

  // Show Button After Scrolling Down More than 100px after navbar no visible
  const toggleVisible = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    // Listen for Scrolling Event
    window.addEventListener('scroll', toggleVisible, false)
    return () => {
      window.removeEventListener('scroll', toggleVisible, false)
    }
  }, [])

  useEffect(() => {
    setToggle(initialState.toggle)
  }, [location])

  return (
    <>
      {visible && (
        <div className={style.fixed}>
          <div className={style.cart}>
            <div className={style.icon} onClick={handleToggle}>
              <Icon icon="cart-shopping" />
            </div>
            {products.length > 0 && <div className={style.label}>{products.length}</div>}

            {toggle && (
              <>
                <div className={style.overlay} onClick={handleToggle}></div>
                <div className={style.dropdown} onClick={(e) => e.stopPropagation()}>
                  <CartDropdown />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default CartFloat
