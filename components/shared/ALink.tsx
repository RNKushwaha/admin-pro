import Link from 'next/link'
import { useRouter } from 'next/router'

const ALink = ({ href, children, ...rest }): JSX.Element => {
  const router = useRouter()
  let className = rest?.className || ''
  const active = rest?.active === false ? false : true
  const activeClass = rest?.activeClass || 'active'

  if (active && router.asPath === href) {
    className += ' ' + activeClass
  }

  delete rest?.active
  delete rest?.activeClass

  return (
    <Link href={href}>
      <a {...rest} className={className}>
        {children}
      </a>
    </Link>
  )
}

export default ALink
