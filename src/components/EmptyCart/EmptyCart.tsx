/* Styles */
import style from './EmptyCart.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const EmpryCart: React.FC = () => {
  return (
    <div className={style.empty}>
      <div className={style.title}>You cart is empty</div>
      <Icon icon="cart-shopping" className={style.empty__icon} />
    </div>
  )
}
export default EmpryCart
