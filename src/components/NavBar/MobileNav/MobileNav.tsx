/* Style */
import style from './MobileNav.module.scss'

/* Components */
import { CategoryList } from '@components'

const MobileNav: React.FC = () => {
  return (
    <div className={style.field}>
      <CategoryList />
    </div>
  )
}
export default MobileNav
