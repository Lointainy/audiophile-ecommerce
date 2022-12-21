/* Router */
import router from '@router/router'
import { RouterProvider } from 'react-router-dom'

/* Hooks */
import { useAppSelector } from '@hooks/useRedux'

const App: React.FC = () => {
  const theme = useAppSelector((store) => store.ui.colorTheme)

  return (
    <div className={`app ${theme}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
