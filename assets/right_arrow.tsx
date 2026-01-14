import React from 'react'

interface RightArrowProps {
	size?: number
	color?: string
	strokeWidth?: number
	className?: string
}

export default function RightArrow({ 
	size = 22, 
	color = '#E5E7EB', 
	strokeWidth = 2.5,
	className 
}: RightArrowProps) {
	return (
		<svg 
			width={size} 
			height={size} 
			viewBox="0 0 22 22" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path 
				d="M1.25 10.5833H19.9167M19.9167 10.5833L10.5833 1.25M19.9167 10.5833L10.5833 19.9167" 
				stroke={color} 
				strokeWidth={strokeWidth} 
				strokeLinecap="round" 
				strokeLinejoin="round"
			/>
		</svg>
	)
}
