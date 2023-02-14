import { useEffect } from 'react'

/* Router */
import router from '@router/router'
import { RouterProvider } from 'react-router-dom'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { getProducts } from '@store/reducers/dataSlice'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const theme = useAppSelector((store) => store.ui.colorTheme)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className={`app ${theme}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
