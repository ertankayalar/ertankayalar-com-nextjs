import Link from 'next/link'

export default function ExtLink({ href, children, className, rel, target }) {
  return (
    <Link href={href}>
      <a
        rel={!rel ? 'noopener external nofollow' : rel}
        target={!target ? '_blank' : target}
        className={className}
      >
        {children}
      </a>
    </Link>
  )
}
