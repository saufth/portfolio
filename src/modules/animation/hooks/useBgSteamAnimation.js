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

  function handleBgAnimation() {
    const availableItems = itemsAnimating.map((item, index) => {
      if (!item.isAnimating) return index
    })

    const indexItemToAnimate = availableItems[Math.floor(Math.random() * availableItems.length)]

    if (!indexItemToAnimate) return

    const animationEndHandle = () => {
      updateItemAnimating(indexItemToAnimate, false)
    }

    itemsRef.current[indexItemToAnimate].addEventListener(
      'animationend',
      animationEndHandle,
      { once: true }
    )

    itemsRef.current[indexItemToAnimate].style.right = `${Math.floor(Math.random() * 100)}%`
    itemsRef.current[indexItemToAnimate].style.top = `${Math.floor(Math.random() * 60)}%`
    updateItemAnimating(indexItemToAnimate, true)
  }

  useEffect(() => {
    const animationInterval = setInterval(handleBgAnimation, delay)

    const currentItemsRef = itemsRef.current

    return () => {
      clearInterval(animationInterval)

      currentItemsRef?.map((_item, index) => {
        currentItemsRef[index]?.removeEventListener('animationend', handleBgAnimation.animationEndHandle)
      })
    }
  }, [])

  return [itemsAnimating, itemsRef]
}

export default useBgSteamAnimation
