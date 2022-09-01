// Styles
import styles from '../../../styles/data-display/Title.module.css'

const Title = (
  {
    text = '',
    highlighted = '',
    center = false,
    info
  }
) => {
  const tooltipInfo = info || `${text} ${highlighted}`

  const titleStyle = `${styles.title}${center ? ' text-center' : ''}`

  return (
    <h1 title={tooltipInfo} className={titleStyle}>
      {text}
      {highlighted && <span className={styles.highlight}>
        <br/>{' '}{highlighted}
      </span>}
    </h1>
  )
}

export default Title
