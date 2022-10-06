// Hooks
import { useState, useEffect } from 'react'

const useRefMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const updateMousePosition = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mousemove', updateMousePosition)

      return () => {
        node.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])

  return mousePosition
}

export default useRefMousePosition
