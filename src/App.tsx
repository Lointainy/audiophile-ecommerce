/* Router */
import router from '@router/router'
import { RouterProvider } from 'react-router-dom'

/* Hooks */
import { useTheme } from '@hooks/useTheme'

const App: React.FC = () => {
  const { userTheme, toggleTheme } = useTheme()

  console.log(userTheme)
  return (
    <div className={`app ${userTheme}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
