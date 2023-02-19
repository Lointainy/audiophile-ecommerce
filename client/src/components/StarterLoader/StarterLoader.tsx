/* Style */
import style from './StarterLoader.module.scss'

import { Loader } from '@components'
const StarterLoader: React.FC = () => {
  return (
    <div className={style.overlay}>
      <Loader />
      <p className={style.desc}>please wait, we are try to connecting to server for get data</p>
    </div>
  )
}

export default StarterLoader
