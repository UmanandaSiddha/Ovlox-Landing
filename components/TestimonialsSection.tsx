'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
	const [isTransitioning, setIsTransitioning] = useState(false)
	const carouselRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768)
			setIsLargeScreen(window.innerWidth >= 1536) // xl breakpoint (3 items)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	// Constants
	const CARD_WIDTH = 398 // Card max width
	const GAP = 24 // Gap between items (gap-6 = 24px)
	const ITEM_WIDTH = CARD_WIDTH + GAP // Total width per item including gap
	const itemsPerView = isMobile ? 1 : isLargeScreen ? 3.5 : 2.5

	// Create infinite carousel by duplicating testimonials (3 sets for seamless looping)
	const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]
	const startIndex = testimonials.length // Start at the middle set

	// Auto-slide functionality
	useEffect(() => {
		if (isMobile) return // Disable auto-slide on mobile

		const interval = setInterval(() => {
			setCurrentIndex((prev) => prev + 1)
		}, 5000) // Auto-slide every 5 seconds

		return () => clearInterval(interval)
	}, [isMobile, testimonials.length])

	// Ensure index stays in range when toggling to mobile or resizing
	useEffect(() => {
		if (isMobile) {
			setCurrentIndex((prev) => {
				if (!testimonials.length) return 0
				return ((prev % testimonials.length) + testimonials.length) % testimonials.length
			})
		}
	}, [isMobile, testimonials.length])

	const nextSlide = () => {
		if (isTransitioning) return
		setIsTransitioning(true)
		setCurrentIndex((prev) => prev + 1)
		setTimeout(() => setIsTransitioning(false), 600)
	}

	const prevSlide = () => {
		if (isTransitioning) return
		setIsTransitioning(true)
		setCurrentIndex((prev) => prev - 1)
		setTimeout(() => setIsTransitioning(false), 600)
	}

	const goToSlide = (index: number) => {
		if (isTransitioning) return
		setIsTransitioning(true)
		setCurrentIndex(index)
		setTimeout(() => setIsTransitioning(false), 600)
	}

	// Calculate exact transform position for seamless infinite carousel
	const getTransform = () => {
		// Use modulo to get position within the infinite array
		// This ensures smooth infinite scrolling
		const position = ((currentIndex % testimonials.length) + testimonials.length) % testimonials.length
		const offset = (startIndex + position) * ITEM_WIDTH
		return `-${offset}px`
	}

	// Mobile transform - simple percentage based
	const getMobileTransform = () => {
		if (!testimonials.length) return '0%'
		// Wrap index so it never overshoots; show exactly one card width per step
		const position = ((currentIndex % testimonials.length) + testimonials.length) % testimonials.length
		return `-${(100 / testimonials.length) * position}%`
	}

	return (
		<section className="relative py-16 sm:py-20 overflow-hidden" id="testimonials-section">
			{/* Animated Gradient Background */}
			<AnimatedGradient />

			{/* 90% width container for content, but carousel extends to 100% */}
			<div className="absolute mx-auto relative z-10">
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

				<div className="flex items-center justify-between">

					<div className="hidden lg:flex pl-30 flex-col items-start gap-6 w-[22%] flex-shrink-0 relative z-20" style={{ maxWidth: 'calc(70vw - 5vw)' }}>
						<Image src={QuotesIcon} alt="Quotes" width={96} height={96} />

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

						<div className="mt-8 flex gap-2 justify-between items-center w-full max-w-full overflow-hidden">
							<button
								onClick={prevSlide}
								disabled={currentIndex === 0}
								className="py-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 hover:scale-110 disabled:hover:scale-100"
								aria-label="Previous testimonial"
							>
								<LeftArrow color={currentIndex === 0 ? "#353845" : "#E5E7EB"} />
							</button>

							<div className="flex items-center justify-center">
								{testimonials.map((_, index) => {
									// Calculate the actual index for infinite carousel
									const actualIndex = currentIndex % testimonials.length
									return (
										<button
											key={index}
											onClick={() => goToSlide(index)}
											className={`h-0.5 transition-all flex-shrink-0 ${index === actualIndex ? 'w-8 bg-white' : 'w-5 bg-white/30'
												}`}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									)
								})}
							</div>

							<button
								onClick={nextSlide}
								disabled={isTransitioning}
								className="py-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 hover:scale-110 disabled:hover:scale-100"
								aria-label="Next testimonial"
							>
								<RightArrow color={isTransitioning ? "#353845" : "#E5E7EB"} />
							</button>
						</div>
					</div>

					{/* Desktop Carousel */}
					<div className="hidden lg:block overflow-hidden relative" style={{ width: ITEM_WIDTH * 2 + CARD_WIDTH * 0.6 }}>
						{/* Gradient fade for peeking item */}
						<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
						<div className="w-full overflow-visible relative" style={{ height: 'auto' }}>
							<motion.div
								className="flex gap-6"
								animate={{
									x: getTransform()
								}}
								transition={{
									type: "tween",
									ease: [0.25, 0.1, 0.25, 1],
									duration: 0.6
								}}
								style={{
									width: `${infiniteTestimonials.length * ITEM_WIDTH}px`
								}}
							>
								{infiniteTestimonials.map((testimonial, index) => (
									<div
										key={`testimonial-${index}-${testimonial.id}`}
										className="flex-shrink-0 flex justify-center"
										style={{
											width: `${ITEM_WIDTH}px`, // Exact item width including gap
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
				</div>

				{/* Mobile Carousel - Separate from desktop */}
				<div className="lg:hidden w-full px-4 mt-8">
					<div className="w-full overflow-hidden">
						<motion.div
							className="flex"
							animate={{
								x: getMobileTransform()
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
							{testimonials.map((testimonial) => (
								<div
									key={testimonial.id}
									className="flex-shrink-0 flex justify-center px-2"
									style={{
										width: `${100 / testimonials.length}%`
									}}
								>
									<div
										className="rounded-2xl p-5 flex flex-col gap-2.5 relative overflow-hidden w-full max-w-full"
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
						disabled={isTransitioning}
						className="p-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
						aria-label="Previous testimonial"
					>
						<LeftArrow color={isTransitioning ? "#353845" : "#E5E7EB"} />
					</button>

					<div className="flex items-center rounded-full">
						{testimonials.map((_, index) => {
							const actualIndex = currentIndex % testimonials.length
							return (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`h-0.5 transition-all ${index === actualIndex ? 'w-8 bg-white' : 'w-8 bg-white/30'
										}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							)
						})}
					</div>

					<button
						onClick={nextSlide}
						disabled={isTransitioning}
						className="p-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
						aria-label="Next testimonial"
					>
						<RightArrow color={isTransitioning ? "#353845" : "#E5E7EB"} />
					</button>
				</div>
			</div>
		</section>
	)
}
