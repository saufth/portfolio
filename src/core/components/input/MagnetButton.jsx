// Hooks
import { useRef } from 'react'
import useRefMagnetic from '../../../modules/animation/hooks/useRefMagnetic'
// Styles
import styles from '../../../styles/input/MagnetButton.module.css'

const buttonStyle = `${styles.button} ${styles.group}`
const cercleStyles = Array.from({ length: 5 }, (_item, index) => (
  `${styles.cercle} ${styles[`cercle${index}`]}`
))

const MagnetButton = ({ children, onclick }) => {
  const magneticConfig = {
    fieldRef: useRef(),
    rotation: 0,
    attraction: true
  }
  const buttonRef = useRefMagnetic({ transition: 14, ...magneticConfig })
  const textRef = useRefMagnetic({ transition: 7, ...magneticConfig })

  return (
    <button className={buttonStyle} ref={buttonRef} onClick={onclick}>
      <div className={styles.background}>
        {cercleStyles.map((item, index) => {
          return <span className={item} key={index}></span>
        })}
      </div>
      <span className={styles.text} ref={textRef}>
        {children}
      </span>
      <div className={styles.magneticField} ref={magneticConfig.fieldRef}></div>
    </button>
  )
}

export default MagnetButton
