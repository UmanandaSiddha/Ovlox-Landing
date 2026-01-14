'use client'

import AnimatedGradient from "@/components/AnimatedGradient"

export default function ProjectProgressSection() {
	return (
		<section className="relative py-16 sm:py-20 overflow-hidden">
			{/* Animated Gradient Background */}
			<AnimatedGradient />

			{/* 90% width container */}
			<div className="w-[90%] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
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
					className="text-center max-w-3xl mx-auto mb-12"
					style={{
						fontFamily: 'var(--font-source-sans-3), sans-serif',
						fontWeight: 400,
						fontSize: '20px',
						lineHeight: '140%',
						letterSpacing: '0%',
						color: '#676A74',
					}}
				>
					Get a clear, real-time view of what's being worked on across your development tools,<br />
					translated into simple updates you can understand without technical knowledge
				</p>

				{/* Video */}
				<div className="mb-16 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="Demo Video"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full"
					/>
				</div>

				{/* Three Feature Cards */}
				<div className="flex flex-col md:flex-row gap-8 md:gap-0">
					{/* Connect your Tools */}
					<div className="text-center md:text-left rounded-xl p-6 border border-[#60CAF9]">
						<h3
							className="mb-4"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								fontSize: '32px',
								lineHeight: '36px',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Connect your Tools
						</h3>
						<p
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								fontSize: '16px',
								lineHeight: '140%',
								letterSpacing: '0%',
								color: '#676A74',
							}}
						>
							Link the tools your team already uses, like GitHub, Jira, and Slack, in just a few clicks.
						</p>
					</div>

					{/* Vertical Line Separator */}
					<div className="hidden md:block w-px bg-white/20 mx-8" />

					{/* Track Real Work */}
					<div className="text-center md:text-left rounded-xl p-6">
						<h3
							className="mb-4"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								fontSize: '32px',
								lineHeight: '36px',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Track Real Work
						</h3>
						<p
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								fontSize: '16px',
								lineHeight: '140%',
								letterSpacing: '0%',
								color: '#676A74',
							}}
						>
							See what developers are actually working on, based on live updates from your connected tools..
						</p>
					</div>

					{/* Vertical Line Separator */}
					<div className="hidden md:block w-px bg-white/20 mx-8" />

					{/* Understand the Progress */}
					<div className="text-center md:text-left rounded-xl p-6">
						<h3
							className="mb-4"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								fontSize: '32px',
								lineHeight: '36px',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Understand the Progress
						</h3>
						<p
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								fontSize: '16px',
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
