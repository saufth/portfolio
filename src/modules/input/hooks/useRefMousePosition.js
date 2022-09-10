// Hooks
import { useState, useEffect, useRef } from 'react'

const useRefMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0
  })

  const ref = useRef(null)

  const updateMousePosition = (event) => {
    setMousePosition({
      mouseX: event.clientX,
      mouseY: event.clientY
    })
  }

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mousemove', updateMousePosition)

      // Clean up on unmount
      return () => {
        node.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])

  return [ref, mousePosition]
}

export default useRefMousePosition
