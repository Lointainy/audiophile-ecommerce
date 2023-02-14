/* Route */
import { Outlet, useLocation } from 'react-router-dom'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

/* Components */
import { InfoCompany, Modals } from '@components'

const Layout: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Modals />
      <Header />
      <Outlet />
      {pathname != '/checkout' ? <InfoCompany /> : ''}
      <Footer />
    </>
  )
}
export default Layout
