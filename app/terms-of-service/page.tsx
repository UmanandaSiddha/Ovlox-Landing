'use client'

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedGradient from "@/components/AnimatedGradient"

export default function TermsOfService() {
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
							Terms of Service
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
							{/* Agreement */}
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
									1. Agreement to Terms
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
									By accessing or using Ovlox.dev ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
								</p>
							</section>

							{/* Description of Service */}
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
									2. Description of Service
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
									Ovlox.dev provides a platform that helps founders and non-technical stakeholders understand their website's progress by tracking updates from development tools like GitHub, Jira, and Slack, and presenting them in a clear, understandable format.
								</p>
							</section>

							{/* User Accounts */}
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
									3. User Accounts
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
									When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
								</p>
							</section>

							{/* Acceptable Use */}
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
									4. Acceptable Use
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
									You agree not to:
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
									<li>Use the Service for any illegal purpose or in violation of any laws</li>
									<li>Violate or infringe upon the rights of others</li>
									<li>Transmit any harmful code, viruses, or malicious software</li>
									<li>Attempt to gain unauthorized access to the Service or related systems</li>
									<li>Interfere with or disrupt the Service or servers connected to the Service</li>
									<li>Use the Service to transmit spam, unsolicited messages, or advertising</li>
								</ul>
							</section>

							{/* Intellectual Property */}
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
									5. Intellectual Property Rights
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
									The Service and its original content, features, and functionality are and will remain the exclusive property of Ovlox.dev and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written consent.
								</p>
							</section>

							{/* Third-Party Services */}
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
									6. Third-Party Services
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
									Our Service may integrate with third-party services such as GitHub, Jira, Slack, and others. Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices of these third-party services.
								</p>
							</section>

							{/* Disclaimer */}
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
									7. Disclaimer
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
									The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, Ovlox.dev excludes all representations, warranties, and conditions relating to our Service and the use of this Service.
								</p>
							</section>

							{/* Limitation of Liability */}
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
									8. Limitation of Liability
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
									In no event shall Ovlox.dev, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
								</p>
							</section>

							{/* Termination */}
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
									9. Termination
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
									We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
								</p>
							</section>

							{/* Changes to Terms */}
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
									10. Changes to Terms
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
									We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
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
									11. Contact Information
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
									If you have any questions about these Terms of Service, please contact us at:
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
									Email: legal@ovlox.dev
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
