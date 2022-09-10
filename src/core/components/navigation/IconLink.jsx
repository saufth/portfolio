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
        <img src={iconPath} className="w-3.5 sm:w-4 lg:w-5" />
          <span className="ml-2.5 sm:ml-3 lg:ml-4">
            <p className={styles.text}>
              {text}
            </p>
          </span>
      </span>
    </Anchor>
  )
}

export default IconLink
