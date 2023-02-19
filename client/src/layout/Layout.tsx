import { useEffect } from 'react'

/* Route */
import { ROUTES } from '@router/routes'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

/* Store */
import { useAppSelector, useAppDispatch } from '@hooks/useRedux'
import { getProducts } from '@store/reducers/dataSlice'

/* Layout */
import Footer from './Footer/Footer'
import Header from './Header/Header'

/* Components */
import { InfoCompany, Modals, StarterLoader } from '@components'

const Layout: React.FC = () => {
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  let navigate = useNavigate()

  const { isLoading, isError } = useAppSelector((store) => store.data)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    isError && navigate(`${ROUTES.error}`)
  }, [isError])

  return (
    <>
      {isLoading ? (
        <StarterLoader />
      ) : (
        <>
          <Modals />
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
