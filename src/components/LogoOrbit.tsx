"use client";
import { useState, useEffect } from "react"; // Removed unused useRef

interface LogoItem {
  id: number;
  name: string;
  logo: string;
  radius?: number;
}

interface LogoOrbitProps {
  logos: LogoItem[];
  centerLogo: string;
}

// Set constants outside the function for clean organization
const ROTATION_INCREMENT = 0.3; // Speed of the rotation animation
const FIXED_SPEED_FACTOR = 0.8; // Factor applied to orbital position calculation
const ANIMATION_INTERVAL = 30; // ms

export default function LogoOrbit({ logos, centerLogo }: LogoOrbitProps) {
  const [rotation, setRotation] = useState(0);

  // Animation loop (smooth, continuous rotation)
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + ROTATION_INCREMENT) % 360);
    }, ANIMATION_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const size = 350; // container size (W & H)
  const center = size / 2;

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {/* Center Quatax logo */}
      <div className="absolute w-14 h-14 bg-white flex items-center justify-center rounded-full shadow-lg z-10">
        <img
          src={centerLogo}
          alt="Center Logo"
          className="w-14 h-14 rounded-full object-contain drop-shadow-lg animate-pulse"
        />
      </div>

      {/* SVG for the connecting lines (Threads) */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox={`0 0 ${size} ${size}`}
      >
        {logos.map((logo, index) => {
          const r = logo.radius ?? (80 + Math.random() * 100);
          const angle = ((index / logos.length) * 360 + rotation * FIXED_SPEED_FACTOR) % 360;
          const rad = (angle * Math.PI) / 180;
          const x = center + r * Math.cos(rad);
          const y = center + r * Math.sin(rad);

          return (
            <line
              key={`line-${logo.id}`}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Orbiting logos */}
      {logos.map((logo, index) => {
        const r = logo.radius ?? (80 + Math.random() * 100);
        const angle = ((index / logos.length) * 360 + rotation * FIXED_SPEED_FACTOR) % 360;
        const rad = (angle * Math.PI) / 180;
        const x = r * Math.cos(rad);
        const y = r * Math.sin(rad);

        return (
          <div
            key={logo.id}
            className="absolute transition-transform duration-200 ease-linear"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <img
              src={logo.logo}
              alt={logo.name}
              title={logo.name}
              className="w-10 h-10 object-contain rounded-xl bg-white/10 hover:scale-125 hover:brightness-110 transition-transform duration-300"
            />
          </div>
        );
      })}
    </div>
  );
}