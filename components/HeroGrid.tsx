'use client'

export default function HeroGrid() {
	return (
		<div 
			className="absolute inset-0 opacity-[0.03] pointer-events-none"
			style={{
				backgroundImage: `
					linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
					linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
				`,
				backgroundSize: '60px 60px',
			}}
		/>
	)
}
