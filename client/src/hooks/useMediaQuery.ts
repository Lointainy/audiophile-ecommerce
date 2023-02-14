import { useLayoutEffect, useState } from 'react'

const queries = [
  { name: 'mobile', query: '(max-width: 767px)', status: false },
  { name: 'tablet', query: '(min-width: 768px) and (max-width: 991px)', status: false },
  { name: 'desktop', query: '(min-width: 992px)', status: false },
]

export function useMediaQuery() {
  const mediaQueryLists = queries.map((item) => matchMedia(item.query))

  const getMedia = () => {
    const filteredQuery = queries
      .map((item) => ({ ...item, status: matchMedia(item.query).matches }))
      .filter((item) => item.status == true)
    const obj = { ...filteredQuery }

    return obj[0]
  }

  const [mediaQuery, setMediaQuery] = useState(getMedia)

  useLayoutEffect(() => {
    const handler = () => setMediaQuery(getMedia)
    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))
    return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler))
  })

  return { mediaQuery }
}
