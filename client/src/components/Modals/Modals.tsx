import { useEffect } from 'react'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { CLOSE_MODAL, OPEN_MODAL } from '@store/reducers/modalSlice'
import { clearErrorQuantity } from '@store/reducers/cartSlice'

/* Styles */
import style from './Modals.module.scss'

/* Modals */
import ErrorQuantity from './ErrorQuantity/ErrorQuantity'
import CheckoutOrder from './CheckoutOrder/CheckoutOrder'

const Modals: React.FC = () => {
  const dispatch = useAppDispatch()
  const getModal = useAppSelector((store) => store.modal)

  const { errorQuantity } = useAppSelector((store) => store.cart)

  useEffect(() => {
    errorQuantity == true && dispatch(OPEN_MODAL('ErrorQuantity'))
  }, [errorQuantity])

  const handleClose = () => {
    dispatch(CLOSE_MODAL())
    errorQuantity == true && dispatch(clearErrorQuantity())
  }

  return (
    <>
      {getModal.ModalOpen && (
        <div className={style.overlay} onClick={handleClose}>
          <div className={style.field} onClick={(e) => e.stopPropagation()}>
            {getModal.ModalType === 'ErrorQuantity' && <ErrorQuantity />}
            {getModal.ModalType === 'CheckoutOrder' && <CheckoutOrder />}
          </div>
        </div>
      )}
    </>
  )
}

export default Modals
