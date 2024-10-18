import { createContext, useEffect, useState } from 'react'

export const PageSizeContext = createContext({
  width: 0,
  height: 0,
})

export const PageSizeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageSizeContext.Provider value={{ width, height }}>
      {children}
    </PageSizeContext.Provider>
  )
}
