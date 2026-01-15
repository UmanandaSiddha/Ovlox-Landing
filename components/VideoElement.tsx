'use client'

import { useEffect } from "react"
import Hls from "hls.js"
import { useVideoContext } from "@/contexts/VideoContext"

export default function VideoElement() {
    const { videoRef, setIsPlaying, setIsMuted, setVolume, setCurrentTime, setDuration } = useVideoContext()
    const HLS_URL = "https://dy7x01gt6ljdu.cloudfront.net/videos/intro/intro.m3u8"
    let unmutedRef = { current: false }

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Autoplay with sound (browsers may still block this)
        video.muted = false
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
    }, [setIsPlaying, setIsMuted, setVolume, setCurrentTime, setDuration])

    return (
        <video
            ref={videoRef}
            loop
            preload="metadata"
            poster="https://dy7x01gt6ljdu.cloudfront.net/videos/intro/intro-poster.jpg"
            className="w-full h-full object-cover"
            style={{
                position: 'absolute',
                top: '-9999px',
                left: '-9999px',
                width: '0',
                height: '0',
                opacity: '0',
                pointerEvents: 'none',
                display: 'none',
            }}
        />
    )
}
