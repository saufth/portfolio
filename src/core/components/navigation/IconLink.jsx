// Components
import Anchor from './Anchor'
// Styles
import styles from '../../../styles/navigation/IconLink.module.css'

const iconsPath = '/images/icons/'
const ext = '.svg'

const IconLink = ({ text, icon, href = '/', target }) => {
  const iconPath = `${iconsPath}${icon}${ext}`

  return (
    <Anchor target={target} href={href}>
      <span className="flex">
        <img src={iconPath} className={styles.icon} />
          <span className={styles.text}>
            <p>{text}</p>
          </span>
      </span>
    </Anchor>
  )
}

export default IconLink
