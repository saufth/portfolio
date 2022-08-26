const Container = ({ children, bgColor = 'transparent' }) => {
  const bgColorStyle = `bg-${bgColor}`

  return (
    <div className={bgColorStyle}>
      <div className="max-w-6xl px-8 py-3 my-0 mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Container
