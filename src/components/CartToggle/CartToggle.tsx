/* Store */
import { useAppDispatch } from '@/hooks/useRedux'

/* Style */
import style from './CartToggle.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const CartToggle: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleToggleCart = () => {}
  return (
    <div className={style.cart__icon} onClick={handleToggleCart}>
      <Icon icon="cart-shopping" />
    </div>
  )
}
export default CartToggle
