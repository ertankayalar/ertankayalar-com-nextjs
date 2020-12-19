import Link from 'next/link'

const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        style={{ textDecoration: 'none' }}
        className='bg-primary  text-white py-3 px-5 font-bold m-2 rounded  w-auto hover:bg-accent hover:text-white shadow-lg'
      >
        {children}
      </a>
    </Link>
  )
}

export default Button
