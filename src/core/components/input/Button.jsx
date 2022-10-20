// Hooks
import { useRef } from 'react'
import useRefMagnetic from '../../../modules/animation/hooks/useRefMagnetic'
// Styles
import styles from '../../../styles/input/Button.module.css'

const magneticConfig = {
  transition: 16,
  rotation: 0,
  attraction: true
}

const Button = ({ children, onclick }) => {
  const magneticFieldRef = useRef()

  const buttonRef = useRefMagnetic({
    fieldRef: magneticFieldRef,
    ...magneticConfig
  })
  const textRef = useRefMagnetic({
    fieldRef: magneticFieldRef,
    ...magneticConfig,
    transition: 8
  })

  return (
    <button className={styles.button} ref={buttonRef} onClick={onclick}>
      <span className={styles.text} ref={textRef}>
        {children}
      </span>
      <div className={styles.magneticField} ref={magneticFieldRef}></div>
    </button>
  )
}

export default Button
