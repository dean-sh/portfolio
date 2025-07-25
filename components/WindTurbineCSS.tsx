'use client';

import { useEffect, useRef } from 'react';

interface WindTurbineProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
  position?: { x: number; y: number };
}

export default function WindTurbineCSS({ 
  className = '', 
  size = 'md',
  speed = 'normal',
  position = { x: 50, y: 50 }
}: WindTurbineProps) {
  const turbineRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-24 h-28', 
    lg: 'w-32 h-36'
  };

  const speedClasses = {
    slow: 'animate-wind-spin-slow',
    normal: 'animate-wind-spin',
    fast: 'animate-wind-turbine-fast'
  };

  const bladeLength = size === 'sm' ? 20 : size === 'md' ? 28 : 36;

  useEffect(() => {
    if (turbineRef.current) {
      turbineRef.current.style.left = `${position.x}%`;
      turbineRef.current.style.top = `${position.y}%`;
    }
  }, [position]);

  return (
    <div 
      ref={turbineRef}
      className={`fixed transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} ${className}`}
      style={{ zIndex: -1 }}
    >
      {/* Turbine Tower */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-t from-dark-600 to-dark-500 opacity-60"
           style={{ height: '70%' }} />
      
      {/* Nacelle (turbine housing) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-2 bg-dark-500 rounded-sm opacity-70"
           style={{ top: '25%' }} />
      
      {/* Rotor Hub - Fixed */}
      <div className="absolute left-1/2 top-[23%] transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-dark-400 rounded-full opacity-90 z-10" />
      
      {/* Rotating Blades Container */}
      <div 
        className={`absolute left-1/2 top-[23%] transform -translate-x-1/2 -translate-y-1/2 ${speedClasses[speed]} will-change-transform`}
        style={{ 
          width: `${bladeLength * 2}px`,
          height: `${bladeLength * 2}px`,
          transformOrigin: 'center center'
        }}
      >
        {/* Blade 1 - Vertical (12 o'clock) */}
        <div 
          className="absolute bg-gradient-to-t from-dark-300/60 to-dark-100/80 opacity-80 rounded-sm"
          style={{
            width: '2px',
            height: `${bladeLength}px`,
            left: '50%',
            top: '0px',
            transform: 'translateX(-50%)'
          }}
        />
        
        {/* Blade 2 - Bottom Right (4 o'clock) */}
        <div 
          className="absolute bg-gradient-to-t from-dark-300/60 to-dark-100/80 opacity-80 rounded-sm"
          style={{
            width: '2px',
            height: `${bladeLength}px`,
            left: '50%',
            top: '0px',
            transform: 'translateX(-50%) rotate(120deg)',
            transformOrigin: '50% 100%'
          }}
        />
        
        {/* Blade 3 - Bottom Left (8 o'clock) */}
        <div 
          className="absolute bg-gradient-to-t from-dark-300/60 to-dark-100/80 opacity-80 rounded-sm"
          style={{
            width: '2px',
            height: `${bladeLength}px`,
            left: '50%',
            top: '0px',
            transform: 'translateX(-50%) rotate(240deg)',
            transformOrigin: '50% 100%'
          }}
        />
      </div>
    </div>
  );
}

// Wind Farm Component with Multiple Turbines
export function WindFarm() {
  const turbines = [
    { id: 1, position: { x: 12, y: 25 }, size: 'md' as const, speed: 'normal' as const },
    { id: 2, position: { x: 22, y: 40 }, size: 'sm' as const, speed: 'slow' as const },
    { id: 3, position: { x: 35, y: 20 }, size: 'lg' as const, speed: 'fast' as const },
    { id: 4, position: { x: 78, y: 30 }, size: 'md' as const, speed: 'normal' as const },
    { id: 5, position: { x: 85, y: 55 }, size: 'sm' as const, speed: 'fast' as const },
    { id: 6, position: { x: 92, y: 75 }, size: 'md' as const, speed: 'slow' as const },
    { id: 7, position: { x: 8, y: 65 }, size: 'sm' as const, speed: 'normal' as const },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {turbines.map((turbine) => (
        <WindTurbineCSS
          key={turbine.id}
          position={turbine.position}
          size={turbine.size}
          speed={turbine.speed}
          className="opacity-25 hover:opacity-60 transition-opacity duration-1000 hover:scale-110"
        />
      ))}
      
      {/* Enhanced wind effect lines */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-wind-400/60 to-transparent animate-energy-flow"
            style={{
              top: `${15 + (i * 7)}%`,
              left: '-150px',
              width: '300px',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      {/* Atmospheric particles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-energy-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + (i % 4)}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}