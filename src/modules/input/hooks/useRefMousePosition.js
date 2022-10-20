// Hooks
import { useState, useEffect } from 'react'

const useRefMousePosition = (ref, fromPage) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const handleMousePosition = (event) => {
    const mousePosition = fromPage
      ? { x: event.pageX, y: event.pageY }
      : { x: event.offsetX, y: event.offsetY }

    setMousePosition(mousePosition)
  }

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mousemove', handleMousePosition)

      return () => {
        node.removeEventListener('mousemove', handleMousePosition)
      }
    }
  }, [])

  return mousePosition
}

export default useRefMousePosition
