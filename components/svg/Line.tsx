import React from "react";

interface CustomSvgProps {
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
}

export default function CustomSvg({ fillColor, strokeColor, strokeWidth }: CustomSvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="diagonal" patternUnits="userSpaceOnUse" width="10" height="10" x="0" y="0">
          <rect x="0" y="0" width="10" height="10" fill={fillColor} />
          <line x1="0" y1="10" x2="10" y2="0" stroke={strokeColor} strokeWidth={strokeWidth} />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal)" />
    </svg>
  );
}
