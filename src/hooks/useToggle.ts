import { useState } from 'react'

export function useToggle(initialValue: boolean) {
  const [toggle, setToggle] = useState(initialValue)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return { toggle, handleToggle }
}
