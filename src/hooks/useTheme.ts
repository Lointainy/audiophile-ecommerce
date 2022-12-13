import { useEffect, useState } from 'react'

export const getValue = (): boolean | undefined => {
  const initialValue: boolean = localStorage.getItem('user-theme') === 'light-theme' ? false : true
  return initialValue
} // get value from localstorage

export function useTheme() {
  const [value, setValue] = useState<boolean | undefined>(getValue) // dark is true
  const [userTheme, setUserTheme] = useState<string>(localStorage.getItem('user-theme') || 'light-theme')
  //theme from local or default 'light'

  const toggleTheme = (): void => {
    setValue(!value)
    userTheme === 'dark-theme' ? setUserTheme('light-theme') : setUserTheme('dark-theme')
  } // switch

  useEffect(() => {
    localStorage.setItem('user-theme', userTheme)
  }, [userTheme]) // add to local

  return { value, userTheme, toggleTheme }
}

export default useTheme
