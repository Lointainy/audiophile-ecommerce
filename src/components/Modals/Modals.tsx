/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { CLOSE_MODAL } from '@store/reducers/modalSlice'

/* Styles */
import style from './Modals.module.scss'

/* Modals */
import CartModal from './CartModal/CartModal'

const Modals: React.FC = () => {
  const dispatch = useAppDispatch()
  const getModal = useAppSelector((store) => store.modal)

  return (
    <>
      {getModal.ModalOpen ? (
        <div className={style.overlay} onClick={() => dispatch(CLOSE_MODAL())}>
          <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            {getModal.ModalType === 'cart' && <CartModal />}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Modals
