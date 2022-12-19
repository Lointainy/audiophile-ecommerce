/* Route */
import { Outlet } from 'react-router-dom'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

/* Components */
import { Modals } from '@components'

const Layout: React.FC = () => {
  return (
    <>
      <Modals />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
