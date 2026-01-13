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
	title: "Ovlox",
	description: "Created by Shivaji",
};

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
			</body>
		</html>
	);
}
