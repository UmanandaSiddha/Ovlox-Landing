'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface PlatformIcon {
	name: string
	initialX: number
	initialY: number
	delay: number
}

const platforms: PlatformIcon[] = [
	{ name: 'GitHub', initialX: 10, initialY: 20, delay: 0 },
	{ name: 'Jira', initialX: 85, initialY: 15, delay: 0.3 },
	{ name: 'Slack', initialX: 15, initialY: 75, delay: 0.6 },
]

export default function FloatingPlatformIcons() {
	const shouldReduceMotion = useReducedMotion()

	return (
		<div className="absolute inset-0 pointer-events-none">
			{platforms.map((platform, index) => (
				<motion.div
					key={platform.name}
					className="absolute"
					style={{
						left: `${platform.initialX}%`,
						top: `${platform.initialY}%`,
					}}
					initial={{ opacity: 0, scale: 0 }}
					animate={
						shouldReduceMotion
							? { opacity: 0.1, scale: 1 }
							: {
									opacity: [0.08, 0.12, 0.08],
									scale: [1, 1.05, 1],
									y: [0, -15, 0],
									transition: {
										duration: 4 + index,
										repeat: Infinity,
										ease: 'easeInOut',
										delay: platform.delay,
									},
							  }
					}
				>
					<div className="bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
						<span className="text-white/40 text-xs font-medium">{platform.name}</span>
					</div>
				</motion.div>
			))}
		</div>
	)
}
