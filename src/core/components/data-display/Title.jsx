// Styles
import styles from '../../../styles/data-display/Title.module.css'

const alignmentStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const Title = ({ text = '', highlighted = '', align = 'left', info, shadow }) => {
  const tooltipInfo = info || `${text} ${highlighted}`

  const shadowStyle = shadow ? styles.shadow : ''
  const titleStyle = `${styles.title} ${alignmentStyles[align]} ${shadowStyle}`

  return (
    <h1 title={tooltipInfo} className={titleStyle}>
      {text}
      {highlighted && <div className={styles.highlight}>
        {highlighted}
      </div>}
    </h1>
  )
}

export default Title
