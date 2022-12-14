/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { TOGGLE_NAV } from '@store/reducers/dataReducer'

/* Styles */
import style from './ToggleMenu.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ToggleMenu: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleDropdownMenu = () => {
    dispatch(TOGGLE_NAV())
  }

  return (
    <div className={style.toggle__icon} onClick={handleDropdownMenu}>
      <Icon icon="bars" />
    </div>
  )
}

export default ToggleMenu
