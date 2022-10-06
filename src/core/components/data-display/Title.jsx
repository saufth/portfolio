// Styles
import styles from '../../../styles/data-display/Title.module.css'

const Title = ({ text = '', highlighted = '', center = false, info, shadow }) => {
  const tooltipInfo = info || `${text} ${highlighted}`

  const alignmentStyle = center ? styles.alignment : ''
  const shadowStyle = shadow ? styles.shadow : ''
  const titleStyle = `${styles.title} ${shadowStyle} ${alignmentStyle}`

  return (
    <h1 title={tooltipInfo} className={titleStyle}>
      {text}
      {highlighted && <span className={styles.highlight}>
        <br/>
        {' '}{highlighted}
      </span>}
    </h1>
  )
}

export default Title
