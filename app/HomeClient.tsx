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
import { BADIE_TESTIMONY, JEREMY_TESTIMONY, MG_TESTIMONY } from "@/assets"

const HLS_URL = "https://dy7x01gt6ljdu.cloudfront.net/videos/intro/intro.m3u8"
let unmutedRef = { current: false }

const testimonials = [
	{
		rating: 5,
		content: "Working with this team on our Shopify website for Woodin.in was an exceptionally positive experience from start to finish. Their professionalism was evident in every interaction; they were incredibly responsive, understood our vision perfectly, and truly felt like an extension of our own team. The communication was clear and consistent, which made the entire process smooth and stress-free. They delivered a high-quality, fully functional e-commerce site exactly when they said they would, allowing us to launch on schedule. I would highly prefer to work with them again on future projects.",
		author: {
			name: "Badie Almualem",
			image: BADIE_TESTIMONY,
			role: "Owner, Woodin.in ",
		}
	},
	{
		rating: 5,
		content: "Build With Stack played a crucial role in helping us scale ConvoGPT from a powerful idea to a functional AI-driven platform. Their deep expertise in automation, AI integrations, and frontend/backend development allowed us to build fast, iterate faster, and deliver a seamless experience to our users. Whether it was designing complex workflows, setting up AI agents, or ensuring rock-solid infrastructure, the team was proactive, responsive, and always solutions-focused. They're not just a dev agency, they're an extension of our core team.",
		author: {
			name: "Jeremy David",
			image: JEREMY_TESTIMONY,
			role: "CEO, ConvoGPT AI ",
		}
	},
	{
		rating: 5,
		content: "Working with Build With Stack has been a total game-changer for Modvertise. We needed a custom-built, scalable solution that could support both our internal ops and client-facing systems and they delivered above and beyond. Their team not only understood our complex workflows but also helped simplify and automate key areas like scheduling, CRM, payment tracking, and reporting. Communication was smooth, timelines were respected, and the product exceeded expectations. If you're looking for a team that treats your project like their own startup, Build With Stack is who you want.",
		author: {
			name: "MG",
			image: MG_TESTIMONY,
			role: "CEO, modvertise.com ",
		}
	},
]

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

export default function HomeClient() {
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