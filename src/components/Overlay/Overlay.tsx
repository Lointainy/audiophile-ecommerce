/* Style */
import style from './Overlay.module.scss'

/* Store */
import { useAppSelector } from '@hooks/useRedux'

const Overlay: React.FC = () => {
  const overlayToggle = useAppSelector((store) => store.data.overlay)

  return <>{overlayToggle ? <div className={style.overlay}></div> : ''}</>
}
export default Overlay
