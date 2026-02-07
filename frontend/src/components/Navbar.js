'use client'
import Link from 'next/link'
import '../app/styles/navbar.css'

export default function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#about">About</a></li> 
                <li><a href="#contact">Contact</a></li> 
                <li><Link href="/login">Login</Link></li> 
            </ul>
        </nav>
    )
}  