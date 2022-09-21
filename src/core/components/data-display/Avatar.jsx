import styles from '../../../styles/data-display/Avatar.module.css'

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src="/images/profile.png" className={styles.image} />
    </div>
  )
}

export default Avatar
