// Hooks
import { useState, useEffect, useRef } from 'react'

const useBgAnimation = (iconsData, delay) => {
  const [iconsAnimating, setIconsAnimating] = useState(iconsData.map(() => {
    return {
      isAnimating: false
    }
  }))

  const iconsRef = useRef([])

  const updateIconAnimating = (index, isAnimating) => {
    let updateIcons = [...iconsAnimating]
    updateIcons[index].isAnimating = isAnimating
    setIconsAnimating(updateIcons)
  }

  const handleBgAnimation = () => {
    const availableIcons = iconsAnimating.map((icon, index) => {
      if (!icon.isAnimating) return index
    })

    const indexIconToAnimating = availableIcons[Math.floor(Math.random() * availableIcons.length)]

    if (!indexIconToAnimating) return

    iconsRef.current[indexIconToAnimating].addEventListener(
      'animationend',
      () => updateIconAnimating(indexIconToAnimating, false),
      { once: true }
    )

    iconsRef.current[indexIconToAnimating].style.right = `${Math.floor(Math.random() * 100)}%`
    iconsRef.current[indexIconToAnimating].style.top = `${Math.floor(Math.random() * 60)}%`
    updateIconAnimating(indexIconToAnimating, true)
  }

  useEffect(() => {
    const animationInterval = setInterval(handleBgAnimation, delay)
    return () => clearInterval(animationInterval)
  }, [])

  return [iconsAnimating, iconsRef]
}

export default useBgAnimation
