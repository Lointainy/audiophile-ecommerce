/* Router */
import router from '@router/router'
import { RouterProvider } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
