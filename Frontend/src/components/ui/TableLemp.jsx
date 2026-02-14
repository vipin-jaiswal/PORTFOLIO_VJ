import React from "react";

const TableLampRight = ({ size = 120, color = "#9ca3af", glow = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="scale(-1, 1) translate(-24, 0)">
        
        {/* Base */}
        <path
          d="M7 21h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"
          fill={color}
        />

{/* Stem (Sharper Industrial Curve) */}
<path
  d="M16 21C16 16 15 13 13 11C11 9 9 8 8 7"
  stroke={color}
  strokeWidth="3"
  strokeLinecap="round"
/>


{/* Head (Tilted Industrial Look) */}
<path
  d="M8 7L4.5 10C3.5 11 3.8 9.5 4.8 8.5L7.5 6C9.5 4.5 12.5 5 14 6.5C15.5 8 15.5 10.5 14 12L13 13L8 7Z"
  fill={color}
/>


        {/* Bulb */}
        <circle
          cx="8"
          cy="11"
          r="1.5"
          fill={glow ? "#facc15" : color}
          opacity={glow ? "1" : "0.5"}
        />

        {/* Light Rays */}
        {glow && (
          <path
            d="M3 13l-1.5 1.5M2 10h-2M3 7l-1.5-1.5"
            stroke="#facc15"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </g>
    </svg>
  );
};

export default TableLampRight;
