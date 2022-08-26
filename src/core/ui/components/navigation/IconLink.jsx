// Components
import Anchor from './Anchor'

const iconsPath = '/images/icons/'
const ext = '.svg'

const IconLink = ({ text, icon, href = '/', target }) => {
  const iconPath = `${iconsPath}${icon}${ext}`

  return (
    <Anchor target={target} href={href}>
      <span className="flex">
        <img src={iconPath} className="w-3.5 md:w-5" />
          <span className="ml-3 md:ml-4">
            <p className="bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900">
              {text}
            </p>
          </span>
      </span>
    </Anchor>
  )
}

export default IconLink
