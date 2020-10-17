import Link from 'next/link'

const links = [
  { href: '/', label: 'Giriş' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/blog', label: 'Blog' },
  { href: '/teknoloji', label: 'Teknolojiler' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Nav() {
  return (
    <nav className='flex flex-wrap items-center justify-center mr-5 md:mr-0  md:justify-end space-x-4 h-auto md:h-24 text-gray-600'>
      {links.map(({ href, label }) => (
        <Link key={`${href}${label}`} href={href}>
          <a className='w-full text-right my-1 md:w-auto md:text-left hover:text-gray-800'>
            {label}
          </a>
        </Link>
      ))}
    </nav>
  )
}
