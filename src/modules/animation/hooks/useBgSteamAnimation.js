// Hooks
import { useState, useEffect, useRef } from 'react'

const useBgSteamAnimation = (itemsLength, delay) => {
  const [
    itemsAnimating,
    setItemsAnimating
  ] = useState(Array.from({ length: itemsLength }, () => ({
    isAnimating: false
  })))

  const itemsRef = useRef([])

  const updateItemAnimating = (index, isAnimating) => {
    let updateItems = [...itemsAnimating]
    updateItems[index].isAnimating = isAnimating
    setItemsAnimating(updateItems)
  }

  const handleBgAnimation = () => {
    const availableItems = itemsAnimating.map((item, index) => {
      if (!item.isAnimating) return index
    })

    const indexItemToAnimating = availableItems[Math.floor(Math.random() * availableItems.length)]

    if (!indexItemToAnimating) return

    itemsRef.current[indexItemToAnimating].addEventListener(
      'animationend',
      () => updateItemAnimating(indexItemToAnimating, false),
      { once: true }
    )

    itemsRef.current[indexItemToAnimating].style.right = `${Math.floor(Math.random() * 100)}%`
    itemsRef.current[indexItemToAnimating].style.top = `${Math.floor(Math.random() * 60)}%`
    updateItemAnimating(indexItemToAnimating, true)
  }

  useEffect(() => {
    const animationInterval = setInterval(handleBgAnimation, delay)
    return () => clearInterval(animationInterval)
  }, [])

  return [itemsAnimating, itemsRef]
}

export default useBgSteamAnimation
