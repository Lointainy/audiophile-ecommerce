import { useEffect } from 'react'

/* Route */
import { ROUTES } from '@router/routes'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

/* Store */
import { useGetProductsQuery } from '@store/reducers/productsApi'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

/* Components */
import { CartFloat, InfoCompany, Modals, StarterLoader } from '@components'

const Layout: React.FC = () => {
  const { pathname } = useLocation()

  let navigate = useNavigate()

  const { isLoading, isError, isSuccess } = useGetProductsQuery()

  useEffect(() => {
    isError && navigate(`${ROUTES.error}`)
  }, [isError])

  return (
    <>
      {isLoading && <StarterLoader />}
      {isSuccess && (
        <>
          <Modals />
          <CartFloat />
          <Header />
          <Outlet />
          {pathname != '/checkout' ? <InfoCompany /> : ''}
          <Footer />
        </>
      )}
    </>
  )
}
export default Layout
