/* Store */
import { useAppDispatch } from '@/hooks/useRedux'
import { SET_OVERLAY, TOGGLE_MODAL_CART } from '@store/reducers/dataReducer'

/* Style */
import style from './CartToggle.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const CartToggle: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleToggleCart = () => {
    dispatch(TOGGLE_MODAL_CART())
    dispatch(SET_OVERLAY())
  }
  return (
    <div className={style.cart__icon} onClick={handleToggleCart}>
      <Icon icon="cart-shopping" />
    </div>
  )
}
export default CartToggle
