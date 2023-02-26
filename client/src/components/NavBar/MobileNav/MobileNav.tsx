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
    <>
      <div className={nav ? `${style.mobile} ${style.active}` : `${style.mobile}`}>
        <div className={style.icon} onClick={() => dispatch(toggleNav())}>
          {!nav ? <Icon icon="bars" /> : <Icon icon="xmark" />}
        </div>
      </div>
      {nav && <div className={style.overlay} onClick={handleClose}></div>}
      {nav && (
        <div className={style.dropdown} onClick={(e) => e.stopPropagation()}>
          <CategoryList closeNav={handleClose} mobile={true} />
        </div>
      )}
    </>
  )
}
export default MobileNav
