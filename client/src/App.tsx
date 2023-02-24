/* Router */
import router from '@router/router'
import { RouterProvider } from 'react-router-dom'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setTheme } from './store/reducers/uiSlice'
import useTheme from './hooks/useTheme'
import { useEffect } from 'react'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const { userTheme } = useTheme()

  const theme = useAppSelector((store) => store.ui.colorTheme)

  useEffect(() => {
    dispatch(setTheme(userTheme))
  })

  return (
    <div className={`app ${theme}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
