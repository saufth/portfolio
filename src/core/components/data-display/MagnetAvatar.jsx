// Hooks
import useRefMagnetic from '../../../modules/animation/hooks/useRefMagnetic'
// Styles
import styles from '../../../styles/data-display/MagnetAvatar.module.css'

const MagnetAvatar = () => {
  const magnetRef = useRefMagnetic({
    transition: 14,
    rotation: 0,
    attraction: true
  })
  return (
    <div className={styles.avatar} ref={magnetRef}>
      <img src='/images/profile.png' />
    </div>
  )
}

export default MagnetAvatar
