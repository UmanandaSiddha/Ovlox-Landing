'use client'

import Image from "next/image"
import { OvloxLogo } from "@/assets"

const navigation = [
	{ name: 'HOME', href: '#' },
	{ name: 'FEATURES', href: '#' },
	{ name: 'ABOUT', href: '#' },
	{ name: 'CONTACT', href: '#' },
]

export default function Header() {
	return (
		<header className="absolute inset-x-0 top-0 z-50 w-full">
			<div className="w-[90%] mx-auto">
				<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
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
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
						>
							<span className="sr-only">Open main menu</span>
							<p>Open main menu</p>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="nav-link"
								style={{
									fontFamily: 'var(--font-source-sans-3), sans-serif',
									fontWeight: 400,
									fontSize: '16px',
									lineHeight: '100%',
									letterSpacing: '0%',
									color: '#E5E7EB',
								}}
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a href="#" className="text-sm/6 font-semibold text-white border border-[#60CAF9] px-4 py-1.5 rounded-full hover:bg-[#60CAF9]/10 transition-colors">
							Start Free Trial
						</a>
					</div>
				</nav>
			</div>
		</header>
	)
}
