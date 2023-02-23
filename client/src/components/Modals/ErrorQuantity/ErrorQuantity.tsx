/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { closeModal } from '@store/reducers/modalSlice'
import { clearErrorQuantity } from '@store/reducers/cartSlice'

/* Styles */
import style from './ErrorQuantity.module.scss'

const ErrorQuantity: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeModal())
    dispatch(clearErrorQuantity())
  }

  return (
    <div className={style.modal}>
      <h3 className={style.title}>Sorry!</h3>
      <p className={style.subtitle}>Now you cannot buy more than 5 units of one product!</p>
      <button className={style.close} onClick={handleClose}>
        close
      </button>
    </div>
  )
}
export default ErrorQuantity
