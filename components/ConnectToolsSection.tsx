'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SiGithub, SiJira, SiSlack, SiNotion, SiFigma, SiDiscord, SiGitlab } from "react-icons/si"
import AnimatedGradient from "@/components/AnimatedGradient"

interface ToolIcon {
	id: string
	icon: React.ComponentType<{ className?: string; color?: string }>
}

const tools: ToolIcon[] = [
	{ id: 'gitlab', icon: SiGitlab },
	{ id: 'figma', icon: SiFigma },
	{ id: 'slack', icon: SiSlack },
	{ id: 'github', icon: SiGithub },
	{ id: 'jira', icon: SiJira },
	{ id: 'discord', icon: SiDiscord },
	{ id: 'notion', icon: SiNotion },
]

export default function ConnectToolsSection() {
	// Create infinite carousel by duplicating tools (2 sets for seamless looping)
	const infiniteTools = [...tools, ...tools]

	// Constants for carousel - responsive icon width
	const getIconWidth = () => {
		if (typeof window === 'undefined') return 120
		if (window.innerWidth < 640) return 80 // sm
		if (window.innerWidth < 1024) return 100 // lg
		return 120 // xl
	}

	const [iconWidth, setIconWidth] = useState(120)
	const GAP = 24 // Gap between icons

	// Update icon width on resize
	useEffect(() => {
		const updateWidth = () => setIconWidth(getIconWidth())
		updateWidth()
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	// Calculate the total width of one set of tools
	const itemWidth = iconWidth + GAP
	const oneSetWidth = tools.length * itemWidth

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
					Connect your existing tools
				</h2>

				{/* Subtitle */}
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
					We automatically track updates where the work already happens.
				</p>

				{/* Carousel Container */}
				<div className="overflow-hidden w-full">
					<motion.div
						className="flex items-center"
						style={{
							gap: `${GAP}px`,
						}}
						animate={{
							x: `-${oneSetWidth}px`,
						}}
						transition={{
							duration: 20, // Slow continuous movement (20 seconds to move one set)
							repeat: Infinity,
							ease: 'linear', // Linear for constant speed
						}}
					>
						{infiniteTools.map((tool, index) => {
							const IconComponent = tool.icon
							return (
								<div
									key={`${tool.id}-${index}`}
									className="flex items-center justify-center flex-shrink-0"
									style={{
										width: `${iconWidth}px`,
									}}
								>
									<IconComponent
										className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
										color="white"
									/>
								</div>
							)
						})}
					</motion.div>
				</div>
			</div>
		</section>
	)
}
