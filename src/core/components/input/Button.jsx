// Hooks
import { useRef } from 'react'
import useRefMagnetic from '../../../modules/animation/hooks/useRefMagnetic'
// Styles
import styles from '../../../styles/input/Button.module.css'

const magneticConfig = {
  rotation: 0,
  attraction: true
}

const Button = ({ children, onclick }) => {
  const magneticFieldRef = useRef()

  const buttonRef = useRefMagnetic({
    fieldRef: magneticFieldRef,
    transition: 14,
    ...magneticConfig
  })
  const textRef = useRefMagnetic({
    fieldRef: magneticFieldRef,
    transition: 7,
    ...magneticConfig
  })

  return (
    <button className={`${styles.button} ${styles.group}`} ref={buttonRef} onClick={onclick}>
      <div className={styles.background}>
        <div className={styles.cercle}></div>
        <div className={`${styles.cercle} ${styles.cercle2}`}></div>
        <div className={`${styles.cercle} ${styles.cercle3}`}></div>
        <div className={`${styles.cercle} ${styles.cercle4}`}></div>
        <div className={`${styles.cercle} ${styles.cercle5}`}></div>
      </div>
      <span className={styles.text} ref={textRef}>
        {children}
      </span>
      <div className={styles.magneticField} ref={magneticFieldRef}></div>
    </button>
  )
}

export default Button
