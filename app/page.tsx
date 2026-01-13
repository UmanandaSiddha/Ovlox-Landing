'use client'

import { OvloxLogo } from "@/assets"
import Image from "next/image"
import HeroTag from "@/components/HeroTag"
import AnimatedGradient from "@/components/AnimatedGradient"
import HeroContent from "@/components/HeroContent"

const navigation = [
	{ name: 'HOME', href: '#' },
	{ name: 'FEATURES', href: '#' },
	{ name: 'ABOUT', href: '#' },
	{ name: 'CONTACT', href: '#' },
]

export default function Home() {

	return (
		<div className="bg-[#020617] min-h-screen">
			<header className="absolute inset-x-0 top-0 z-50 w-full">
				<div className="w-[90%] mx-auto">
					<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
						<div className="flex lg:flex-1">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<Image
									alt=""
									src={OvloxLogo}
									className="h-8 w-auto"
								/>
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
							>
								<span className="sr-only">Open main menu</span>
								<p>Open main menu</p>
							</button>
						</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a 
								key={item.name} 
								href={item.href} 
								className="nav-link"
								style={{
									fontFamily: 'var(--font-source-sans-3), sans-serif',
									fontWeight: 400,
									fontSize: '16px',
									lineHeight: '100%',
									letterSpacing: '0%',
									color: '#E5E7EB',
								}}
							>
								{item.name}
							</a>
						))}
					</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<a href="#" className="text-sm/6 font-semibold text-white border border-[#60CAF9] px-4 py-1.5 rounded-full hover:bg-[#60CAF9]/10 transition-colors">
								Start Free Trial
							</a>
						</div>
					</nav>
				</div>
			</header>

			{/* 90% width container */}
			<div className="w-[90%] mx-auto">
				{/* Hero Section */}
				<section 
					data-hero-section
					className="relative min-h-screen flex items-center justify-center overflow-hidden"
				>
					{/* Animated Gradient Background */}
					<AnimatedGradient />

					{/* Hero Tags */}
					<div className="absolute inset-0 pointer-events-none">
						<HeroTag name="Roger" position="left" />
						<HeroTag name="Rad" position="right" />
					</div>

					{/* Hero Content */}
					<HeroContent>
						<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible' }}>
							<div className="text-center" style={{ overflow: 'visible' }}>
								{/* Two-line Heading */}
								<h1 className="text-center" style={{ overflow: 'visible', paddingBottom: '4px' }}>
									<span 
										className="block hero-heading-white mx-auto"
										style={{
											fontFamily: 'var(--font-manrope), sans-serif',
											fontWeight: 400,
											lineHeight: '100%',
											letterSpacing: '0%',
											color: '#E5E7EB',
											whiteSpace: 'nowrap',
											overflow: 'visible',
											// paddingBottom: '2px', // Prevent letter cutoff
										}}
									>
										Understand your website's progress
									</span>
									<span 
										className="block hero-heading-blue mx-auto"
										style={{
											fontFamily: 'var(--font-manrope), sans-serif',
											fontWeight: 700,
											lineHeight: '100%',
											letterSpacing: '0%',
											background: 'linear-gradient(to right, #38BDF8, #60CAF9)',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											backgroundClip: 'text',
											overflow: 'visible',
											paddingBottom: '12px', // Prevent letter cutoff for descenders like 'g'
											marginBottom: '8px', // Extra space for descenders
										}}
									>
										without reading code
									</span>
								</h1>

								{/* Subtext */}
								<p 
									className="mt-6 max-w-xl mx-auto text-center"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '20px',
										lineHeight: '100%',
										letterSpacing: '0%',
										color: '#676A74',
									}}
								>
									Track updates from GitHub, Jira, Slack, and more<br />
									summarized clearly for <span style={{ fontStyle: 'italic', color: '#E5E7EB' }}>founders</span>
								</p>

								{/* Buttons */}
								<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
									<a
										href="#"
										className="w-full sm:w-auto rounded-full px-6 py-3 text-sm font-semibold text-black shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-colors"
										style={{ background: 'linear-gradient(to right, #38BDF8, #60CAF9)' }}
									>
										See it in Action
									</a>
									<a 
										href="#" 
										className="w-full sm:w-auto rounded-full border-2 border-[#60CAF9] px-6 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-colors"
									>
										Book a Demo
									</a>
								</div>
							</div>
						</div>
					</HeroContent>
				</section>

				{/* Next Section - See your Project's Progress */}
				<section className="relative py-20 sm:py-32">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
							See your Project's Progress
						</h2>
						<p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
							Get a clear, real-time view of what's being worked on across your development tools, translated into simple updates you can understand without technical knowledge
						</p>
					</div>
				</section>
			</div>
		</div>
	)
}