'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../app/styles/navbar.css'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav className="navbar">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>

        {isHome ? (
          <li><Link href="/login">Login</Link></li>
        ) : (
          <li><Link href="/">Home</Link></li>
        )}
      </ul>
    </nav>
  )
}