import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function ParticlesContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-[#00d4ff]/30";
      
      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      const opacity = Math.random() * 0.6 + 0.2;
      particle.style.opacity = opacity.toString();
      
      // Store particle info
      particlesRef.current.push({
        element: particle,
        x,
        y,
        size,
        opacity,
        speed: Math.random() * 0.5 + 0.2
      });
      
      container.appendChild(particle);
    }
    
    return () => {
      // Clean up particles
      particlesRef.current.forEach(particle => {
        if (container.contains(particle.element)) {
          container.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {/* Particles will be dynamically created here */}
    </div>
  );
}
