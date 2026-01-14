'use client'

import Image from "next/image"
import AnimatedGradient from "@/components/AnimatedGradient"
import { ovloxFooterLogo } from "@/assets"
import { SiX, SiFacebook, SiInstagram } from "react-icons/si"

export default function Footer() {
	return (
		<footer className="relative py-12 sm:py-16 overflow-hidden border-t border-slate-800/50">
			<AnimatedGradient />

			<div className="w-full px-4 sm:px-6 lg:w-[90%] lg:mx-auto relative z-10 lg:px-8">
				{/* Main Footer Content */}
				<div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12 mb-6 md:mb-8">
					{/* Left Section - Logo and Text */}
					<div className="mb-4 md:hidden w-full">
						<div className="flex w-full items-center justify-between">
							<Image src={ovloxFooterLogo} alt="Ovlox Logo" width={120} height={120} />
							<div className="flex items-center gap-2">
								<a
									href="#"
									className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition"
									aria-label="X (Twitter)"
								>
									<SiX className="w-4 h-4 text-[#020617]" />
								</a>
								<a
									href="#"
									className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition"
									aria-label="Facebook"
								>
									<SiFacebook className="w-4 h-4 text-[#020617]" />
								</a>
								<a
									href="#"
									className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition"
									aria-label="Instagram"
								>
									<SiInstagram className="w-4 h-4 text-[#020617]" />
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center">
						<p
							className="text-white text-sm sm:text-base leading-relaxed"
							style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
						>
							Bringing clarity and<br />
							transparency to<br />
							product development.
						</p>

						<div className="md:hidden flex flex-col items-end gap-3">
							<a
								href="#"
								className="text-sky-400 hover:text-sky-300 underline transition text-sm"
								style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-sky-400 hover:text-sky-300 underline transition text-sm"
								style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
							>
								Terms of Service
							</a>
						</div>
					</div>

					{/* Middle Section - Logo (Desktop only) */}
					<div className="hidden md:flex flex-col items-center justify-center">
						<Image src={ovloxFooterLogo} alt="Ovlox Logo" width={120} height={120} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px]" />
					</div>

					{/* Right Section - Connect with Us and Links (Mobile) / Social Icons (Desktop) */}
					<div className="flex flex-col items-end justify-end flex-1 md:flex-none md:justify-start">

						{/* Desktop: Show "Connect with Us" and social icons */}
						<div className="hidden md:flex flex-col items-end">
							<h3
								className="text-white mb-4 text-sm sm:text-base font-semibold"
								style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
							>
								Connect with Us
							</h3>
							<div className="flex gap-2 sm:gap-3">
								{/* X/Twitter Icon */}
								<a
									href="#"
									className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition"
									aria-label="X (Twitter)"
								>
									<SiX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#020617]" />
								</a>

								{/* Facebook Icon */}
								<a
									href="#"
									className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition"
									aria-label="Facebook"
								>
									<SiFacebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#020617]" />
								</a>

								{/* Instagram Icon */}
								<a
									href="#"
									className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition"
									aria-label="Instagram"
								>
									<SiInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#020617]" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-slate-700/50 my-4 md:my-6"></div>

				{/* Bottom Section */}
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm">
					<p
						className="text-white"
						style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
					>
						© 2025 Ovlox.dev. All rights reserved.
					</p>
					{/* Desktop: Show Privacy Policy and Terms of Service */}
					<div className="hidden sm:flex gap-6">
						<a
							href="#"
							className="text-sky-400 hover:text-sky-300 underline transition"
							style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-sky-400 hover:text-sky-300 underline transition"
							style={{ fontFamily: 'var(--font-source-sans-3), sans-serif' }}
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
