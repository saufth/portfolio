// Components
import Image from 'next/image'

const logoSizeConfig = {
  sm: {
    width: 25,
    height: 16
  },
  md: {
    width: 37.5,
    height: 24
  },
  lg: {
    width: 50,
    height: 32
  },
  xl: {
    width: 56,
    height: 36
  },
  '2xl': {
    width: 64,
    height: 40.5
  }
}

const Logo = ({ size = 'md', layout }) => {
  const {
    width,
    height
  } = logoSizeConfig[size]

  return (
    <Image
      src="/images/logos/sauftdev.svg"
      alt="Sauftdev Logo"
      layout={layout}
      width={width}
      height={height}
    />
  )
}

export default Logo
