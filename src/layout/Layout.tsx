/* Route */
import { Overlay } from '@/components'
import { Outlet } from 'react-router-dom'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Overlay />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
