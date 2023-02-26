import { useEffect } from 'react'

/* Hooks */
import { useToggle } from '@hooks/useToggle'

/* Route */
import { useLocation } from 'react-router-dom'

/* Store */
import { useAppSelector } from '@hooks/useRedux'

/* Styles */
import style from './SwitchCart.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { CartDropdown } from '@components'

const initialState = {
  toggle: false,
}

const SwitchCart: React.FC = () => {
  let location = useLocation()

  const { toggle, handleToggle, setToggle } = useToggle(initialState.toggle)

  const products = useAppSelector((store) => store.cart.order)

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
            <CartDropdown />
          </div>
        </>
      )}
    </div>
  )
}
export default SwitchCart
