import Link from 'next/link'

const links = [
    { href: '/', label: 'Giriş'},
    { href: '/hakkimda', label: 'Hakkımda' },
    { href: '/blog', label: 'Blog' },
    { href: '/iletisim', label: 'İletişim' }
  ]


  export default function Nav() {
    return (
      <nav className="flex flex-wrap items-center md:justify-end space-x-4 h-24">
        
          
            {links.map(({ href, label }) => (
              <Link key={`${href}${label}`} href={href}>
                <a>{label}</a>
              </Link>
              
            ))}
        
      </nav>
    )
  }