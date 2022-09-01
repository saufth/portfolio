// Components
import Link from 'next/link'

const Anchor = ({ children, href = '/', target }) => {
  return (
    <Link href={href}>
      <a target={target}>
        {children}
      </a>
    </Link>
  )
}

export default Anchor
