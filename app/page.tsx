'use client'

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProjectProgressSection from "@/components/ProjectProgressSection"
import EverythingYouNeedSection from "@/components/EverythingYouNeedSection"
import ConnectToolsSection from "@/components/ConnectToolsSection"
import TestimonialsSection from "@/components/TestimonialsSection"

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
	return (
		<div className="bg-[#020617] min-h-screen">
			<Header />
			<HeroSection />
			<ProjectProgressSection />
			<EverythingYouNeedSection />
			<ConnectToolsSection />
			<TestimonialsSection testimonials={testimonials} />
		</div>
	)
}