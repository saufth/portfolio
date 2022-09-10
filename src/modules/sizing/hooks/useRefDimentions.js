// Hooks
import { useState, useEffect } from 'react'

const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [ref])

  return dimensions
}

export default useRefDimensions
