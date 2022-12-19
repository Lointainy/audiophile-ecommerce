/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { CLOSE_MODAL, OPEN_MODAL } from '@store/reducers/dataReducer'

/* Style */
import style from './CartToggle.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const CartToggle: React.FC = () => {
  const dispatch = useAppDispatch()
  const toggle = useAppSelector((store) => store.data.modal.ModalOpen)

  const handleToggleCart = () => {
    !toggle ? dispatch(OPEN_MODAL('cart')) : dispatch(CLOSE_MODAL())
  }
  return (
    <div className={style.cart__icon} onClick={handleToggleCart}>
      <Icon icon="cart-shopping" />
    </div>
  )
}
export default CartToggle
