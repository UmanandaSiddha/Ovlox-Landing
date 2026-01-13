'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface HeroContentProps {
	children: React.ReactNode
}

export default function HeroContent({ children }: HeroContentProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const [scale, setScale] = useState(1)

	useEffect(() => {
		const updateScale = () => {
			if (!containerRef.current || !contentRef.current) return

			const viewportHeight = window.innerHeight
			const viewportWidth = window.innerWidth
			const contentHeight = contentRef.current.scrollHeight

			// If content is taller than viewport, scale it down
			// Also consider width - if screen is very wide, scale down more
			const heightRatio = viewportHeight / (contentHeight + 200) // Add padding
			const widthRatio = viewportWidth > 1920 ? Math.min(1, 1920 / viewportWidth) : 1

			// Use the smaller ratio to ensure content fits
			const newScale = Math.min(1, heightRatio * widthRatio * 0.95) // 0.95 for safety margin

			setScale(newScale)
		}

		// Initial calculation
		updateScale()

		// Throttle resize events for performance
		let timeoutId: NodeJS.Timeout
		const handleResize = () => {
			clearTimeout(timeoutId)
			timeoutId = setTimeout(updateScale, 100)
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('orientationchange', updateScale)

		// Use ResizeObserver for more accurate measurements if available
		let resizeObserver: ResizeObserver | null = null
		if (typeof ResizeObserver !== 'undefined') {
			resizeObserver = new ResizeObserver(updateScale)
			if (containerRef.current) {
				resizeObserver.observe(containerRef.current)
			}
			if (contentRef.current) {
				resizeObserver.observe(contentRef.current)
			}
		}

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('orientationchange', updateScale)
			if (resizeObserver) {
				resizeObserver.disconnect()
			}
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className="relative w-full flex items-center justify-center"
		>
			<motion.div
				ref={contentRef}
				style={{
					scale,
					transformOrigin: 'center center',
				}}
				className="w-full flex items-center justify-center"
			>
				{children}
			</motion.div>
		</div>
	)
}
