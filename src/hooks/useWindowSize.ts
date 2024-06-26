import { useState, useEffect, useCallback } from 'react'

interface WindowSize {
  width: number
}

interface ExtendedWindowSize extends WindowSize {
  gteSm: boolean
  gteMd: boolean
  gteLg: boolean
}

const useWindowSize = (): ExtendedWindowSize => {
  const [windowSize, setWindowSize] = useState<ExtendedWindowSize>({
    width: window.innerWidth,
    gteSm: window.innerWidth >= 640,
    gteMd: window.innerWidth >= 768,
    gteLg: window.innerWidth >= 1024,
  })

  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth
    setWindowSize({
      width: newWidth,
      gteSm: newWidth >= 640,
      gteMd: newWidth >= 768,
      gteLg: newWidth >= 1024,
    })
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}

export default useWindowSize
