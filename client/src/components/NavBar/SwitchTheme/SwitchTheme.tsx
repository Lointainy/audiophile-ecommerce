import { useEffect } from 'react'

/* Hooks */
import { useTheme } from '@hooks/useTheme'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'
import { setTheme } from '@store/reducers/uiSlice'

/* Style */
import style from './SwitchTheme.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const SwitchTheme: React.FC = () => {
  const { theme, toggleTheme, userTheme } = useTheme()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTheme(userTheme))
  }, [theme])

  return (
    <div className={style.theme} onClick={toggleTheme}>
      {theme ? <Icon icon="sun" /> : <Icon icon="moon" />}
    </div>
  )
}
export default SwitchTheme
