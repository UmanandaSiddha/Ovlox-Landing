'use client'

import { BlueCursor, VioletCursor } from '@/assets'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface HeroTagProps {
	name: string
	position: 'left' | 'right'
}

export default function HeroTag({ name, position }: HeroTagProps) {
	const shouldReduceMotion = useReducedMotion()

	// Arrow direction based on position
	const arrowDirection = position === 'left' ? '→' : '←'
	
	// Left tag: comes from top-left, ends at a position pointing to hero header
	// Right tag: comes from bottom-right, ends at a different vertical position pointing to hero header
	const isLeft = position === 'left'
	
	// Final positions - different vertical levels (pointing toward hero header)
	const finalX = 0
	const finalYLeft = 100 // Left tag position (below hero header)
	const finalYRight = 140 // Right tag position (further below, different level)
	const finalY = isLeft ? finalYLeft : finalYRight
	
	// Initial positions - completely off-screen (beyond viewport)
	// Left: top-left corner (negative x and negative y - way off screen)
	// Right: bottom-right corner (positive x and positive y - way off screen)
	const initialX = isLeft ? -600 : 600 // Further out to ensure off-screen
	const initialY = isLeft ? -400 : 500 // Further out to ensure off-screen

	return (
		<motion.div
			className={`absolute ${isLeft ? 'left-0 md:left-4 lg:left-8' : 'right-0 md:right-4 lg:right-8'} z-10`}
			style={{
				top: '50%',
				transform: `translate(${finalX}px, ${finalY}px)`,
			}}
		>
			<motion.div
				animate={
					shouldReduceMotion
						? {}
						: {
								y: [0, -8, 0],
								transition: {
									duration: 2.5,
									repeat: Infinity,
									ease: 'easeInOut',
								},
						  }
				}
				className="relative"
			>
				{/* Arrow/Cursor positioned outside bubble at corner */}
				<div
					className={`absolute ${!isLeft ? 'top-0 left-0 -translate-x-1/2 -translate-y-1/2' : 'top-0 right-0 translate-x-1/2 -translate-y-1/2'} z-20`}
				>
					{isLeft ? (
						<Image src={BlueCursor} alt="Blue Cursor" width={28} height={28} />
					) : (
						<Image src={VioletCursor} alt="Violet Cursor" width={28} height={28} />
					)}
				</div>
				
				{/* Bubble with only text */}
				<div className={`m-2 relative flex items-center justify-center ${!isLeft ? "bg-[#A855F733]" : "bg-[#38BDF833]" } backdrop-blur-md rounded-2xl py-1.5 px-3 border border-white/20 shadow-lg`}>
					<span className={`${!isLeft ? "text-[#A855F7]" : "text-[#38BDF8]" } text-sm font-medium`}>{name}</span>
				</div>
			</motion.div>
		</motion.div>
	)
}
