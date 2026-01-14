'use client'

import { useState } from "react"
import Image from "next/image"
import AnimatedGradient from "@/components/AnimatedGradient"
import { RightArrow } from "@/assets"

export default function WaitlistSection() {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<section className="relative py-16 sm:py-20 overflow-hidden">
			<AnimatedGradient />

			<div className="w-full px-4 sm:px-6 lg:w-[90%] lg:mx-auto relative z-10 lg:px-8 flex flex-col items-center text-center">
				<h2
					className="mb-4"
					style={{
						fontFamily: 'var(--font-manrope), sans-serif',
						fontWeight: 600,
						fontSize: 'clamp(32px, 5vw, 48px)',
						lineHeight: '110%',
						color: '#E5E7EB',
					}}
				>
					Ready to build and launch your next product{" "}
					<span className="text-sky-400">with confidence?</span>
				</h2>

				<p
					className="max-w-2xl mb-10 text-sm sm:text-base"
					style={{
						fontFamily: 'var(--font-source-sans-3), sans-serif',
						fontWeight: 400,
						lineHeight: '150%',
						color: '#9CA3AF',
					}}
				>
					Get early access to our upcoming release and secure your spot in the waitlist.
				</p>

				<div
					className="w-full max-w-2xl rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 shadow-[0_24px_80px_rgba(15,23,42,0.85)] border border-sky-500/20 relative overflow-hidden"
					style={{
						background:
							"radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), #020617)",
					}}
				>
					<div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center">
						<div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
							<div className="flex flex-col items-start mb-3 sm:mb-4">
								<div className="flex -space-x-2 mb-2 sm:mb-3">
									{[47, 33, 12].map((id) => (
										<div
											key={id}
											className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-slate-900 bg-slate-700/40"
										>
											<Image
												src={`https://i.pravatar.cc/64?img=${id}`}
												alt="Waitlist user"
												width={32}
												height={32}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>
								<p
									className="text-base sm:text-lg lg:text-xl text-white mb-1"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
									}}
								>
									Join the waitlist
								</p>

								<p
									className="text-xs sm:text-sm text-slate-300"
									style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
								>
									Sign up to be one of the first to use Ovlox.
								</p>
							</div>

							<form
								className="flex w-full flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-2 bg-[#676A744D] rounded-full p-1.5 sm:p-2"
								onSubmit={(e) => e.preventDefault()}
							>
								<input
									type="email"
									required
									placeholder="Enter your email..."
									className="w-full text-[#E5E7EB] sm:w-56 lg:w-72 xl:w-80 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm placeholder:text-[#9CA3AF] focus:outline-none transition"
									style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
								/>
								<button
									type="submit"
									className="inline-flex gap-1.5 sm:gap-2 items-center justify-center whitespace-nowrap rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium bg-[#E5E7EB] text-black hover:text-white hover:bg-[#020617] hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-sky-400 transition-all duration-300 shadow-[0_10px_40px_rgba(56,189,248,0.55)]"
									style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									Get notified <RightArrow size={10} className="sm:w-3 sm:h-3" color={isHovered ? "#E5E7EB" : "#020617"} />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

