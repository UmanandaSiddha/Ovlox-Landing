'use client'

import { AdjustIcon, ControlIcon, DashboardIcon, OvloxLogo, ProgressIcon, QuotesIcon } from "@/assets"
import Image from "next/image"
import HeroTag from "@/components/HeroTag"
import AnimatedGradient from "@/components/AnimatedGradient"
import HeroContent from "@/components/HeroContent"
import HeroGrid from "@/components/HeroGrid"
import FloatingPlatformIcons from "@/components/FloatingPlatformIcons"
import AnimatedDotPattern from "@/components/AnimatedDotPattern"
import { SiGithub, SiJira, SiSlack, SiNotion, SiFigma, SiDiscord, SiGitlab } from "react-icons/si"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
	{ name: 'HOME', href: '#' },
	{ name: 'FEATURES', href: '#' },
	{ name: 'ABOUT', href: '#' },
	{ name: 'CONTACT', href: '#' },
]

const testimonials = [
	{
		id: 1,
		quote: "Before this, I was constantly unsure aboully understood whatg me to learn technical tools. I finally feel confident asking the right questions and making decisions at the right time.",
		name: "Startup Founder",
		company: "Ovlox.dev",
		avatar: "https://i.pravatar.cc/150?img=47"
	},
	{
		id: 2,
		quote: "This platform transformed how I track my team's progress. No more digging through technical jargon - just clear, actionable insights that help me make better decisions faster.",
		name: "Product Manager",
		company: "Tech Startup",
		avatar: "https://i.pravatar.cc/150?img=12"
	},
	{
		id: 3,
		quote: "As a non-technical founder, this tool has been a game-changer. I can finally understand what's happening with my product without needing a computer science degree.",
		name: "CEO",
		company: "Innovation Labs",
		avatar: "https://i.pravatar.cc/150?img=33"
	},
	{
		id: 4,
		quote: "The transparency this tool provides is incredible. I can see exactly what's happening with my projects without having to schedule multiple meetings or decode technical reports.",
		name: "Operations Director",
		company: "ScaleUp Inc",
		avatar: "https://i.pravatar.cc/150?img=45"
	},
	{
		id: 5,
		quote: "Finally, a tool that speaks my language. No more confusion about project status - everything is clear, concise, and actionable. This has saved me countless hours.",
		name: "Business Owner",
		company: "Growth Ventures",
		avatar: "https://i.pravatar.cc/150?img=20"
	},
	{
		id: 6,
		quote: "This platform bridges the gap between technical teams and business stakeholders perfectly. I can now participate in meaningful discussions about our product development without feeling lost.",
		name: "Marketing Lead",
		company: "Digital Solutions",
		avatar: "https://i.pravatar.cc/150?img=15"
	},
]

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const itemsPerView = isMobile ? 1 : 3
	const maxIndex = Math.max(0, testimonials.length - itemsPerView)

	const nextSlide = () => {
		setCurrentIndex((prev) => {
			if (prev >= maxIndex) return 0
			return prev + 1
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
			setCurrentIndex(Math.min(index, testimonials.length - 1))
		} else {
			setCurrentIndex(Math.min(index, maxIndex))
		}
	}


	return (
		<div className="bg-[#020617] min-h-screen">
			<header className="absolute inset-x-0 top-0 z-50 w-full">
				<div className="w-[90%] mx-auto">
					<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
						<div className="flex lg:flex-1">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<Image
									alt=""
									src={OvloxLogo}
									className="h-8 w-auto"
								/>
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
							>
								<span className="sr-only">Open main menu</span>
								<p>Open main menu</p>
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="nav-link"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '100%',
										letterSpacing: '0%',
										color: '#E5E7EB',
									}}
								>
									{item.name}
								</a>
							))}
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<a href="#" className="text-sm/6 font-semibold text-white border border-[#60CAF9] px-4 py-1.5 rounded-full hover:bg-[#60CAF9]/10 transition-colors">
								Start Free Trial
							</a>
						</div>
					</nav>
				</div>
			</header>

			{/* Hero Section - Full Width for Backgrounds */}
			<section
				data-hero-section
				className="relative min-h-screen flex items-center justify-center overflow-hidden"
			>
				{/* Full Width Backgrounds and Overlays */}
				{/* Animated Gradient Background */}
				<AnimatedGradient />

				{/* Animated Dot Pattern */}
				<AnimatedDotPattern />

				{/* Subtle Grid Pattern */}
				<HeroGrid />

				{/* Floating Platform Icons */}
				<FloatingPlatformIcons />

				{/* 90% width container for content */}
				<div className="w-[90%] mx-auto relative z-10">
					{/* Hero Tags */}
					<div className="absolute inset-0 pointer-events-none">
						<HeroTag name="Roger" position="left" />
						<HeroTag name="Rad" position="right" />
					</div>

					{/* Hero Content */}
					<HeroContent>
						<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible' }}>
							<div className="text-center" style={{ overflow: 'visible' }}>
								{/* Two-line Heading */}
								<h1
									className="text-center relative"
									style={{
										overflow: 'visible',
										paddingBottom: '4px',
										filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 0.15))',
									}}
								>
									<span
										className="block hero-heading-white mx-auto"
										style={{
											fontFamily: 'var(--font-manrope), sans-serif',
											fontWeight: 400,
											lineHeight: '100%',
											letterSpacing: '0%',
											color: '#E5E7EB',
											whiteSpace: 'nowrap',
											overflow: 'visible',
											// paddingBottom: '2px', // Prevent letter cutoff
										}}
									>
										Understand your website's progress
									</span>
									<span
										className="block hero-heading-blue mx-auto"
										style={{
											fontFamily: 'var(--font-manrope), sans-serif',
											fontWeight: 700,
											lineHeight: '100%',
											letterSpacing: '0%',
											background: 'linear-gradient(to right, #38BDF8, #60CAF9)',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											backgroundClip: 'text',
											overflow: 'visible',
											paddingBottom: '12px', // Prevent letter cutoff for descenders like 'g'
											marginBottom: '8px', // Extra space for descenders
										}}
									>
										without reading code
									</span>
								</h1>

								{/* Subtext */}
								<p
									className="mt-6 max-w-xl mx-auto text-center"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '20px',
										lineHeight: '100%',
										letterSpacing: '0%',
										color: '#676A74',
									}}
								>
									Track updates from GitHub, Jira, Slack, and more<br />
									summarized clearly for <span style={{ fontStyle: 'italic', color: '#E5E7EB' }}>founders</span>
								</p>

								{/* Buttons */}
								<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
									<a
										href="#"
										className="w-full sm:w-auto rounded-full px-6 py-3 text-md font-semibold text-black shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-colors"
										style={{ background: 'linear-gradient(to right, #38BDF8, #60CAF9)' }}
									>
										See it in Action
									</a>
									<a
										href="#"
										className="w-full sm:w-auto rounded-full border-2 border-[#60CAF9] px-6 py-3 text-md font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60CAF9] transition-colors"
									>
										Book a Demo
									</a>
								</div>
							</div>
						</div>
					</HeroContent>
				</div>
			</section>

			{/* 90% width container */}
			<div className="w-[90%] mx-auto">
				{/* Next Section - See your Project's Progress */}
				<section className="relative py-20 sm:py-32">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
							See your Project's Progress
						</h2>

						{/* Subtext in 2 lines */}
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
							Get a clear, real-time view of what's being worked on across your development tools,<br />
							translated into simple updates you can understand without technical knowledge
						</p>

						{/* Video */}
						<div className="mb-16 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/dQw4w9WgXcQ"
								title="Demo Video"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="w-full h-full"
							/>
						</div>

						{/* Three Feature Cards */}
						<div className="flex flex-col md:flex-row gap-8 md:gap-0">
							{/* Connect your Tools */}
							<div className="text-center md:text-left rounded-xl p-6 border border-[#60CAF9]">
								<h3
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 700,
										fontSize: '32px',
										lineHeight: '36px',
										letterSpacing: '0%',
										color: '#E5E7EB',
									}}
								>
									Connect your Tools
								</h3>
								<p
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '140%',
										letterSpacing: '0%',
										color: '#676A74',
									}}
								>
									Link the tools your team already uses, like GitHub, Jira, and Slack, in just a few clicks.
								</p>
							</div>

							{/* Vertical Line Separator */}
							<div className="hidden md:block w-px bg-white/20 mx-8" />

							{/* Track Real Work */}
							<div className="text-center md:text-left rounded-xl p-6">
								<h3
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 700,
										fontSize: '32px',
										lineHeight: '36px',
										letterSpacing: '0%',
										color: '#E5E7EB',
									}}
								>
									Track Real Work
								</h3>
								<p
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '140%',
										letterSpacing: '0%',
										color: '#676A74',
									}}
								>
									See what developers are actually working on, based on live updates from your connected tools..
								</p>
							</div>

							{/* Vertical Line Separator */}
							<div className="hidden md:block w-px bg-white/20 mx-8" />

							{/* Understand the Progress */}
							<div className="text-center md:text-left rounded-xl p-6">
								<h3
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 700,
										fontSize: '32px',
										lineHeight: '36px',
										letterSpacing: '0%',
										color: '#E5E7EB',
									}}
								>
									Understand the Progress
								</h3>
								<p
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '140%',
										letterSpacing: '0%',
										color: '#676A74',
									}}
								>
									Get clear, human-readable updates that show how your project is moving forward.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Everything you need section */}
				<section className="relative py-20 sm:py-32">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
							Everything you need. Nothing you don't.
						</h2>

						{/* Subtitle */}
						<p
							className="text-center max-w-3xl mx-auto mb-16"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								fontSize: '20px',
								lineHeight: '140%',
								letterSpacing: '0%',
								color: '#676A74',
							}}
						>
							All the essential tools to stay in control, track progress clearly, and move at your own pace <span style={{ fontStyle: 'italic' }}>without complexity or clutter</span>
						</p>

						{/* Feature Boxes - 2x2 Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Stay in Control */}
							<div className="bg-[#0F172A] border border-[#60CAF9] rounded-2xl p-6">
								<div className="flex flex-col items-start gap-4">
									<Image src={ControlIcon} alt="Control" width={42} height={42} />
									<div>
										<h3
											className="mb-3"
											style={{
												fontFamily: 'var(--font-manrope), sans-serif',
												fontWeight: 700,
												fontSize: '24px',
												lineHeight: '120%',
												letterSpacing: '0%',
												color: '#E5E7EB',
											}}
										>
											Stay in Control
										</h3>
										<p
											style={{
												fontFamily: 'var(--font-source-sans-3), sans-serif',
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0%',
												color: '#676A74',
											}}
										>
											You decide what happens, when it happens, and how much you want to see — no forced workflows.
										</p>
									</div>
								</div>
							</div>

							{/* See Progress Clearly */}
							<div className="bg-[#0F172A] border border-[#60CAF9] rounded-2xl p-6">
								<div className="flex flex-col items-start gap-4">
									<Image src={ProgressIcon} alt="Progress" width={42} height={42} />
									<div>
										<h3
											className="mb-3"
											style={{
												fontFamily: 'var(--font-manrope), sans-serif',
												fontWeight: 700,
												fontSize: '24px',
												lineHeight: '120%',
												letterSpacing: '0%',
												color: '#E5E7EB',
											}}
										>
											See Progress Clearly
										</h3>
										<p
											style={{
												fontFamily: 'var(--font-source-sans-3), sans-serif',
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0%',
												color: '#676A74',
											}}
										>
											Simple visuals and updates that show exactly where you are, without overwhelming data.
										</p>
									</div>
								</div>
							</div>

							{/* Adjust Anytime */}
							<div className="bg-[#0F172A] border border-[#60CAF9] rounded-2xl p-6">
								<div className="flex flex-col items-start gap-4">
									<Image src={AdjustIcon} alt="Adjust" width={42} height={42} />
									<div>
										<h3
											className="mb-3"
											style={{
												fontFamily: 'var(--font-manrope), sans-serif',
												fontWeight: 700,
												fontSize: '24px',
												lineHeight: '120%',
												letterSpacing: '0%',
												color: '#E5E7EB',
											}}
										>
											Adjust Anytime
										</h3>
										<p
											style={{
												fontFamily: 'var(--font-source-sans-3), sans-serif',
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0%',
												color: '#676A74',
											}}
										>
											Change steps, revisit decisions, or move forward when you're ready — nothing is locked in.
										</p>
									</div>
								</div>
							</div>

							{/* One Clean Dashboard */}
							<div className="bg-[#0F172A] border border-[#60CAF9] rounded-2xl p-6">
								<div className="flex flex-col items-start gap-4">
									<Image src={DashboardIcon} alt="Dashboard" width={42} height={42} />
									<div>
										<h3
											className="mb-3"
											style={{
												fontFamily: 'var(--font-manrope), sans-serif',
												fontWeight: 700,
												fontSize: '24px',
												lineHeight: '120%',
												letterSpacing: '0%',
												color: '#E5E7EB',
											}}
										>
											One Clean Dashboard
										</h3>
										<p
											style={{
												fontFamily: 'var(--font-source-sans-3), sans-serif',
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '140%',
												letterSpacing: '0%',
												color: '#676A74',
											}}
										>
											Everything important in one place, so you spend less time navigating and more time doing.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Connect your existing tools section */}
				<section className="relative py-20 sm:py-32">
					<div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
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
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiGitlab size={48} color="white" />
							</div>

							{/* Figma */}
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiFigma size={48} color="white" />
							</div>

							{/* Slack */}
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiSlack size={48} color="white" />
							</div>

							{/* GitHub */}
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiGithub size={48} color="white" />
							</div>

							{/* Jira */}
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiJira size={48} color="white" />
							</div>

							{/* Discord */}
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiDiscord size={48} color="white" />
							</div>

							{/* Notion */}
							<div className="flex items-center justify-center w-24 h-12 opacity-60 hover:opacity-100 transition-opacity">
								<SiNotion size={48} color="white" />
							</div>
						</div>
					</div>
				</section>

				{/* Real Progress. Real Stories. Testimonials Section */}
				<section className="relative py-20 sm:py-32">
					<div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
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
						<div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
							{/* Left Side - Text and Navigation */}
							<div className="flex flex-col items-start gap-4">

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
								<div className="flex items-center gap-3">
									<button
										onClick={prevSlide}
										disabled={currentIndex === 0}
										className="text-white hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
										aria-label="Previous testimonial"
									>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>

									{/* Progress Line */}
									<div className="relative w-48 h-2.5 bg-gray-700 rounded-full overflow-hidden">
										<div
											className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300"
											style={{
												width: testimonials.length > itemsPerView
													? `${Math.min(((currentIndex + itemsPerView) / testimonials.length) * 100, 100)}%`
													: '100%',
												minWidth: '12px'
											}}
										/>
									</div>

									<button
										onClick={nextSlide}
										disabled={currentIndex >= maxIndex}
										className="text-white hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
										aria-label="Next testimonial"
									>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</div>
							</div>

							{/* Right Side - Carousel */}
							<div className="w-full md:w-2/3 overflow-hidden relative">
								<motion.div
									className="flex"
									animate={{
										x: isMobile
											? `-${currentIndex * 100}%`
											: `-${currentIndex * (100 / itemsPerView)}%`
									}}
									transition={{
										type: "tween",
										ease: [0.25, 0.1, 0.25, 1],
										duration: 0.6
									}}
									style={{
										width: isMobile
											? `${testimonials.length * 100}%`
											: `${(testimonials.length / itemsPerView) * 100}%`
									}}
								>
									{testimonials.map((testimonial, index) => (
										<div
											key={testimonial.id}
											className="flex-shrink-0"
											style={{
												width: isMobile
													? `${100 / testimonials.length}%`
													: `${100 / itemsPerView}%`,
												paddingRight: index < testimonials.length - 1 ? '1.5rem' : '0'
											}}
										>
											<div
												className="rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
												style={{
													// height: '280px',
													background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
													border: '1px solid rgba(56, 189, 248, 0.2)',
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
								className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
								aria-label="Previous testimonial"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 14L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>

							<div className="flex items-center gap-2">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className={`h-1 transition-all ${index === currentIndex ? 'w-8 bg-white' : 'w-1 bg-white/30'
											}`}
										aria-label={`Go to testimonial ${index + 1}`}
									/>
								))}
							</div>

							<button
								onClick={nextSlide}
								disabled={currentIndex >= testimonials.length - 1}
								className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
								aria-label="Next testimonial"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 6L12 10L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}