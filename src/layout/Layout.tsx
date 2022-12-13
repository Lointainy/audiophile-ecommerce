/* Route */
import { Outlet } from 'react-router-dom'

import Footer from './Footer/Footer'
import Header from './Header/Header'

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
