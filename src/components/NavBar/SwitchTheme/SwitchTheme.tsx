import { useEffect } from 'react'

/* Hooks */
import { useTheme } from '@hooks/useTheme'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { SET_THEME } from '@store/reducers/uiSlice'

/* Style */
import style from './SwitchTheme.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const SwitchTheme: React.FC = () => {
  const { value, toggleTheme, userTheme } = useTheme()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(SET_THEME(userTheme))
  }, [value])

  return (
    <div className={style.theme__icon} onClick={toggleTheme}>
      {value ? <Icon icon="sun" /> : <Icon icon="moon" />}
    </div>
  )
}
export default SwitchTheme
