import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes'

/* Pages */
import Layout from '@layout/Layout'
import { CheckoutPage, HomePage, NotFoundPage, ProductPage, CategoryPage } from '@pages'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.checkout, element: <CheckoutPage /> },
      { path: ROUTES.product(), element: <ProductPage /> },
      { path: ROUTES.category(), element: <CategoryPage /> },
      { path: ROUTES.error, element: <NotFoundPage /> },
    ],
  },
])

export default router
