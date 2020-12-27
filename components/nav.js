import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact Me' },
]

export default function Nav() {
  return (
    <nav className='flex flex-wrap items-center justify-center mr-5 md:mr-0  md:justify-end space-x-4 h-auto md:h-24 text-gray-600'>
      {links.map(({ href, label }) => (
        <Link key={`${href}${label}`} href={href}>
          <a className='w-full text-right my-1 md:w-auto md:text-left hover:text-accent'>
            {label}
          </a>
        </Link>
      ))}

      <Link href='https://ertankayalar.com.tr'>
        <a title='Türkçe'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            // height='480'
            // width='640'
            className='w-8 h-4'
            viewBox='0 0 640 480'
          >
            <g fill-rule='evenodd'>
              <path fill='#f31930' d='M0 0h640v480H0z' />
              <path
                d='M406.977 247.473c0 66.215-54.606 119.89-121.97 119.89S163.04 313.686 163.04 247.472s54.606-119.89 121.968-119.89 121.97 53.677 121.97 119.89z'
                fill='#fff'
              />
              <path
                d='M413.077 247.467c0 52.97-43.686 95.91-97.575 95.91s-97.574-42.94-97.574-95.91 43.686-95.91 97.574-95.91 97.575 42.94 97.575 95.91z'
                fill='#f31830'
              />
              <path
                d='M430.726 191.465l-.985 44.318-41.345 11.225 40.756 14.514-.984 40.642 26.58-31.738 40.164 13.934-23.233-34.06 28.352-33.868-43.513 11.998-25.793-36.964z'
                fill='#fff'
              />
            </g>
          </svg>
        </a>
      </Link>
    </nav>
  )
}
