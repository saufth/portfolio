import styles from '../../../../styles/data-display/Avatar.module.css'

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src="/images/profile.png" className="rotate-45" />
    </div>
  )
}

export default Avatar
