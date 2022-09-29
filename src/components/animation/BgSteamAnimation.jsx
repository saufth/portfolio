// Hooks
import useBgSteamAnimation from '../../modules/animation/hooks/useBgSteamAnimation'
// Styles
import styles from '../../styles/animation/BgSteamAnimation.module.css'

const steamAnimations = {
  north: 'animate-steam-to-t',
  south: 'animate-steam-to-b',
  east: 'animate-steam-to-r',
  northeast: 'animate-steam-to-tr',
  southeast: 'animate-steam-to-bt',
  west: 'animate-steam-to-l',
  northwest: 'animate-steam-to-tl',
  southwest: 'animate-steam-to-bl'
}

const viewBox = '0 0 24 24'

const BgSteamAnimation = ({ items, steam = 'up', delay = 1000 }) => {
  const [itemsAnimating, animatedItemsRef] = useBgSteamAnimation(items.length, delay)

  const animation = steamAnimations[steam]

  return <div className={styles.canvas}>
    <div className={styles.items}>
      {items.map((item, index) => (
        <svg
          viewBox={viewBox}
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
