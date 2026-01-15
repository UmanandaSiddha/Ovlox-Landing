import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata = {
	title: "Privacy Policy",
	description:
		"Read Ovlox's privacy policy to understand how we collect, use, and protect your data when using our product and team visibility platform.",
	alternates: {
		canonical: "/privacy-policy",
	},
}

export default function PrivacyPolicy() {
	return (
		<PrivacyPolicyClient />
	)
}
