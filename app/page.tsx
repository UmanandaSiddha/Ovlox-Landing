import HomeClient from "./HomeClient"

export const metadata = {
	title: "Product & Team Visibility Without the Noise",
	description:
		"Ovlox provides founders and product leaders with clear, human-readable summaries of development activity and team discussions across GitHub, Jira, Slack, and Discord.",
}

export default function Home() {
	return <HomeClient />
}
