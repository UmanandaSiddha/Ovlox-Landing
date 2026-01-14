'use client'

import Image from "next/image"
import { AdjustIcon, ControlIcon, DashboardIcon, ProgressIcon } from "@/assets"
import AnimatedGradient from "@/components/AnimatedGradient"

export default function EverythingYouNeedSection() {
	return (
		<section className="relative py-16 sm:py-20 overflow-hidden">
			{/* Animated Gradient Background */}
			<AnimatedGradient />

			{/* 90% width container */}
			<div className="w-[90%] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
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
				<div className="max-w-5xl mx-auto">
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
			</div>
		</section>
	)
}
