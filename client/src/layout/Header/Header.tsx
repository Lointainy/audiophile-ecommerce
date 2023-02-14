/* Route */
import { useLocation } from 'react-router-dom'

/* Components */
import { HeaderContent, NavBar } from '@components'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <header>
      <NavBar />
      {pathname == '/' ? <HeaderContent /> : ''}
    </header>
  )
}

export default Header
