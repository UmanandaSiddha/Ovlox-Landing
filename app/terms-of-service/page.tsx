import TermsOfServiceClient from "./TermsOfServiceClient"

export const metadata = {
	title: "Terms of Service",
	description:
		"Review Ovlox’s terms of service outlining usage guidelines, responsibilities, and conditions for accessing the Ovlox platform.",
	alternates: {
		canonical: "/terms-of-service",
	},
}

export default function TermsOfService() {
	return (
		<TermsOfServiceClient />
	)
}
