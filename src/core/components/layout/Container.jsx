import styles from '../../../styles/layout/Container.module.css'

const alignmentStyles = {
  start: styles.flexCenterStart,
  center: styles.flexCenter,
  end: styles.flexCenterEnd
}

const Container = ({ children, auto, fullHeight, alignment, perspective }) => {
  const autoStyle = auto ? styles.auto : ''
  const sizeStyle = fullHeight ? styles.fullHeight : ''
  const flexStyle = alignment ? alignmentStyles[alignment] : ''
  const pespectiveStyle = perspective ? styles.perspective : ''
  const containerStyle = `${autoStyle} ${sizeStyle} ${flexStyle} ${pespectiveStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
