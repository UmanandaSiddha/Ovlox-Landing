'use client'

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroVideo from "./HeroVideo"

export default function StickyVideoController() {
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
    const [isDismissed, setIsDismissed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const videoRef = useRef<HTMLDivElement>(null)
    const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0)
    const scrollDir = useRef<'down' | 'up'>('down')
    const syncIntervalRef = useRef<NodeJS.Timeout | null>(null)

    // Sticky video dimensions (bottom-right corner)
    const stickyWidth = 320
    const stickyHeight = 180
    const stickyBottom = 24
    const stickyRight = 24

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const updateTargetRect = () => {
            const videoSection = document.getElementById('video-section')
            if (videoSection) {
                setTargetRect(videoSection.getBoundingClientRect())
            }
            const currentY = window.scrollY
            scrollDir.current = currentY > lastScrollY.current ? 'down' : 'up'
            lastScrollY.current = currentY
        }

        updateTargetRect()
        window.addEventListener('resize', updateTargetRect)
        window.addEventListener('scroll', updateTargetRect)

        return () => {
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('resize', updateTargetRect)
            window.removeEventListener('scroll', updateTargetRect)
        }
    }, [])

    // Calculate scroll-based position and scale
    const getVideoTransform = () => {
        if (!targetRect) {
            const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
            const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1280
            const stickyX = viewportWidth - stickyWidth - stickyRight
            const stickyY = viewportHeight - stickyHeight - stickyBottom
            return { x: stickyX, y: stickyY, width: stickyWidth, height: stickyHeight, scale: 1, isVisible: true, borderRadius: 8 }
        }

        const viewportHeight = window.innerHeight
        const viewportWidth = window.innerWidth

        // Calculate sticky position (bottom-right corner)
        const stickyX = viewportWidth - stickyWidth - stickyRight
        const stickyY = viewportHeight - stickyHeight - stickyBottom

        // Calculate target position (center of video-section)
        const targetX = targetRect.left
        const targetY = targetRect.top
        const targetWidth = targetRect.width
        const targetHeight = targetRect.height

        // Calculate when video section is in view
        const sectionTop = targetRect.top
        const sectionBottom = targetRect.bottom

        // Transition zones (start earlier so section video stays static fully)
        const earlyOffset = 320
        const transitionStart = viewportHeight - earlyOffset // when section starts entering from bottom
        const holdTop = earlyOffset // when top has moved enough inside
        const holdBottom = viewportHeight - earlyOffset // when bottom is still sufficiently inside
        const transitionEnd = -targetHeight + earlyOffset // when section has left towards top

        // Pre-enter: section below viewport → sticky
        if (sectionTop > transitionStart) {
            return { x: stickyX, y: stickyY, width: stickyWidth, height: stickyHeight, scale: 1, isVisible: true, borderRadius: 8 }
        }

        // Post-exit: section above viewport → sticky
        if (sectionBottom < transitionEnd) {
            return { x: stickyX, y: stickyY, width: stickyWidth, height: stickyHeight, scale: 1, isVisible: true, borderRadius: 8 }
        }

        // Hold: section well within viewport → full size at target
        if (sectionTop <= holdTop && sectionBottom >= holdBottom) {
            return { x: targetX, y: targetY, width: targetWidth, height: targetHeight, scale: 1, isVisible: true, borderRadius: 16 }
        }

        // Easing function for smooth parabolic movement
        const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
        const amplitude = 120

        // Entering phase: interpolate from sticky → full
        if (sectionTop > holdTop) {
            const enterProgress = (transitionStart - sectionTop) / (transitionStart - holdTop)
            const p = Math.max(0, Math.min(1, enterProgress))
            const ep = easeInOutCubic(p)
            const x = stickyX + (targetX - stickyX) * ep
            const yLinear = stickyY + (targetY - stickyY) * ep
            const y = yLinear + Math.sin(ep * Math.PI) * (scrollDir.current === 'down' ? -amplitude : amplitude)
            const width = stickyWidth + (targetWidth - stickyWidth) * ep
            const height = stickyHeight + (targetHeight - stickyHeight) * ep
            const borderRadius = 8 + (16 - 8) * ep
            return { x, y, width, height, scale: 1, isVisible: true, borderRadius }
        }

        // Exiting phase: interpolate from full → sticky
        if (sectionBottom < holdBottom) {
            const exitProgress = (holdBottom - sectionBottom) / (holdBottom - transitionEnd)
            const p = Math.max(0, Math.min(1, exitProgress))
            const ep = easeInOutCubic(p)
            const x = targetX + (stickyX - targetX) * ep
            const yLinear = targetY + (stickyY - targetY) * ep
            const y = yLinear + Math.sin(ep * Math.PI) * (scrollDir.current === 'down' ? amplitude : -amplitude)
            const width = targetWidth + (stickyWidth - targetWidth) * ep
            const height = targetHeight + (stickyHeight - targetHeight) * ep
            const borderRadius = 16 + (8 - 16) * ep
            return { x, y, width, height, scale: 1, isVisible: true, borderRadius }
        }

        // Fallback to full size
        return { x: targetX, y: targetY, width: targetWidth, height: targetHeight, scale: 1, isVisible: true, borderRadius: 16 }
    }

    const transform = getVideoTransform()

    // Determine if video should be in sticky mode (small at corner)
    const isInStickyMode = !isMobile && !isDismissed && targetRect && (
        targetRect.top > (typeof window !== 'undefined' ? window.innerHeight : 800) - 320 ||
        targetRect.bottom < 320
    )

    // Sync video states between sticky and section videos
    useEffect(() => {
        const syncVideos = () => {
            const stickyVideo = document.querySelector('#sticky-video video') as HTMLVideoElement
            const sectionVideo = document.querySelector('#video-section-actual video') as HTMLVideoElement

            if (!stickyVideo || !sectionVideo) return

            // Sync section → sticky when sticky is visible
            if (isInStickyMode && !isDismissed) {
                // Sync playback position
                if (Math.abs(stickyVideo.currentTime - sectionVideo.currentTime) > 0.5) {
                    stickyVideo.currentTime = sectionVideo.currentTime
                }
                // Sync play/pause state
                if (!sectionVideo.paused && stickyVideo.paused) {
                    stickyVideo.play().catch(() => { })
                } else if (sectionVideo.paused && !stickyVideo.paused) {
                    stickyVideo.pause()
                }
                // Sync volume and mute
                stickyVideo.volume = sectionVideo.volume
                stickyVideo.muted = sectionVideo.muted
            }
        }

        // Sync continuously while sticky video is active
        if (isInStickyMode && !isDismissed) {
            syncIntervalRef.current = setInterval(syncVideos, 100)
        }

        return () => {
            if (syncIntervalRef.current) {
                clearInterval(syncIntervalRef.current)
            }
        }
    }, [isInStickyMode, isDismissed])

    const handleDismiss = () => {
        setIsDismissed(true)
        // Pause both sticky video and section video when dismissed
        const stickyVideoElement = document.querySelector('#sticky-video video') as HTMLVideoElement
        if (stickyVideoElement) {
            stickyVideoElement.pause()
        }
        const sectionVideoElement = document.querySelector('#video-section-actual video') as HTMLVideoElement
        if (sectionVideoElement) {
            sectionVideoElement.pause()
        }
    }

    // Re-enable sticky when user plays the video in the section
    useEffect(() => {
        if (isDismissed) {
            const videoSection = document.getElementById('video-section-actual')
            if (videoSection) {
                const videoElement = videoSection.querySelector('video') as HTMLVideoElement
                if (videoElement) {
                    const handlePlay = () => {
                        setIsDismissed(false)
                        // Sync the sticky video immediately when re-enabled
                        setTimeout(() => {
                            const stickyVideo = document.querySelector('#sticky-video video') as HTMLVideoElement
                            if (stickyVideo && videoElement) {
                                stickyVideo.currentTime = videoElement.currentTime
                                stickyVideo.volume = videoElement.volume
                                stickyVideo.muted = videoElement.muted
                                if (!videoElement.paused) {
                                    stickyVideo.play().catch(() => { })
                                }
                            }
                        }, 100)
                    }
                    videoElement.addEventListener('play', handlePlay)
                    return () => videoElement.removeEventListener('play', handlePlay)
                }
            }
        }
    }, [isDismissed])

    // Don't render sticky video on mobile or when dismissed
    if (isMobile || isDismissed) {
        return null
    }

    return (
        <AnimatePresence>
            {isInStickyMode && (
                <motion.div
                    id="sticky-video"
                    ref={videoRef}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed z-40 overflow-hidden border-2 border-[#60CAF9] shadow-2xl group"
                    style={{
                        x: transform.x,
                        y: transform.y,
                        width: transform.width,
                        height: transform.height,
                        borderRadius: transform.borderRadius,
                    }}
                    transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 100,
                        mass: 0.5,
                    }}
                >
                    <HeroVideo />

                    {/* Close button - only show when in sticky corner mode */}
                    {(transform.width === 320) && (
                        <button
                            onClick={handleDismiss}
                            className="absolute top-2 right-2 z-50 w-6 h-6 flex items-center justify-center bg-black/60 hover:bg-black/80 rounded-full transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Close video"
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L11 11M1 11L11 1"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
