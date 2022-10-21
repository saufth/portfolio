// Components
import BgHypnoticAnimation from '../../../components/animation/BgHypnoticAnimation'
// Hooks
import { useRef } from 'react'
import useRefMagnetic from '../../../modules/animation/hooks/useRefMagnetic'
// Styles
import styles from '../../../styles/input/MagnetButton.module.css'

const MagnetButton = ({ children, onclick }) => {
  const magneticConfig = {
    rotation: 0,
    attraction: true
  }
  const buttonRef = useRefMagnetic({ transition: 14, ...magneticConfig })
  const textRef = useRefMagnetic({
    fieldRef: buttonRef,
    transition: 7,
    ...magneticConfig
  })

  return (
    <button className={styles.button} onClick={onclick} ref={buttonRef}>
      <span className={styles.text} ref={textRef}>
        {children}
      </span>
      <BgHypnoticAnimation>
        <div className={styles.magneticField}></div>
      </BgHypnoticAnimation>
    </button>
  )
}

export default MagnetButton
