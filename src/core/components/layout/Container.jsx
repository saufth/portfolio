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
    centerAlignment
  }
) => {
  const autoStyle = auto ? styles.container : ''
  const sizeStyle = fullHeight ? 'h-full' : ''
  const flexStyle = centerAlignment ? alignmentStyles[centerAlignment] : ''
  const containerStyle = `${autoStyle} ${sizeStyle} ${flexStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
