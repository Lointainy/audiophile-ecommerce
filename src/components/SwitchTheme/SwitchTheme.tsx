/* Hooks */
import { useTheme } from '@hooks/useTheme'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const SwitchTheme: React.FC = () => {
  const { value, toggleTheme } = useTheme()
  return (
    <div className="theme__icon" onClick={toggleTheme}>
      {value ? <Icon icon="sun" /> : <Icon icon="moon" />}
    </div>
  )
}
export default SwitchTheme
