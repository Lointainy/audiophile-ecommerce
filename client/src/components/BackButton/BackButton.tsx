/* Router */
import { useNavigate } from 'react-router-dom'

/* Styles */
import style from './BackButton.module.scss'

const BackButton: React.FC = () => {
  let navigate = useNavigate()

  const goBack = () => {
    window.history.length <= 1 ? navigate('/') : navigate(-1)
  }

  return (
    <>
      <button className={style.btn} onClick={goBack}>
        Go back
      </button>{' '}
    </>
  )
}
export default BackButton
