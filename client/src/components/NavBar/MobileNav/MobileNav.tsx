/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { closeNav, toggleNav } from '@store/reducers/uiSlice'

/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Style */
import style from './MobileNav.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { CategoryList } from '@components'

const MobileNav: React.FC = () => {
  const { nav } = useAppSelector((store) => store.ui)

  const { mediaQuery } = useMediaQuery()

  const dispatch = useAppDispatch()

  const handleClose = () => {
    if (mediaQuery.name === 'mobile' || mediaQuery.name === 'tablet') {
      dispatch(closeNav())
    }
  }

  return (
    <div className={style.mobile}>
      <div className={style.icon} onClick={() => dispatch(toggleNav())}>
        <Icon icon="bars" />
      </div>
      {nav && (
        <div className={style.dropdown}>
          <CategoryList closeNav={handleClose} mobile={true} />
        </div>
      )}
    </div>
  )
}
export default MobileNav
