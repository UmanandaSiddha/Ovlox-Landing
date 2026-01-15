'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { OvloxLogo } from "@/assets"

const navigation = [
	{ name: 'HOME', href: '#home' },
	{ name: 'FEATURES', href: '#features' },
	{ name: 'ABOUT', href: '#about' },
	{ name: 'CONTACT', href: '#contact' },
]

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
	e.preventDefault()
	const targetId = href.replace('#', '')
	const targetElement = document.getElementById(targetId)
	if (targetElement) {
		const headerOffset = 80 // Account for fixed header
		const elementPosition = targetElement.getBoundingClientRect().top
		const offsetPosition = elementPosition + window.pageYOffset - headerOffset

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		})
	}
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const onScroll = () => setIsSticky(window.scrollY > 10)
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header className={`${isSticky ? 'fixed bg-[#020617] shadow-lg border-b border-slate-800/40' : 'absolute'} inset-x-0 top-0 z-50 w-full transition-colors duration-200`}>
			<div className="w-full lg:w-[90%] lg:mx-auto">
				<nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<Image
								alt=""
								src={OvloxLogo}
								className="h-8 w-auto"
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#60CAF9]"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-expanded={mobileMenuOpen}
							aria-label="Toggle menu"
						>
							<span className="sr-only">Open main menu</span>
							{!mobileMenuOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								onClick={(e) => handleSmoothScroll(e, item.href)}
								className="nav-link-underline text-sm xl:text-base pb-2 text-[#E5E7EB] hover:text-white transition-colors duration-200"
								style={{
									fontFamily: 'var(--font-source-sans-3), sans-serif',
									fontWeight: 400,
									lineHeight: '100%',
									letterSpacing: '0%',
								}}
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a 
							href="#contact" 
							onClick={(e) => handleSmoothScroll(e, '#contact')}
							className="text-xs xl:text-sm font-semibold text-white border border-[#60CAF9] px-3 xl:px-4 py-2 rounded-full hover:bg-[#60CAF9]/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(96,202,249,0.3)] transition-all duration-300"
						>
							Start Free Trial
						</a>
					</div>
				</nav>

				<AnimatePresence>
					{mobileMenuOpen && (
						<>
							{/* Backdrop with fade animation */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
								onClick={() => setMobileMenuOpen(false)}
							/>

							{/* Sidebar with slide animation */}
							<motion.div
								initial={{ x: '-100%' }}
								animate={{ x: 0 }}
								exit={{ x: '-100%' }}
								transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
								className="fixed top-0 left-0 bottom-0 z-[70] w-[70%] bg-[#020617] border-r border-slate-800/50 shadow-xl lg:hidden h-screen overflow-hidden"
							>
								<div className="flex flex-col h-full">
									<div className="flex items-center justify-between p-6 border-b border-slate-800/50 flex-shrink-0">
										<Image
											alt="Ovlox Logo"
											src={OvloxLogo}
											className="h-8 w-auto"
										/>
										<button
											type="button"
											className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#60CAF9]"
											onClick={() => setMobileMenuOpen(false)}
											aria-label="Close menu"
										>
											<span className="sr-only">Close menu</span>
											<svg
												className="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>

									<div className="flex-1 px-6 py-6 space-y-1 overflow-y-auto min-h-0">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												onClick={(e) => {
													handleSmoothScroll(e, item.href)
													setMobileMenuOpen(false)
												}}
												className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-[#60CAF9]/10 rounded-lg transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#60CAF9] after:left-4 after:bottom-1 hover:after:w-[calc(100%-2rem)] after:transition-all after:duration-300"
												style={{
													fontFamily: 'var(--font-source-sans-3), sans-serif',
												}}
											>
												{item.name}
											</a>
										))}
									</div>

									<div className="p-6 border-t border-slate-800/50 flex-shrink-0">
										<a
											href="#contact"
											onClick={(e) => {
												handleSmoothScroll(e, '#contact')
												setMobileMenuOpen(false)
											}}
											className="block w-full px-4 py-3 text-sm font-semibold text-white border border-[#60CAF9] rounded-full hover:bg-[#60CAF9]/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(96,202,249,0.3)] transition-all duration-300 text-center"
										>
											Start Free Trial
										</a>
									</div>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</header>
	)
}
