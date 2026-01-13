'use client'

export default function AnimatedDotPattern() {
	return (
		<div 
			className="absolute inset-0 pointer-events-none" 
			style={{ 
				zIndex: 1,
				backgroundImage: `radial-gradient(circle, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
				backgroundSize: '40px 40px',
				backgroundPosition: '0 0',
			}}
		/>
	)
}
