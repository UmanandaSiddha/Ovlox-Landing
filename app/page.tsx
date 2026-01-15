'use client'

import { useRef, useState, useEffect } from "react"
import Hls from "hls.js"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProjectProgressSection from "@/components/ProjectProgressSection"
import EverythingYouNeedSection from "@/components/EverythingYouNeedSection"
import ConnectToolsSection from "@/components/ConnectToolsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import WaitlistSection from "@/components/WaitlistSection"
import Footer from "@/components/Footer"
import StickyVideoController from "@/components/StickyVideoController"

const HLS_URL = "https://dy7x01gt6ljdu.cloudfront.net/videos/intro/intro.m3u8"
let unmutedRef = { current: false }

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

export const metadata = {
	title: "Product & Team Visibility Without the Noise",
	description:
		"Ovlox provides founders and product leaders with clear, human-readable summaries of development activity and team discussions across GitHub, Jira, Slack, and Discord.",
}

// Section wrapper component with scroll animation
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-120px" })
	const shouldReduceMotion = useReducedMotion()

	const customVariants = {
		hidden: { opacity: 0, y: 25 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.16, 1, 0.3, 1] as const, // Custom easing for smooth, natural motion
				delay: delay,
			},
		},
	}

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={shouldReduceMotion ? {} : customVariants}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export default function Home() {
	// Single shared video ref and state
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(true)
	const [volume, setVolume] = useState(1)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	// Initialize HLS on video element
	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		// Setup video element
		video.muted = true
		video.volume = 1
		video.playsInline = true

		// ✅ Safari (native HLS)
		if (video.canPlayType("application/vnd.apple.mpegurl")) {
			video.src = HLS_URL

			const handleLoadedMetadata = () => {
				video.play().then(() => {
					setIsPlaying(true)
					setIsMuted(false)
				}).catch(() => {
					// If autoplay with sound fails, try muted (browser policy)
					video.muted = true
					setIsMuted(true)
					video.play().then(() => {
						setIsPlaying(true)
						// Try to unmute after delay
						setTimeout(() => {
							if (!unmutedRef.current) {
								video.muted = false
								setIsMuted(false)
								unmutedRef.current = true
							}
						}, 1000)
					}).catch(() => {
						setIsPlaying(false)
					})
				})
			}

			const handlePlay = () => setIsPlaying(true)
			const handlePause = () => setIsPlaying(false)
			const handleTimeUpdate = () => setCurrentTime(video.currentTime)
			const handleDurationChange = () => setDuration(video.duration)
			const handleVolumeChange = () => {
				setIsMuted(video.muted)
				setVolume(video.volume)
			}

			video.addEventListener("loadedmetadata", handleLoadedMetadata)
			video.addEventListener("play", handlePlay)
			video.addEventListener("pause", handlePause)
			video.addEventListener("timeupdate", handleTimeUpdate)
			video.addEventListener("durationchange", handleDurationChange)
			video.addEventListener("volumechange", handleVolumeChange)

			return () => {
				video.removeEventListener("loadedmetadata", handleLoadedMetadata)
				video.removeEventListener("play", handlePlay)
				video.removeEventListener("pause", handlePause)
				video.removeEventListener("timeupdate", handleTimeUpdate)
				video.removeEventListener("durationchange", handleDurationChange)
				video.removeEventListener("volumechange", handleVolumeChange)
			}
		}

		// ✅ Chrome / Edge / Firefox
		if (Hls.isSupported()) {
			const hls = new Hls({
				lowLatencyMode: true,
				backBufferLength: 30,
			})

			hls.loadSource(HLS_URL)
			hls.attachMedia(video)

			const handleManifestParsed = () => {
				video.play().then(() => {
					setIsPlaying(true)
					setIsMuted(false)
				}).catch(() => {
					// If autoplay with sound fails, try muted (browser policy)
					video.muted = true
					setIsMuted(true)
					video.play().then(() => {
						setIsPlaying(true)
						// Try to unmute after delay
						setTimeout(() => {
							if (!unmutedRef.current) {
								video.muted = false
								setIsMuted(false)
								unmutedRef.current = true
							}
						}, 1000)
					}).catch(() => {
						setIsPlaying(false)
					})
				})
			}

			hls.on(Hls.Events.MANIFEST_PARSED, handleManifestParsed)

			const handlePlay = () => setIsPlaying(true)
			const handlePause = () => setIsPlaying(false)
			const handleTimeUpdate = () => setCurrentTime(video.currentTime)
			const handleDurationChange = () => setDuration(video.duration)
			const handleVolumeChange = () => {
				setIsMuted(video.muted)
				setVolume(video.volume)
			}

			video.addEventListener("play", handlePlay)
			video.addEventListener("pause", handlePause)
			video.addEventListener("timeupdate", handleTimeUpdate)
			video.addEventListener("durationchange", handleDurationChange)
			video.addEventListener("volumechange", handleVolumeChange)

			return () => {
				hls.off(Hls.Events.MANIFEST_PARSED, handleManifestParsed)
				video.removeEventListener("play", handlePlay)
				video.removeEventListener("pause", handlePause)
				video.removeEventListener("timeupdate", handleTimeUpdate)
				video.removeEventListener("durationchange", handleDurationChange)
				video.removeEventListener("volumechange", handleVolumeChange)
				hls.destroy()
			}
		}

		console.warn("HLS not supported in this browser")
	}, [])

	const videoProps = {
		videoRef,
		isPlaying,
		setIsPlaying,
		isMuted,
		setIsMuted,
		volume,
		setVolume,
	}

	return (
		<div className="bg-[#020617] min-h-screen w-full">
			{/* Hidden video element at page root */}
			<video
				ref={videoRef}
				loop
				preload="metadata"
				poster="https://dy7x01gt6ljdu.cloudfront.net/videos/intro/intro-poster.jpg"
				style={{
					position: 'absolute',
					top: '-9999px',
					left: '-9999px',
					width: '1px',
					height: '1px',
					visibility: 'hidden'
				}}
			/>

			<Header />
			<StickyVideoController {...videoProps} />

			{/* Hero Section - No animation, appears immediately */}
			<section id="home">
				<HeroSection />
			</section>

			{/* Animated Sections with subtle staggered delays */}
			<AnimatedSection delay={0.1}>
				<section id="about">
					<ProjectProgressSection {...videoProps} />
				</section>
			</AnimatedSection>

			<AnimatedSection delay={0.15}>
				<section id="features">
					<EverythingYouNeedSection />
				</section>
			</AnimatedSection>

			<AnimatedSection delay={0.1}>
				<ConnectToolsSection />
			</AnimatedSection>

			<AnimatedSection delay={0.15}>
				<TestimonialsSection testimonials={testimonials} />
			</AnimatedSection>

			<AnimatedSection delay={0.1}>
				<section id="contact">
					<WaitlistSection />
				</section>
			</AnimatedSection>

			<AnimatedSection delay={0.05}>
				<Footer />
			</AnimatedSection>
		</div>
	)
}