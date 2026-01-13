'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedGradient() {
	const shouldReduceMotion = useReducedMotion()
	
	return (
		<>
			{/* Light blue patch - top left */}
			<motion.div
				className="absolute top-0 left-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-30 blur-3xl pointer-events-none"
				style={{
					background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 70%)',
					willChange: 'transform',
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								x: [0, 50, -30, 0],
								y: [0, -40, 30, 0],
								scale: [1, 1.1, 0.9, 1],
						  }
				}
				transition={
					shouldReduceMotion
						? {}
						: {
								duration: 20,
								repeat: Infinity,
								ease: 'easeInOut',
						  }
				}
			/>

			{/* Violet patch - bottom right, extends beyond hero section */}
			<motion.div
				className="absolute bottom-0 right-0 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full opacity-30 blur-3xl pointer-events-none"
				style={{
					background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
					willChange: 'transform',
					bottom: '-100px', // Extend below hero section for blending
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								x: [0, -60, 40, 0],
								y: [0, 50, -35, 0],
								scale: [1, 0.95, 1.15, 1],
						  }
				}
				transition={
					shouldReduceMotion
						? {}
						: {
								duration: 25,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 0.5,
						  }
				}
			/>
		</>
	)
}
