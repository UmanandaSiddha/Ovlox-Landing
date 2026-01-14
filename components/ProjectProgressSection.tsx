'use client'

import AnimatedGradient from "@/components/AnimatedGradient"
import HeroVideo from "./HeroVideo"

export default function ProjectProgressSection() {
	return (
		<section className="relative py-16 sm:py-20 overflow-hidden">
			{/* Animated Gradient Background */}
			<AnimatedGradient />

			{/* Full width with padding on mobile, 90% on larger screens */}
			<div className="w-full px-4 sm:px-6 lg:w-[90%] lg:mx-auto relative z-10 lg:px-8">
				{/* Header */}
				<h2
					className="text-center mb-6"
					style={{
						fontFamily: 'var(--font-manrope), sans-serif',
						fontWeight: 600,
						fontSize: 'clamp(32px, 5vw, 48px)',
						lineHeight: '100%',
						letterSpacing: '0%',
						color: '#E5E7EB',
					}}
				>
					See your Project's Progress
				</h2>

				{/* Subtext in 2 lines */}
				<p
					className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg lg:text-xl"
					style={{
						fontFamily: 'var(--font-source-sans-3), sans-serif',
						fontWeight: 400,
						lineHeight: '140%',
						letterSpacing: '0%',
						color: '#676A74',
					}}
				>
					Get a clear, real-time view of what's being worked on across your development tools,<br className="hidden sm:block" />
					translated into simple updates you can understand without technical knowledge
				</p>

				{/* Video */}
				<div id="video-section" className="mb-16 rounded-lg overflow-hidden border border-[#60CAF9]/30">
					<div id="video-section-actual">
						<HeroVideo />
					</div>
				</div>

				{/* Three Feature Cards */}
				<div className="flex flex-col md:flex-row gap-6 md:gap-0">
					{/* Connect your Tools */}
					<div className="text-center md:text-left rounded-xl p-4 sm:p-5 lg:p-6 border border-[#60CAF9] transition-all duration-300 hover:scale-105 cursor-pointer">
						<h3
							className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								lineHeight: '110%',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Connect your Tools
						</h3>
						<p
							className="text-sm sm:text-base"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								lineHeight: '140%',
								letterSpacing: '0%',
								color: '#676A74',
							}}
						>
							Link the tools your team already uses, like GitHub, Jira, and Slack, in just a few clicks.
						</p>
					</div>

					{/* Vertical Line Separator */}
					<div className="hidden md:block w-px bg-white/20 mx-4 lg:mx-8" />

					{/* Track Real Work */}
					<div className="text-center md:text-left rounded-xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:scale-105 hover:border hover:border-[#60CAF9] cursor-pointer">
						<h3
							className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								lineHeight: '110%',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Track Real Work
						</h3>
						<p
							className="text-sm sm:text-base"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								lineHeight: '140%',
								letterSpacing: '0%',
								color: '#676A74',
							}}
						>
							See what developers are actually working on, based on live updates from your connected tools..
						</p>
					</div>

					{/* Vertical Line Separator */}
					<div className="hidden md:block w-px bg-white/20 mx-4 lg:mx-8" />

					{/* Understand the Progress */}
					<div className="text-center md:text-left rounded-xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:scale-105 hover:border hover:border-[#60CAF9] cursor-pointer">
						<h3
							className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								lineHeight: '110%',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Understand the Progress
						</h3>
						<p
							className="text-sm sm:text-base"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								lineHeight: '140%',
								letterSpacing: '0%',
								color: '#676A74',
							}}
						>
							Get clear, human-readable updates that show how your project is moving forward.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
