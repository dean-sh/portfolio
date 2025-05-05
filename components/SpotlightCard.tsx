'use client'

import { useRef, useState, useEffect } from 'react'
import { cn } from '../lib/utils'

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: string
  via?: string
  size?: number
  children: React.ReactNode
}

export function SpotlightCard({
  className,
  children,
  from = "#4d7def",
  via = "#3a6dfc",
  size = 300,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setPosition({ x, y })
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0.15) // Keep a faint border visible when not hovering
  }

  // For initial mounting animation
  useEffect(() => {
    setOpacity(0.15) // Very faint border when not actively hovering
  }, [])

  // Method 2: Using a more cross-browser compatible approach
  // with ::before and CSS custom properties for browsers that 
  // may not fully support masking operations
  return (
    <div
      ref={divRef}
      className={cn(
        'relative overflow-hidden', 
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        // CSS custom properties for the spotlight effect
        '--spotlight-x': `${position.x}px`,
        '--spotlight-y': `${position.y}px`,
        '--spotlight-opacity': opacity,
        '--spotlight-from': from,
        '--spotlight-via': via,
        '--spotlight-size': `${size}px`,
        // Add a very subtle default border that will be "replaced" by the spotlight effect
        boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
      } as React.CSSProperties}
      {...props}
    >
      {/* Using a pseudo-element for the border effect via CSS */}
      <style jsx>{`
        div {
          position: relative;
        }
        
        div::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px; /* The width of the border */
          background: radial-gradient(
            var(--spotlight-size) circle at var(--spotlight-x) var(--spotlight-y),
            var(--spotlight-from),
            var(--spotlight-via),
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: var(--spotlight-opacity);
          pointer-events: none;
          transition: opacity 0.3s;
        }
      `}</style>
      
      {children}
    </div>
  )
} 