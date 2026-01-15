'use client'

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedGradient from "@/components/AnimatedGradient"

export default function PrivacyPolicy() {
	return (
		<div className="bg-[#020617] min-h-screen w-full">
			<Header />
			
			<main className="relative py-16 sm:py-20 overflow-hidden">
				<AnimatedGradient />
				
				<div className="w-full px-4 sm:px-6 lg:w-[90%] lg:mx-auto relative z-10 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="max-w-4xl mx-auto"
					>
						{/* Header */}
						<h1
							className="text-center mb-4"
							style={{
								fontFamily: 'var(--font-manrope), sans-serif',
								fontWeight: 700,
								fontSize: 'clamp(36px, 6vw, 56px)',
								lineHeight: '110%',
								letterSpacing: '0%',
								color: '#E5E7EB',
							}}
						>
							Privacy Policy
						</h1>
						
						<p
							className="text-center mb-12 text-base sm:text-lg"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
								fontWeight: 400,
								lineHeight: '140%',
								color: '#676A74',
							}}
						>
							Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>

						{/* Content */}
						<div
							className="prose prose-invert max-w-none space-y-8"
							style={{
								fontFamily: 'var(--font-source-sans-3), sans-serif',
							}}
						>
							{/* Introduction */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									1. Introduction
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									Welcome to Ovlox.dev ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
								</p>
							</section>

							{/* Information We Collect */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									2. Information We Collect
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									We collect information that you provide directly to us, including:
								</p>
								<ul
									className="list-disc pl-6 space-y-2 mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									<li>Name and contact information (email address, phone number)</li>
									<li>Company information and job title</li>
									<li>Information you provide when you register for our services or sign up for our waitlist</li>
									<li>Communications you send to us, including customer support inquiries</li>
								</ul>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and usage patterns.
								</p>
							</section>

							{/* How We Use Your Information */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									3. How We Use Your Information
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									We use the information we collect to:
								</p>
								<ul
									className="list-disc pl-6 space-y-2 mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									<li>Provide, maintain, and improve our services</li>
									<li>Process your registrations and manage your account</li>
									<li>Send you updates, newsletters, and marketing communications (with your consent)</li>
									<li>Respond to your comments, questions, and requests</li>
									<li>Monitor and analyze trends, usage, and activities</li>
									<li>Detect, prevent, and address technical issues and security threats</li>
								</ul>
							</section>

							{/* Information Sharing */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									4. Information Sharing and Disclosure
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
								</p>
								<ul
									className="list-disc pl-6 space-y-2 mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									<li>With service providers who assist us in operating our website and conducting our business</li>
									<li>When required by law or to respond to legal process</li>
									<li>To protect our rights, privacy, safety, or property</li>
									<li>In connection with a business transfer or merger</li>
								</ul>
							</section>

							{/* Data Security */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									5. Data Security
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
								</p>
							</section>

							{/* Your Rights */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									6. Your Rights
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									You have the right to:
								</p>
								<ul
									className="list-disc pl-6 space-y-2 mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									<li>Access and receive a copy of your personal information</li>
									<li>Correct inaccurate or incomplete information</li>
									<li>Request deletion of your personal information</li>
									<li>Object to or restrict processing of your information</li>
									<li>Opt-out of marketing communications at any time</li>
								</ul>
							</section>

							{/* Cookies */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									7. Cookies and Tracking Technologies
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
								</p>
							</section>

							{/* Contact */}
							<section>
								<h2
									className="mb-4"
									style={{
										fontFamily: 'var(--font-manrope), sans-serif',
										fontWeight: 600,
										fontSize: 'clamp(24px, 4vw, 32px)',
										lineHeight: '120%',
										color: '#E5E7EB',
									}}
								>
									8. Contact Us
								</h2>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#E5E7EB',
									}}
								>
									If you have any questions about this Privacy Policy, please contact us at:
								</p>
								<p
									className="mb-4"
									style={{
										fontFamily: 'var(--font-source-sans-3), sans-serif',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '160%',
										color: '#60CAF9',
									}}
								>
									Email: privacy@ovlox.dev
								</p>
							</section>
						</div>
					</motion.div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
