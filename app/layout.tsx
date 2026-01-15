import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
	variable: "--font-source-sans-3",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://ovlox.dev"),

	title: {
		default: "Ovlox - Product & Team Visibility Platform",
		template: "%s | Ovlox",
	},

	description:
		"Ovlox is a product and team visibility platform that helps founders, product leaders, and non-technical stakeholders gain clarity without diving into code. It integrates with GitHub, Jira, Slack, and Discord to deliver human-readable insights, progress summaries, and decision-ready updates.",

	alternates: {
		canonical: "/",
	},

	openGraph: {
		type: "website",
		url: "https://ovlox.dev",
		siteName: "Ovlox",
		title: "Ovlox - Product & Team Visibility Platform",
		description:
			"Ovlox gives founders and product leaders instant visibility into development activity and team discussions across GitHub, Jira, Slack, and Discord—without reading long threads or attending unnecessary meetings.",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Ovlox - Product & Team Visibility Platform",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Ovlox - Product & Team Visibility Platform",
		description:
			"Clarity for founders and product leaders. Ovlox summarizes code, project updates, and team conversations into actionable insights.",
		images: ["/og.png"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${sourceSans3.variable} antialiased`}
			>
				{children}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "SoftwareApplication",
							name: "Ovlox",
							applicationCategory: "BusinessApplication",
							operatingSystem: "Web",
							url: "https://ovlox.dev",
							description:
								"Ovlox is a product and team visibility platform that summarizes development activity and team conversations from GitHub, Jira, Slack, and Discord into clear, actionable insights.",
						}),
					}}
				/>

			</body>
		</html>
	);
}
