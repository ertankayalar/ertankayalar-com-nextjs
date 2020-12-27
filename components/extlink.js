import Link from 'next/link'

export default function ExtLink({ href, children, className, rel, target }) {
  return (
    <Link href={href}>
      <a
        rel={!rel ? 'noopener external nofollow' : rel}
        target={!target ? '_blank' : target}
        className={
          className
            ? className
            : 'text-accent hover:text-primary font-bold border-transparent border-b-2  border-b-light-accent  transition duration-500 ease-in-out'
        }
      >
        {children}
      </a>
    </Link>
  )
}
