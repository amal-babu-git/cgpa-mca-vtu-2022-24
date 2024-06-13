
const WavyRainbowFlagIcon = () => {
	return (
		<svg
			width="50"
			height="50" // Increased height to accommodate the text
			viewBox="0 0 200 150" // Increased viewBox height to fit the text
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Wavy Rainbow Flag with Pride Text"
		>
			{/* Red */}
			<path
				d="M0,0 Q50,10 100,0 T200,0 L200,20 Q150,30 100,20 T0,20 Z"
				fill="#E40303"
			/>
			{/* Orange */}
			<path
				d="M0,20 Q50,30 100,20 T200,20 L200,40 Q150,50 100,40 T0,40 Z"
				fill="#FF8C00"
			/>
			{/* Yellow */}
			<path
				d="M0,40 Q50,50 100,40 T200,40 L200,60 Q150,70 100,60 T0,60 Z"
				fill="#FFED00"
			/>
			{/* Green */}
			<path
				d="M0,60 Q50,70 100,60 T200,60 L200,80 Q150,90 100,80 T0,80 Z"
				fill="#008026"
			/>
			{/* Blue */}
			<path
				d="M0,80 Q50,90 100,80 T200,80 L200,100 Q150,110 100,100 T0,100 Z"
				fill="#004DFF"
			/>
			{/* Purple */}
			<path
				d="M0,100 Q50,110 100,100 T200,100 L200,120 Q150,130 100,120 T0,120 Z"
				fill="#750787"
			/>
			{/* Pride Text */}
			<text
				x="100"
				y="140"
				fontSize="30"
				fontWeight="bold"
				textAnchor="middle"
				fill="#000000" // Black color for text
				style={{ fontFamily: "Arial, sans-serif" }} // Style for the font
			>
				PRIDE
			</text>
		</svg>
	);
};

export default WavyRainbowFlagIcon;
