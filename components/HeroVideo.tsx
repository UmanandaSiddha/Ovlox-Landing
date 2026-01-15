'use client'

import { useEffect, useRef, useState, forwardRef } from "react"
import Image from "next/image"
import { PauseIcon, ResizeIcon, ResumeIcon, VolumeDownIcon, VolumeUpIcon } from "@/assets"

interface HeroVideoProps {
    videoRef: React.RefObject<HTMLVideoElement | null>
    isPlaying: boolean
    setIsPlaying: (playing: boolean) => void
    isMuted: boolean
    setIsMuted: (muted: boolean) => void
    volume: number
    setVolume: (volume: number) => void
}

export default function HeroVideo({
    videoRef,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    volume,
    setVolume,
}: HeroVideoProps) {
    const [showControls, setShowControls] = useState(false)
    const [actualMuted, setActualMuted] = useState(true)
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isMobileRef = useRef(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            isMobileRef.current = window.innerWidth < 768
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Update actual muted state from video element
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const updateMutedState = () => {
            setActualMuted(video.muted)
        }

        updateMutedState()
        video.addEventListener('volumechange', updateMutedState)

        return () => {
            video.removeEventListener('volumechange', updateMutedState)
        }
    }, [videoRef])

    // Draw video frame to canvas continuously
    useEffect(() => {
        const video = videoRef.current
        const canvas = containerRef.current?.querySelector('canvas') as HTMLCanvasElement

        if (!video || !canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size to match container
        const updateCanvasSize = () => {
            canvas.width = containerRef.current?.offsetWidth || 320
            canvas.height = containerRef.current?.offsetHeight || 180
        }
        updateCanvasSize()

        // Draw video frame to canvas continuously
        let animationId: number
        const drawFrame = () => {
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            }
            animationId = requestAnimationFrame(drawFrame)
        }
        drawFrame()

        window.addEventListener('resize', updateCanvasSize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', updateCanvasSize)
        }
    }, [videoRef])

    // Mobile: Auto-play when ProjectProgressSection scrolls into view
    useEffect(() => {
        if (!isMobileRef.current) return

        const videoSection = document.getElementById('video-section')
        if (!videoSection) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Section is in view - try to play video
                        const video = videoRef.current
                        if (video && video.paused) {
                            video.play().catch(() => {
                                // Autoplay blocked, will be triggered by user interaction
                            })
                        }
                    }
                })
            },
            { threshold: 0.5 }
        )

        observer.observe(videoSection)

        return () => {
            if (videoSection) {
                observer.unobserve(videoSection)
            }
        }
    }, [videoRef])

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPlaying(true)
        } else {
            video.pause()
            setIsPlaying(false)
        }
    }

    const handleContainerClick = () => {
        if (isMobileRef.current) {
            // On mobile, show controls and hide after 3 seconds
            setShowControls(true)
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current)
            }
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false)
            }, 3000)
        } else {
            // On desktop, toggle play/pause
            togglePlay()
        }
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return

        const newMutedState = !video.muted
        video.muted = newMutedState
        setIsMuted(newMutedState)
        if (!newMutedState) {
            video.volume = volume || 0.5
            setVolume(video.volume)
        }
    }

    const toggleFullscreen = () => {
        const container = containerRef.current
        if (!container) return

        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(() => {
                console.warn("Fullscreen not supported")
            })
        } else {
            document.exitFullscreen()
        }
    }

    const handleMouseEnter = () => {
        if (!isMobileRef.current) {
            setShowControls(true)
            // Clear any timeout that might hide controls
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current)
                controlsTimeoutRef.current = null
            }
        }
    }

    const handleMouseLeave = () => {
        if (!isMobileRef.current) {
            setShowControls(false)
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full rounded-lg overflow-hidden bg-black"
            style={{ aspectRatio: "16 / 9" }}
            onClick={handleContainerClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Poster image fallback - shown behind canvas */}
            <img
                src="https://dy7x01gt6ljdu.cloudfront.net/videos/intro/intro-poster.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Display video frame using canvas to avoid moving DOM element */}
            <canvas
                className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block'
                }}
            />

            {/* Custom Controls */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 pointer-events-none z-20 ${showControls ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="flex items-center justify-between pointer-events-auto">
                    <div className="flex items-center gap-4 sm:gap-6">
                        {/* Play/Pause Button */}
                        <button
                            onClick={(event) => {
                                event.stopPropagation()
                                togglePlay()
                            }}
                            className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <Image src={ResumeIcon} alt="Play" width={32} height={32} className="w-6 h-6" />
                            ) : (
                                <Image src={PauseIcon} alt="Pause" width={32} height={32} className="w-6 h-6" />
                            )}
                        </button>

                        {/* Mute/Unmute Button */}
                        <button
                            onClick={(event) => {
                                event.stopPropagation()
                                toggleMute()
                            }}
                            className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label={actualMuted || isMuted || volume === 0 ? "Unmute" : "Mute"}
                        >
                            {(actualMuted || isMuted || volume === 0) ? (
                                <Image src={VolumeDownIcon} alt="Muted" width={32} height={32} className="w-6 h-6" />
                            ) : (
                                <Image src={VolumeUpIcon} alt="Unmuted" width={32} height={32} className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Fullscreen Button - Extreme Right */}
                    <button
                        onClick={(event) => {
                            event.stopPropagation()
                            toggleFullscreen()
                        }}
                        className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label="Fullscreen"
                    >
                        <Image src={ResizeIcon} alt="Fullscreen" width={32} height={32} className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}
