/* Style */
import style from './StarterLoader.module.scss'

import { Loader } from '@components'
const StarterLoader: React.FC = () => {
  return (
    <div className={style.overlay}>
      <Loader />
      <p className={style.desc}>please wait, server starts 1 - 2 min for getting data</p>
    </div>
  )
}

export default StarterLoader
