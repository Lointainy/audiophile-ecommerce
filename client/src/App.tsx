import { useEffect } from 'react'
/* Router */
import router from '@router/router'
import { RouterProvider } from 'react-router-dom'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setTheme } from '@store/reducers/uiSlice'
import useTheme from '@hooks/useTheme'
import { setOrder } from '@store/reducers/cartSlice'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const { userTheme } = useTheme()

  const theme = useAppSelector((store) => store.ui.colorTheme)

  useEffect(() => {
    dispatch(setTheme(userTheme))
  }, [userTheme])

  useEffect(() => {
    dispatch(setOrder(''))
  }, [dispatch])

  return (
    <div className={`app ${theme}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
