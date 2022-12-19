/* Route */
import { Outlet } from 'react-router-dom'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

/* Components */
import { MobileNav, Modals, Overlay } from '@components'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
