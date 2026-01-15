'use client'

import { createContext, useContext, useState, useRef, ReactNode } from 'react'

interface VideoContextType {
    isPlaying: boolean
    setIsPlaying: (playing: boolean) => void
    isMuted: boolean
    setIsMuted: (muted: boolean) => void
    volume: number
    setVolume: (volume: number) => void
    currentTime: number
    setCurrentTime: (time: number) => void
    duration: number
    setDuration: (duration: number) => void
    videoRef: React.MutableRefObject<HTMLVideoElement | null>
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(1)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <VideoContext.Provider
            value={{
                isPlaying,
                setIsPlaying,
                isMuted,
                setIsMuted,
                volume,
                setVolume,
                currentTime,
                setCurrentTime,
                duration,
                setDuration,
                videoRef,
            }}
        >
            {children}
        </VideoContext.Provider>
    )
}

export function useVideoContext() {
    const context = useContext(VideoContext)
    if (!context) {
        throw new Error('useVideoContext must be used within VideoProvider')
    }
    return context
}
