// Components
import Anchor from './Anchor'
// Styles
import styles from '../../../styles/navigation/IconLink.module.css'

const iconsPath = '/images/icons/'
const ext = '.svg'

const IconLink = ({ text, icon, href = '/', target, shadow }) => {
  const iconPath = `${iconsPath}${icon}${ext}`

  const shadowStyle = shadow ? styles.shadow : ''

  const iconStyle = `${styles.icon} ${shadowStyle}`
  const textStyle = `${styles.text} ${shadowStyle}`

  return (
    <Anchor target={target} href={href}>
      <span className={styles.wrapper}>
        <img src={iconPath} className={iconStyle} />
        <span className={textStyle}>
          {text}
        </span>
      </span>
    </Anchor>
  )
}

export default IconLink
