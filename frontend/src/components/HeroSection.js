'use client'
import Link from 'next/link'
import '../app/styles/homepage.css'

export default function HeroSection() {
	return (
		<div className="hero-container">
			<img src="/images/blur-bg.jpg" className="blur-bg" alt="Background" />
			<img src="/images/clear-image.png" className="clear-image" alt="Foreground" />

			<div className="hero-text">
				<h1>Bookwise</h1>
				<p>Your smart gateway to hassle-free hotel bookings</p>
				<Link href="/login">
					<span className="get-started">Get Started →</span>
				</Link>
			</div>
		</div> 
	)
}
