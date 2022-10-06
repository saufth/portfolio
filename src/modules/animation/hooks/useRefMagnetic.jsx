// Hooks
import { useEffect, useRef } from 'react'
import useRefDimensions from '../../sizing/hooks/useRefDimensions'
import useRefMousePosition from '../../input/hooks/useRefMousePosition'

const useRefMagnetic = ({ fieldRef, reverse, rotation = 10, transition = 16 }) => {
  const magnetRef = useRef()
  
  const mousePosition = useRefMousePosition(fieldRef)
  const { width, height } = useRefDimensions(fieldRef)

  const halfWidth = width / 2
  const halfHeight = height / 2

  const orientation = reverse ? -1 : 1

  const magnetic = () => {
    const variationX = (mousePosition.x - halfWidth) / halfWidth
    const variationY = (mousePosition.y - halfHeight) / halfHeight

    const rotationX = (variationX * rotation) * orientation
    const rotationY = (variationY * rotation) * orientation

    const transitionX = (variationX * transition) * orientation
    const transitionY = (variationY * transition) * orientation
  
    magnetRef.current.style.transform = `
      rotateX(${rotationX}deg)
      rotateY(${rotationY}deg)
      translateX(${transitionX}px)
      translateY(${transitionY}px)
    `
  }

  useEffect(() => {
    const node = fieldRef.current

    if (node) {
      node.addEventListener('mousemove', magnetic)
      
      return () => {
        node.removeEventListener('mousemove', magnetic)
      }
    }
  }, [mousePosition])

  return magnetRef
}

export default useRefMagnetic
