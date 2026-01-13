'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function GeometricShapes() {
	const shouldReduceMotion = useReducedMotion()

	return (
		<>
			{/* Top right geometric shape */}
			<motion.div
				className="absolute top-20 right-20 w-32 h-32 opacity-5 pointer-events-none"
				style={{
					background: 'linear-gradient(135deg, #38BDF8, transparent)',
					clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								rotate: [0, 360],
								scale: [1, 1.1, 1],
								transition: {
									duration: 20,
									repeat: Infinity,
									ease: 'linear',
								},
						  }
				}
			/>

			{/* Bottom left geometric shape */}
			<motion.div
				className="absolute bottom-32 left-16 w-24 h-24 opacity-5 pointer-events-none"
				style={{
					background: 'linear-gradient(45deg, #A855F7, transparent)',
					clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								rotate: [360, 0],
								scale: [1, 0.9, 1],
								transition: {
									duration: 25,
									repeat: Infinity,
									ease: 'linear',
								},
						  }
				}
			/>

			{/* Center right small shape */}
			<motion.div
				className="absolute top-1/2 right-32 w-16 h-16 opacity-5 pointer-events-none"
				style={{
					background: 'linear-gradient(90deg, #60CAF9, transparent)',
					borderRadius: '50%',
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								x: [0, 20, 0],
								y: [0, -20, 0],
								transition: {
									duration: 8,
									repeat: Infinity,
									ease: 'easeInOut',
								},
						  }
				}
			/>
		</>
	)
}
