'use client'

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProjectProgressSection from "@/components/ProjectProgressSection"
import EverythingYouNeedSection from "@/components/EverythingYouNeedSection"
import ConnectToolsSection from "@/components/ConnectToolsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import WaitlistSection from "@/components/WaitlistSection"
import Footer from "@/components/Footer"

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

	return (
		<div className="bg-[#020617] min-h-screen w-full">
			<Header />
			
			{/* Hero Section - No animation, appears immediately */}
			<HeroSection />
			
			{/* Animated Sections with subtle staggered delays */}
			<AnimatedSection delay={0.1}>
				<ProjectProgressSection />
			</AnimatedSection>
			
			<AnimatedSection delay={0.15}>
				<EverythingYouNeedSection />
			</AnimatedSection>
			
			<AnimatedSection delay={0.1}>
				<ConnectToolsSection />
			</AnimatedSection>
			
			<AnimatedSection delay={0.15}>
				<TestimonialsSection testimonials={testimonials} />
			</AnimatedSection>
			
			<AnimatedSection delay={0.1}>
				<WaitlistSection />
			</AnimatedSection>
			
			<AnimatedSection delay={0.05}>
				<Footer />
			</AnimatedSection>
		</div>
	)
}