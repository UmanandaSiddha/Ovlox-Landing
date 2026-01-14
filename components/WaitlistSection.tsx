'use client'

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedGradient from "@/components/AnimatedGradient"
import { RightArrow } from "@/assets"

export default function WaitlistSection() {
	const [isHovered, setIsHovered] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

	const showToast = (type: 'success' | 'error', message: string) => {
		setToast({ type, message })
		setTimeout(() => setToast(null), 4000)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		const form = e.currentTarget
		const formData = new FormData(form)

		try {
			// Create URLSearchParams to properly format the data
			const params = new URLSearchParams()
			formData.forEach((value, key) => {
				params.append(key, value as string)
			})

			const response = await fetch(
				'https://docs.google.com/forms/d/e/1FAIpQLSftE4zzA3SWULOmNc2PYSIuTMWazdAuYAr4IDEv3U6k9psBCw/formResponse',
				{
					method: 'POST',
					body: params,
					mode: 'no-cors',
				}
			)

			// Since we use no-cors, response.ok won't be reliable, but success is usually indicated by no error
			form.reset()
			showToast('success', 'Thank you for joining the waitlist! Check your email for updates.')
		} catch (error) {
			console.error('Form submission error:', error)
			showToast('error', 'Error submitting form. Please verify your information and try again.')
		} finally {
			setIsSubmitting(false)
		}
	}
	return (
		<section className="relative py-16 sm:py-20 overflow-hidden">
			<AnimatedGradient />

			{/* Toast Notifications */}
			<AnimatePresence>
				{toast && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-4"
					>
						<div
							className={`rounded-lg px-6 py-3 flex items-center gap-3 shadow-lg border ${toast.type === 'success'
								? 'bg-green-500/10 border-green-500/30 text-green-400'
								: 'bg-red-500/10 border-red-500/30 text-red-400'
								}`}
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 500,
								fontSize: '14px',
							}}
						>
							{toast.type === 'success' ? (
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17 7L8 16L3 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							) : (
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="currentColor" />
								</svg>
							)}
							<span>{toast.message}</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

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
					className="w-full max-w-3xl rounded-2xl sm:rounded-3xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 shadow-[0_24px_80px_rgba(15,23,42,0.85)] border border-sky-500/20 relative overflow-hidden"
					style={{
						background:
							"radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), #020617)",
					}}
				>
					<div className="flex items-center justify-center">
						<div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
							<div className="flex flex-col items-start mb-2 sm:mb-3">
								<div className="flex -space-x-2 mb-3 sm:mb-4">
									{[47, 33, 12].map((id) => (
										<div
											key={id}
											className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-slate-900 bg-slate-700/40"
										>
											<Image
												src={`https://i.pravatar.cc/64?img=${id}`}
												alt="Waitlist user"
												width={40}
												height={40}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>
								<p
									className="text-lg sm:text-xl lg:text-2xl text-white mb-1.5"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 600,
									}}
								>
									Join the waitlist
								</p>

								<p
									className="text-sm sm:text-base text-slate-300"
									style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
								>
									Sign up to be one of the first to use Ovlox.
								</p>
							</div>

							<form
								className="flex flex-col w-full gap-4"
								onSubmit={handleSubmit}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
									<div className="flex flex-col gap-2">
										<label
											htmlFor="firstName"
											className="text-sm font-medium text-slate-200 text-left"
											style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
										>
											First Name <span className="text-red-400">*</span>
										</label>
										<input
											type="text"
											id="firstName"
											name="entry.904232106"
											required
											placeholder="Your first name"
											className="w-full bg-[#0F172A]/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-[#E5E7EB] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition-all"
											style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
										/>
									</div>

									<div className="flex flex-col gap-2">
										<label
											htmlFor="lastName"
											className="text-sm font-medium text-slate-200 text-left"
											style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
										>
											Last Name <span className="text-red-400">*</span>
										</label>
										<input
											type="text"
											id="lastName"
											name="entry.1457477832"
											required
											placeholder="Your last name"
											className="w-full bg-[#0F172A]/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-[#E5E7EB] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition-all"
											style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
										/>
									</div>
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="email"
										className="text-sm font-medium text-slate-200 text-left"
										style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
									>
										Email <span className="text-red-400">*</span>
									</label>
									<input
										type="email"
										id="email"
										name="entry.1886220119"
										required
										placeholder="your.email@example.com"
										className="w-full bg-[#0F172A]/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-[#E5E7EB] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition-all"
										style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
									/>
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="profession"
										className="text-sm font-medium text-slate-200 text-left"
										style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
									>
										What is your profession?
									</label>
									<input
										type="text"
										id="profession"
										name="entry.1611774670"
										placeholder="e.g., Developer, Designer, Product Manager"
										className="w-full bg-[#0F172A]/60 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-[#E5E7EB] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition-all"
										style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full sm:w-auto sm:self-start inline-flex gap-2 items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold bg-[#E5E7EB] text-black hover:text-white hover:bg-[#020617] hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-sky-400 transition-all duration-300 shadow-[0_10px_40px_rgba(56,189,248,0.55)] mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
									style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									{isSubmitting ? 'Joining...' : 'Join Waitlist'} <RightArrow size={14} className="sm:w-4 sm:h-4" color={isHovered ? "#E5E7EB" : "#020617"} />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

