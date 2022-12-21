/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { TOGGLE_NAV } from '@store/reducers/uiSlice'

/* Styles */
import style from './ToggleMenu.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ToggleMenu: React.FC = () => {
  const toggleNav = useAppSelector((store) => store.ui.nav)
  const dispatch = useAppDispatch()

  const handleDropdownMenu = () => {
    dispatch(TOGGLE_NAV())
  }

  return (
    <div className={style.toggle__icon} onClick={handleDropdownMenu}>
      {!toggleNav ? <Icon icon="bars" /> : <Icon icon="xmark" />}
    </div>
  )
}

export default ToggleMenu
