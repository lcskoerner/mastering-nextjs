import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link as='/post/1' href='/post/[id]'>
            <a>First Post</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
