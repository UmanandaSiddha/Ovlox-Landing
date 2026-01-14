'use client'

import { SiGithub, SiJira, SiSlack, SiNotion, SiFigma, SiDiscord, SiGitlab } from "react-icons/si"
import AnimatedGradient from "@/components/AnimatedGradient"

export default function ConnectToolsSection() {
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
					Connect your existing tools
				</h2>

				{/* Subtitle */}
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
					We automatically track updates where the work already happens.
				</p>

				{/* Logo Row */}
				<div className="flex flex-wrap items-center justify-between w-full">
					{/* GitLab */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiGitlab size={48} color="white" />
					</div>

					{/* Figma */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiFigma size={48} color="white" />
					</div>

					{/* Slack */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiSlack size={48} color="white" />
					</div>

					{/* GitHub */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiGithub size={48} color="white" />
					</div>

					{/* Jira */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiJira size={48} color="white" />
					</div>

					{/* Discord */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiDiscord size={48} color="white" />
					</div>

					{/* Notion */}
					<div className="flex items-center justify-center w-24 h-12">
						<SiNotion size={48} color="white" />
					</div>
				</div>
			</div>
		</section>
	)
}
