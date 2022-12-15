/* Route */
import { Outlet } from 'react-router-dom'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

/* Components */
import { MobileNav, Overlay } from '@components'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Overlay />
      <MobileNav />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
