import React, { useState, useEffect } from "react";

const Logo = () => {
  const [circleColor, setCircleColor] = useState("#F9D423");
  const [triangleRotation, setTriangleRotation] = useState(0);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCircleColor((prevColor) => (prevColor === "#F9D423" ? "#E65A5A" : "#F9D423"));
    }, 3000);

    const rotationInterval = setInterval(() => {
      setTriangleRotation((prevRotation) => (prevRotation + 10) % 360);
    }, 4000);

    return () => {
      clearInterval(colorInterval);
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#F9D423" />
          <stop offset="100%" stopColor="#E65A5A" />
        </linearGradient>
      </defs>
      <rect className="square" x="0" y="0" width="50" height="50" fill="none" stroke="url(#gradient)" strokeWidth="2" />
      <circle className="shape" cx="40" cy="50" r="8" fill={circleColor} />
      <rect className="shape" x="55" y="30" width="15" height="15" fill="url(#gradient)" />
      <polygon
        className="shape"
        points="70,65 75,75 65,75"
        fill="url(#gradient)"
        transform={`rotate(${triangleRotation} 70 70)`}
      />
    </svg>
  );
};

export default Logo;
