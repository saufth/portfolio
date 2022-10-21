// Styles
import styles from '../../styles/animation/BgHypnoticAnimation.module.css'

const BgHypnoticAnimation = ({ children }) => {
  const cercles = Array.from({ length: 5 }, (_item, index) => {
    const currentIndex = index + 1
    const currentCercle = styles[`cercle${currentIndex}`]
    return `${styles.cercle} ${currentCercle}`
  })

  return (
    <div className={styles.group}>
      {children}
      <div className={styles.background}>
        {cercles.map((item, index) => {
          return <span className={item} key={index}></span>
        })}
      </div>
    </div>
  )
}

export default BgHypnoticAnimation
