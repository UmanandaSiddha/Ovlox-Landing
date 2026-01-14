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

			{/* Full width with padding on mobile, 90% on larger screens */}
			<div className="w-full px-4 sm:px-6 lg:w-[90%] lg:mx-auto relative z-10">
				{/* Hero Tags - Hidden on mobile */}
				<div className="hidden sm:block absolute inset-0 pointer-events-none">
					<HeroTag name="Roger" position="left" />
					<HeroTag name="Rad" position="right" />
				</div>

				{/* Hero Content */}
				<HeroContent>
					<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" style={{ overflow: 'visible' }}>
						<div className="text-center" style={{ overflow: 'visible' }}>
							{/* Two-line Heading */}
							<h1
								className="flex flex-col items-center justify-center relative mb-4 sm:mb-6 lg:mb-8"
								style={{
									overflow: 'visible',
									paddingBottom: '4px',
									filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 0.15))',
								}}
							>
								<span
									className="block hero-heading-white text-center"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 400,
										lineHeight: '100%',
										letterSpacing: '0%',
										color: '#E5E7EB',
										whiteSpace: 'normal',
										overflow: 'visible',
									}}
								>
									<span className="inline sm:whitespace-nowrap">Understand your website's progress</span>
								</span>
								<span
									className="block hero-heading-blue text-center mt-2 sm:mt-3"
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
										whiteSpace: 'normal',
									}}
								>
									<span className="sm:whitespace-nowrap">without reading</span>
									<br className="sm:hidden" />
									<span className="sm:whitespace-nowrap"> code</span>
								</span>
							</h1>

							{/* Subtext */}
							<p
								className="mt-4 sm:mt-6 lg:mt-8 max-w-xl mx-auto text-center text-base sm:text-lg lg:text-xl"
								style={{
									fontFamily: 'var(--font-source-sans-3), sans-serif',
									fontWeight: 400,
									lineHeight: '100%',
									letterSpacing: '0%',
									color: '#676A74',
								}}
							>
								Track updates from GitHub, Jira, Slack, and more<br className="hidden sm:block" />
								summarized clearly for <span style={{ fontStyle: 'italic', color: '#E5E7EB' }}>founders</span>
							</p>

							{/* Buttons */}
							<div className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 lg:gap-6">
								<a
									href="#"
									className="w-full sm:w-auto sm:flex-none rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-base xl:text-lg font-semibold text-black shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-all duration-300 text-center"
									style={{ background: 'linear-gradient(to right, #38BDF8, #60CAF9)' }}
								>
									See it in Action
								</a>
								<a
									href="#"
									className="w-full sm:w-auto sm:flex-none rounded-full border-2 border-[#60CAF9] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-base xl:text-lg font-semibold text-white hover:scale-105 hover:bg-[#60CAF9]/10 hover:shadow-[0_0_20px_rgba(96,202,249,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-all duration-300 text-center"
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
