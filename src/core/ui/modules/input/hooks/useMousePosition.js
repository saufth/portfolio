// Hooks
import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: null,
    mouseY: null
  })

  const updateMousePosition = (event) => {
    setMousePosition({ mouseX: event.clientX, mouseY: event.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
