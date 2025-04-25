'use client'

import { createContext, useContext } from 'react'
import { cn } from '@/lib/utils'

const GridPatternContext = createContext<{
  size: number
  offsetX: number
  offsetY: number
}>({
  size: 32,
  offsetX: 0,
  offsetY: 0,
})

export function GridPattern({
  className,
  size = 32,
  offsetX = 0,
  offsetY = 0,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  size?: number
  offsetX?: number
  offsetY?: number
}) {
  return (
    <svg
      className={cn('absolute inset-0 h-full w-full', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      patternUnits="userSpaceOnUse"
      patternTransform={`translate(${offsetX} ${offsetY})`}
      style={{ position: 'absolute' }}
      {...props}
    >
      <GridPatternContext.Provider value={{ size, offsetX, offsetY }}>
        {children}
      </GridPatternContext.Provider>
    </svg>
  )
}

export interface GridPatternBlockProps extends React.ComponentPropsWithoutRef<'rect'> {
  row?: number
  column?: number
}

GridPattern.Block = function GridPatternBlock({
  className,
  row = 0,
  column = 0,
  ...props
}: GridPatternBlockProps) {
  const { size } = useContext(GridPatternContext)

  return (
    <rect
      className={cn(className)}
      x={row * size}
      y={column * size}
      width={size}
      height={size}
      {...props}
    />
  )
} 