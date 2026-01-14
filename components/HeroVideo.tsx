'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Hls from "hls.js"
import { PauseIcon, ResizeIcon, ResumeIcon, VolumeDownIcon, VolumeUpIcon } from "@/assets"

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [ready, setReady] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(1)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Autoplay with sound (browsers may still block this)
        video.muted = false
        video.volume = 1
        video.playsInline = true

        // ✅ Safari (native HLS)
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = "/video-output/intro.m3u8"

            video.addEventListener("loadedmetadata", () => {
                video.play().then(() => {
                    setIsPlaying(true)
                    setIsMuted(false)
                }).catch(() => {
                    // If autoplay fails, try muted
                    video.muted = true
                    setIsMuted(true)
                    video.play().catch(() => { })
                })
                setReady(true)
            })

            video.addEventListener("play", () => setIsPlaying(true))
            video.addEventListener("pause", () => setIsPlaying(false))
            video.addEventListener("volumechange", () => {
                setIsMuted(video.muted)
                setVolume(video.volume)
            })

            return
        }

        // ✅ Chrome / Edge / Firefox
        if (Hls.isSupported()) {
            const hls = new Hls({
                lowLatencyMode: true,
                backBufferLength: 30,
            })

            hls.loadSource("/video-output/intro.m3u8")
            hls.attachMedia(video)

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().then(() => {
                    setIsPlaying(true)
                    setIsMuted(false)
                }).catch(() => {
                    // If autoplay fails, try muted
                    video.muted = true
                    setIsMuted(true)
                    video.play().catch(() => { })
                })
                setReady(true)
            })

            video.addEventListener("play", () => setIsPlaying(true))
            video.addEventListener("pause", () => setIsPlaying(false))
            video.addEventListener("volumechange", () => {
                setIsMuted(video.muted)
                setVolume(video.volume)
            })

            return () => hls.destroy()
        }

        console.warn("HLS not supported in this browser")
    }, [])

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return

        video.muted = !video.muted
        if (!video.muted) {
            video.volume = volume || 0.5
        }
    }

    const toggleFullscreen = () => {
        const video = videoRef.current
        if (!video) return

        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(() => {
                console.warn("Fullscreen not supported")
            })
        } else {
            document.exitFullscreen()
        }
    }

    return (
        <div
            className="relative w-full rounded-lg overflow-hidden bg-black group"
            style={{ aspectRatio: "16 / 9" }}
        >
            {!ready && (
                <img
                    src="/video-output/intro-poster.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            <video
                ref={videoRef}
                loop
                preload="metadata"
                poster="/video-output/intro-poster.jpg"
                className="w-full h-full object-cover"
            />

            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                        {/* Play/Pause Button */}
                        <button
                            onClick={togglePlay}
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
                            onClick={toggleMute}
                            className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted || volume === 0 ? (
                                <Image src={VolumeDownIcon} alt="Muted" width={32} height={32} className="w-6 h-6" />
                            ) : (
                                <Image src={VolumeUpIcon} alt="Unmuted" width={32} height={32} className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Fullscreen Button - Extreme Right */}
                    <button
                        onClick={toggleFullscreen}
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
