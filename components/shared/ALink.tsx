import Link from 'next/link'

const ALink = ({ href, children, ...rest }): JSX.Element => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default ALink
