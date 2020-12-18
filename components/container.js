const Container = ({ children, className, style }) => {
  return (
    <div
      className={`container mx-auto ${className ? className : ``}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Container
