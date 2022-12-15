/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { SET_OVERLAY, TOGGLE_NAV } from '@store/reducers/dataReducer'

/* Styles */
import style from './ToggleMenu.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ToggleMenu: React.FC = () => {
  const toggleNav = useAppSelector((store) => store.data.nav)
  const dispatch = useAppDispatch()

  const handleDropdownMenu = () => {
    dispatch(TOGGLE_NAV())
    dispatch(SET_OVERLAY())
  }

  return (
    <div className={style.toggle__icon} onClick={handleDropdownMenu}>
      {!toggleNav ? <Icon icon="bars" /> : <Icon icon="xmark" />}
    </div>
  )
}

export default ToggleMenu
