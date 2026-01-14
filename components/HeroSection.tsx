'use client'

import HeroTag from "@/components/HeroTag"
import AnimatedGradient from "@/components/AnimatedGradient"
import HeroContent from "@/components/HeroContent"
import HeroGrid from "@/components/HeroGrid"
import FloatingPlatformIcons from "@/components/FloatingPlatformIcons"
import AnimatedDotPattern from "@/components/AnimatedDotPattern"

export default function HeroSection() {
	return (
		<section
			data-hero-section
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Full Width Backgrounds and Overlays */}
			{/* Animated Gradient Background */}
			<AnimatedGradient />

			{/* Animated Dot Pattern */}
			<AnimatedDotPattern />

			{/* Subtle Grid Pattern */}
			<HeroGrid />

			{/* Floating Platform Icons */}
			<FloatingPlatformIcons />

			{/* 90% width container for content */}
			<div className="w-[90%] mx-auto relative z-10">
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
							<h1
								className="flex flex-col items-center justify-center relative"
								style={{
									overflow: 'visible',
									paddingBottom: '4px',
									filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 0.15))',
								}}
							>
								<span
									className="block hero-heading-white"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 400,
										lineHeight: '100%',
										letterSpacing: '0%',
										color: '#E5E7EB',
										whiteSpace: 'nowrap',
										overflow: 'visible',
									}}
								>
									Understand your website's progress
								</span>
								<span
									className="block hero-heading-blue"
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
										paddingBottom: '12px',
										marginBottom: '8px',
									}}
								>
									without reading code
								</span>
							</h1>

							{/* Subtext */}
							<p
								className="mt-4 max-w-xl mx-auto text-center"
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
							<div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
								<a
									href="#"
									className="w-full sm:w-auto rounded-full px-6 py-3 text-md font-semibold text-black shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-colors"
									style={{ background: 'linear-gradient(to right, #38BDF8, #60CAF9)' }}
								>
									See it in Action
								</a>
								<a
									href="#"
									className="w-full sm:w-auto rounded-full border-2 border-[#60CAF9] px-6 py-3 text-md font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-colors"
								>
									Book a Demo
								</a>
							</div>
						</div>
					</div>
				</HeroContent>
			</div>
		</section>
	)
}
