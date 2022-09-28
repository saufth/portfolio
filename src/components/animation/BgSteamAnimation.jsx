// Hooks
import useBgSteamAnimation from '../../modules/animation/hooks/useBgSteamAnimation'
// Styles
import styles from '../../styles/animation/BgSteamAnimation.module.css'

const animationStyle = {
  up: 'animate-steam-up',
  down: 'animate-steam-down',
  right: 'animate-steam-right',
  left: 'animate-steam-left'
}

const iconsViewBox = '0 0 24 24'

const BgSteamAnimation = ({ items, steam = 'up', delay = 1000 }) => {
  const [itemsAnimating, animatedItemsRef] = useBgSteamAnimation(items.length, delay)

  const animation = animationStyle[steam]

  return <div className={styles.canvas}>
    <div className={styles.items}>
      {items.map((item, index) => (
        <svg
          viewBox={iconsViewBox}
          className={itemsAnimating[index].isAnimating ? animation : ''}
          ref={element => animatedItemsRef.current[index] = element}
          key={item.name}
        >
          <path d={item.data} />
        </svg>
      ))}
    </div>
  </div>
}

export default BgSteamAnimation
