'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { LeftArrow, QuotesIcon, RightArrow } from "@/assets"
import AnimatedGradient from "@/components/AnimatedGradient"

interface Testimonial {
	id: number
	quote: string
	name: string
	company: string
	avatar: string
}

interface TestimonialsSectionProps {
	testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isMobile, setIsMobile] = useState(false)
	const [isLargeScreen, setIsLargeScreen] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768)
			setIsLargeScreen(window.innerWidth >= 1536) // xl breakpoint (3 items)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	// Mobile: 1 item, Desktop: 2 full + 1 peeking, Large: 3 full + 1 peeking
	const itemsPerView = isMobile ? 1 : isLargeScreen ? 3.5 : 2.5
	const maxIndex = isMobile 
		? Math.max(0, testimonials.length - 1)
		: isLargeScreen
		? Math.max(0, testimonials.length - 3) // Large: can scroll until 3rd to last item
		: Math.max(0, testimonials.length - 2) // Desktop: can scroll until 2nd to last item

	const nextSlide = () => {
		setCurrentIndex((prev) => {
			if (isMobile) {
				if (prev >= maxIndex) return 0
				return prev + 1
			} else {
				if (prev >= maxIndex) return 0
				return prev + 1
			}
		})
	}

	const prevSlide = () => {
		setCurrentIndex((prev) => {
			if (prev <= 0) return maxIndex
			return prev - 1
		})
	}

	const goToSlide = (index: number) => {
		if (isMobile) {
			setCurrentIndex(Math.min(index, maxIndex))
		} else {
			setCurrentIndex(Math.min(index, maxIndex))
		}
	}

	return (
		<section className="relative py-16 sm:py-20 overflow-hidden" id="testimonials-section">
			{/* Animated Gradient Background */}
			<AnimatedGradient />

			{/* 90% width container for content, but carousel extends to 100% */}
			<div className="w-[90%] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<h2
					className="text-center mb-16"
					style={{
						fontFamily: 'var(--font-manrope), sans-serif',
						fontWeight: 600,
						fontSize: 'clamp(32px, 5vw, 48px)',
						lineHeight: '100%',
						letterSpacing: '0%',
						color: '#E5E7EB',
					}}
				>
					Real Progress. Real Stories.
				</h2>

				{/* Content Grid */}
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start lg:items-end relative">
					{/* Left Side - Text and Navigation */}
					<div className="hidden lg:flex flex-col items-start gap-6 w-[20%] flex-shrink-0 relative z-20" style={{ maxWidth: 'calc(70vw - 5vw)' }}>
						<Image src={QuotesIcon} alt="Quotes" width={96} height={96} />

						{/* Text */}
						<h3
							className="text-left"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 500,
								fontSize: '32px',
								lineHeight: '36px',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							What our customers are saying
						</h3>

						{/* Navigation Controls */}
						<div className="mt-8 flex items-center gap-3">
							<button
								onClick={prevSlide}
								disabled={currentIndex === 0}
								className="p-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
								aria-label="Previous testimonial"
							>
								<LeftArrow color={currentIndex === 0 ? "#353845" : "#E5E7EB"} />
							</button>

							<div className="flex items-center rounded-full">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className={`h-0.5 transition-all ${index === currentIndex ? 'w-8 bg-white' : 'w-8 bg-white/30'
											}`}
										aria-label={`Go to testimonial ${index + 1}`}
									/>
								))}
							</div>

							<button
								onClick={nextSlide}
								disabled={currentIndex >= maxIndex}
								className="p-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
								aria-label="Next testimonial"
							>
								<RightArrow color={currentIndex >= maxIndex ? "#353845" : "#E5E7EB"} />
							</button>
						</div>
					</div>

					{/* Right Side - Carousel - starts after left side, extends to 100% on right */}
					<div 
						className="hidden lg:block flex-1 absolute overflow-visible"
						style={{ 
							// Container is 90% width, centered (5vw margin each side)
							// Left side is 20% of container = 18vw
							// Left side ends at: 5vw (container start) + 18vw (left side width) = 23vw
							left: '23vw', // Start after left side ends
							right: 0, // Extend to 100% (edge of screen)
							width: '77vw', // 100vw - 23vw = 77vw
							bottom: 0, // Align to bottom of parent flex container
							top: 'auto'
						}}
					>
						<div className="w-full overflow-visible relative pl-4" style={{ height: 'auto' }}>
						<motion.div
							className="flex gap-6"
							animate={{
								x: isMobile
									? `-${currentIndex * 100}%`
									: currentIndex === 0 ? '0px' : `-${currentIndex * 422}px` // Desktop: start at 0, then move by item width
							}}
							transition={{
								type: "tween",
								ease: [0.25, 0.1, 0.25, 1],
								duration: 0.6
							}}
							style={{
								width: isMobile
									? `${testimonials.length * 100}%`
									: `${testimonials.length * 422}px` // Desktop: total width (398px card + 24px gap per item)
							}}
						>
							{testimonials.map((testimonial, index) => (
								<div
									key={testimonial.id}
									className="flex-shrink-0 flex justify-center"
									style={{
										width: isMobile ? '100%' : isLargeScreen ? '422px' : '422px', // Same width for all desktop sizes
									}}
								>
									<div
										className="rounded-2xl p-5 flex flex-col gap-2.5 relative overflow-hidden w-full"
										style={{
											maxWidth: 398,
											height: 224,
											borderRadius: 16,
											border: '0.1px solid rgb(45, 82, 97)',
											background: 'linear-gradient(to bottom, #02061700 0%, #38BDF81A 100%)',
											boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
										}}
									>
										{/* Stars */}
										<div className="flex gap-1.5 mb-4">
											{[...Array(5)].map((_, i) => (
												<svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#38BDF8" />
												</svg>
											))}
										</div>

										{/* Quote */}
										<p
											className="mb-5 flex-1 overflow-hidden"
											style={{
												fontFamily: 'var(--font-source-sans-3), sans-serif',
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '160%',
												letterSpacing: '0%',
												color: '#E5E7EB',
												display: '-webkit-box',
												WebkitLineClamp: 7,
												WebkitBoxOrient: 'vertical',
												textOverflow: 'ellipsis',
												overflow: 'hidden',
											}}
										>
											{testimonial.quote}
										</p>

										{/* Author */}
										<div className="flex items-center gap-4 mt-auto pt-2">
											<div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0 ring-1 ring-white/10">
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													width={40}
													height={40}
													className="w-full h-full object-cover"
												/>
											</div>
											<div>
												<p
													className="mb-1"
													style={{
														fontFamily: 'var(--font-manrope), sans-serif',
														fontWeight: 600,
														fontSize: '14px',
														lineHeight: '140%',
														letterSpacing: '0%',
														color: '#E5E7EB',
													}}
												>
													{testimonial.name}
												</p>
												<p
													style={{
														fontFamily: 'var(--font-source-sans-3), sans-serif',
														fontWeight: 400,
														fontSize: '13px',
														lineHeight: '140%',
														letterSpacing: '0%',
														color: '#9CA3AF',
													}}
												>
													{testimonial.company}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
							</motion.div>
						</div>
					</div>

					{/* Mobile Carousel - full width */}
					<div className="w-full lg:hidden overflow-hidden relative">
						<motion.div
							className="flex gap-6"
							animate={{
								x: `-${currentIndex * 100}%`
							}}
							transition={{
								type: "tween",
								ease: [0.25, 0.1, 0.25, 1],
								duration: 0.6
							}}
							style={{
								width: `${testimonials.length * 100}%`
							}}
						>
							{testimonials.map((testimonial, index) => (
								<div
									key={testimonial.id}
									className="flex-shrink-0 flex justify-center"
									style={{
										width: '100%',
									}}
								>
									<div
										className="rounded-2xl p-5 flex flex-col gap-2.5 relative overflow-hidden w-full"
										style={{
											maxWidth: 398,
											height: 224,
											borderRadius: 16,
											border: '0.1px solid rgb(45, 82, 97)',
											background: 'linear-gradient(to bottom, #02061700 0%, #38BDF81A 100%)',
											boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
										}}
									>
										{/* Stars */}
										<div className="flex gap-1.5 mb-4">
											{[...Array(5)].map((_, i) => (
												<svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#38BDF8" />
												</svg>
											))}
										</div>

										{/* Quote */}
										<p
											className="mb-5 flex-1 overflow-hidden"
											style={{
												fontFamily: 'var(--font-source-sans-3), sans-serif',
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '160%',
												letterSpacing: '0%',
												color: '#E5E7EB',
												display: '-webkit-box',
												WebkitLineClamp: 7,
												WebkitBoxOrient: 'vertical',
												textOverflow: 'ellipsis',
												overflow: 'hidden',
											}}
										>
											{testimonial.quote}
										</p>

										{/* Author */}
										<div className="flex items-center gap-4 mt-auto pt-2">
											<div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0 ring-1 ring-white/10">
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													width={40}
													height={40}
													className="w-full h-full object-cover"
												/>
											</div>
											<div>
												<p
													className="mb-1"
													style={{
														fontFamily: 'var(--font-manrope), sans-serif',
														fontWeight: 600,
														fontSize: '14px',
														lineHeight: '140%',
														letterSpacing: '0%',
														color: '#E5E7EB',
													}}
												>
													{testimonial.name}
												</p>
												<p
													style={{
														fontFamily: 'var(--font-source-sans-3), sans-serif',
														fontWeight: 400,
														fontSize: '13px',
														lineHeight: '140%',
														letterSpacing: '0%',
														color: '#9CA3AF',
													}}
												>
													{testimonial.company}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>

				{/* Mobile Navigation Below */}
				<div className="flex lg:hidden items-center justify-center gap-4 mt-8">
					<button
						onClick={prevSlide}
						disabled={currentIndex === 0}
						className="p-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
						aria-label="Previous testimonial"
					>
						<LeftArrow color={currentIndex === 0 ? "#353845" : "#E5E7EB"} />
					</button>

					<div className="flex items-center rounded-full">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`h-0.5 transition-all ${index === currentIndex ? 'w-8 bg-white' : 'w-8 bg-white/30'
									}`}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>

					<button
						onClick={nextSlide}
						disabled={currentIndex >= maxIndex}
						className="p-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
						aria-label="Next testimonial"
					>
						<RightArrow color={currentIndex >= maxIndex ? "#353845" : "#E5E7EB"} />
					</button>
				</div>
			</div>
		</section>
	)
}
