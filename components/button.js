import Link from 'next/link'

const Button = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <a
        style={{ textDecoration: 'none' }}
        className={
          'bg-accent  text-white py-3 px-5 font-bold  m-2 rounded  w-auto hover:bg-accent-dark hover:text-white shadow-lg ' +
          className
        }
      >
        {children}
      </a>
    </Link>
  )
}

export default Button
