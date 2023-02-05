/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { toggleNav } from '@store/reducers/uiSlice'

/* Style */
import style from './MobileNav.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import { CategoryList } from '@components'

const MobileNav: React.FC = () => {
  const { nav } = useAppSelector((store) => store.ui)

  const dispatch = useAppDispatch()

  return (
    <div className={style.mobile}>
      <div className={style.icon} onClick={() => dispatch(toggleNav())}>
        <Icon icon="bars" />
      </div>
      {nav && (
        <div className={style.dropdown}>
          <CategoryList />
        </div>
      )}
    </div>
  )
}
export default MobileNav
