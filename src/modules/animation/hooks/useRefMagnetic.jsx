// Hooks
import { useEffect, useRef } from 'react'
import useRefDimensions from '../../sizing/hooks/useRefDimensions'
import useRefMousePosition from '../../input/hooks/useRefMousePosition'

const increase = 1.12

const useRefMagnetic = ({ fieldRef, rotation = 10, transition = 16, attraction }) => {
  const magnetRef = useRef()
  
  const mousePosition = useRefMousePosition(fieldRef)
  const dimensions = useRefDimensions(fieldRef)

  const halfWidth = dimensions.width / 2
  const halfHeight = dimensions.height / 2

  const orientation = attraction ? 1 : -1

  const handleMagnetic = () => {
    const variationX = (mousePosition.x - halfWidth) / halfWidth
    const variationY = (mousePosition.y - halfHeight) / halfHeight

    const rotationX = (variationY * (rotation * increase)) * orientation
    const rotationY = (variationX * rotation) * (-orientation)

    const transitionX = (variationX * transition) * orientation
    const transitionY = (variationY * (transition * increase)) * orientation
  
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
      node.addEventListener('mousemove', handleMagnetic)
      
      return () => {
        node.removeEventListener('mousemove', handleMagnetic)
      }
    }
  }, [mousePosition])

  return magnetRef
}

export default useRefMagnetic
