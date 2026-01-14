import React from 'react'

interface LeftArrowProps {
	size?: number
	color?: string
	strokeWidth?: number
	className?: string
}

export default function LeftArrow({ 
	size = 22, 
	color = '#353845', 
	strokeWidth = 2.5,
	className 
}: LeftArrowProps) {
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
				d="M19.9167 10.5833H1.25001M1.25001 10.5833L10.5833 1.25M1.25001 10.5833L10.5833 19.9167" 
				stroke={color} 
				strokeWidth={strokeWidth} 
				strokeLinecap="round" 
				strokeLinejoin="round"
			/>
		</svg>
	)
}
