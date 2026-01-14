'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SectionBackgroundProps {
	variant?: 'default' | 'light' | 'dark'
	position?: 'top' | 'middle' | 'bottom'
}

export default function SectionBackground({ variant = 'default', position = 'middle' }: SectionBackgroundProps) {
	const shouldReduceMotion = useReducedMotion()

	// Different gradient intensities based on variant
	const getGradientIntensity = () => {
		switch (variant) {
			case 'light':
				return { cyan: 0.15, violet: 0.12, blue: 0.12 }
			case 'dark':
				return { cyan: 0.08, violet: 0.06, blue: 0.08 }
			default:
				return { cyan: 0.12, violet: 0.10, blue: 0.10 }
		}
	}

	const intensity = getGradientIntensity()

	// Position-based adjustments for blending
	const getPositionStyles = () => {
		switch (position) {
			case 'top':
				return {
					cyan: { top: '0%', left: '10%' },
					violet: { bottom: '20%', right: '15%' },
					blue: { top: '30%', right: '30%' }
				}
			case 'bottom':
				return {
					cyan: { top: '40%', left: '20%' },
					violet: { bottom: '0%', right: '10%' },
					blue: { bottom: '30%', left: '40%' }
				}
			default: // middle
				return {
					cyan: { top: '20%', left: '15%' },
					violet: { bottom: '20%', right: '20%' },
					blue: { top: '50%', right: '25%' }
				}
		}
	}

	const positions = getPositionStyles()

	return (
		<>
			{/* Base gradient background */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `radial-gradient(120% 90% at 22% 18%, rgba(56, 189, 248, ${intensity.cyan}), transparent 60%),
						radial-gradient(130% 110% at 78% 12%, rgba(168, 85, 247, ${intensity.violet}), transparent 55%),
						radial-gradient(160% 140% at 72% 78%, rgba(45, 151, 198, ${intensity.blue}), transparent 65%),
						linear-gradient(150deg, #020617 0%, #0b1222 38%, #11192a 65%, #202635 100%)`,
					backgroundSize: '240% 240%',
					animation: shouldReduceMotion ? 'none' : 'sectionGradient 35s ease-in-out infinite',
					filter: 'saturate(1.05)',
				}}
			/>

			{/* Top edge blend for smooth transitions */}
			{position === 'top' && (
				<div
					className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
					style={{
						background: 'linear-gradient(to bottom, rgba(168, 85, 247, 0.1), transparent)',
						mixBlendMode: 'screen',
					}}
				/>
			)}

			{/* Bottom edge blend for smooth transitions */}
			{position === 'bottom' && (
				<div
					className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
					style={{
						background: 'linear-gradient(to top, rgba(56, 189, 248, 0.08), transparent)',
						mixBlendMode: 'screen',
					}}
				/>
			)}

			{/* Animated gradient patches */}
			{/* Cyan patch */}
			<motion.div
				className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
				style={{
					width: '500px',
					height: '500px',
					background: `radial-gradient(circle, rgba(56, 189, 248, ${intensity.cyan * 2}) 0%, rgba(56, 189, 248, ${intensity.cyan}) 50%, transparent 70%)`,
					willChange: 'transform',
					...positions.cyan,
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								x: [0, 40, -25, 0],
								y: [0, -30, 25, 0],
								scale: [1, 1.05, 0.95, 1],
						  }
				}
				transition={
					shouldReduceMotion
						? {}
						: {
								duration: 22,
								repeat: Infinity,
								ease: 'easeInOut',
						  }
				}
			/>

			{/* Violet patch */}
			<motion.div
				className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
				style={{
					width: '600px',
					height: '600px',
					background: `radial-gradient(circle, rgba(168, 85, 247, ${intensity.violet * 2}) 0%, rgba(168, 85, 247, ${intensity.violet}) 50%, transparent 70%)`,
					willChange: 'transform',
					...positions.violet,
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								x: [0, -50, 35, 0],
								y: [0, 40, -30, 0],
								scale: [1, 0.9, 1.1, 1],
						  }
				}
				transition={
					shouldReduceMotion
						? {}
						: {
								duration: 28,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 0.3,
						  }
				}
			/>

			{/* Blue patch */}
			<motion.div
				className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
				style={{
					width: '550px',
					height: '550px',
					background: `radial-gradient(circle, rgba(45, 151, 198, ${intensity.blue * 2}) 0%, rgba(45, 151, 198, ${intensity.blue}) 50%, transparent 70%)`,
					willChange: 'transform',
					...positions.blue,
				}}
				animate={
					shouldReduceMotion
						? {}
						: {
								x: [0, 30, -20, 0],
								y: [0, -25, 20, 0],
								scale: [1, 1.08, 0.92, 1],
						  }
				}
				transition={
					shouldReduceMotion
						? {}
						: {
								duration: 25,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 0.6,
						  }
				}
			/>

			{/* Subtle overlay for depth */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03), transparent 45%),
						radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.02), transparent 35%)`,
					mixBlendMode: 'screen',
					opacity: 0.6,
				}}
			/>

			{/* Subtle dot pattern */}
			<div
				className="absolute inset-0 pointer-events-none opacity-20"
				style={{
					backgroundImage: `radial-gradient(circle, rgba(56, 189, 248, 0.2) 1px, transparent 1px)`,
					backgroundSize: '50px 50px',
					backgroundPosition: '0 0',
				}}
			/>
		</>
	)
}
