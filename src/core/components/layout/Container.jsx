import styles from '../../../styles/layout/Container.module.css'

const alignmentStyles = {
  start: styles.flexCenterStart,
  center: styles.flexCenter,
  end: styles.flexCenterEnd
}

const Container = (
  {
    children,
    auto,
    fullHeight,
    centerAlignment,
    perspective
  }
) => {
  const autoStyle = auto ? styles.container : ''
  const sizeStyle = fullHeight ? 'h-full' : ''
  const flexStyle = centerAlignment ? alignmentStyles[centerAlignment] : ''
  const pespectiveStyle = perspective ? '[perspective:1280px]' : ''
  const containerStyle = `${autoStyle} ${sizeStyle} ${flexStyle} ${pespectiveStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
