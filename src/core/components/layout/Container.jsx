// Styles
import styles from '../../../styles/layout/Container.module.css'

const Container = ({ children, bgColor = 'transparent' }) => {
  const bgColorStyle = `bg-${bgColor}`

  return (
    <div className={bgColorStyle}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Container
