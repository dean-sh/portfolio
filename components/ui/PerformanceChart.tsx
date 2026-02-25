'use client';

import { PointerEvent, useMemo, useState } from 'react';

type ChartPoint = {
  month: string;
  value: number;
};

type PerformanceChartProps = {
  data: ChartPoint[];
};

const shortMonthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
const longMonthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const parseMonthString = (input: string) => {
  const [year, month] = input.split('-').map((part) => Number(part));
  if (Number.isFinite(year) && Number.isFinite(month)) {
    return new Date(year, Math.max(0, month - 1), 1);
  }
  return new Date(input);
};

const formatMonth = (value: string, variant: 'short' | 'long' = 'short') => {
  const parsed = parseMonthString(value);
  return (variant === 'short' ? shortMonthFormatter : longMonthFormatter).format(parsed);
};

const axisLabelClasses = 'text-sm font-semibold fill-current text-muted-foreground tracking-wider';
const monthLabelClasses = 'text-sm font-bold fill-current text-foreground uppercase tracking-wider';

export function PerformanceChart({ data }: PerformanceChartProps) {
  const normalized = useMemo(
    () => data.map((point) => ({ ...point, value: Number(point.value) || 0 })),
    [data],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  if (normalized.length === 0) {
    return null;
  }

  const width = 640;
  const height = 320;
  const margin = { top: 24, right: 32, bottom: 48, left: 56 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const values = normalized.map((point) => point.value);
  const minBase = Math.min(...values);
  const maxBase = Math.max(...values);
  const padding = (maxBase - minBase || 1) * 0.2;
  const minValue = minBase - padding;
  const maxValue = maxBase + padding;
  const valueRange = maxValue - minValue || 1;

  const points = normalized.map((point, index) => {
    const ratio = normalized.length === 1 ? 0.5 : index / (normalized.length - 1);
    const x = margin.left + ratio * innerWidth;
    const y = margin.top + ((maxValue - point.value) / valueRange) * innerHeight;
    return { ...point, x, y };
  });

  const effectiveIndex = clamp(activeIndex || points.length - 1, 0, points.length - 1);
  const activePoint = points[effectiveIndex];
  const baselineY = margin.top + innerHeight;

  const linePath = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  const areaPath = [
    `M ${points[0].x} ${baselineY}`,
    ...points.map((point) => `L ${point.x} ${point.y}`),
    `L ${points[points.length - 1].x} ${baselineY}`,
    'Z',
  ].join(' ');

  const yTickCount = 4;
  const yTicks = Array.from({ length: yTickCount }, (_, index) =>
    minValue + (valueRange * index) / (yTickCount - 1 || 1),
  );

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    const { left } = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - left - margin.left;
    const ratio = relativeX / innerWidth;
    const nextIndex = Math.round(ratio * (points.length - 1));
    setActiveIndex(clamp(nextIndex, 0, points.length - 1));
  };

  const handlePointerLeave = () => {
    setActiveIndex(0);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border bg-muted p-6">
      <div className="relative flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Portfolio nMAE</p>
          <p className="text-5xl font-bold text-foreground">
            {activePoint.value.toFixed(1)}%
          </p>
        </div>
        <div className="rounded-full border px-4 py-1 text-sm text-muted-foreground">
          {formatMonth(activePoint.month, 'long')}
        </div>
      </div>

      <div className="relative mt-6">
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label="Monthly nMAE trend"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="touch-pan-y"
        >
          <defs>
            <linearGradient id="performance-area" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--foreground) / 0.15)" />
              <stop offset="100%" stopColor="hsl(var(--foreground) / 0.02)" />
            </linearGradient>
            <linearGradient id="performance-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--foreground) / 0.7)" />
              <stop offset="100%" stopColor="hsl(var(--foreground) / 0.4)" />
            </linearGradient>
          </defs>

          {yTicks.map((tick) => {
            const y = margin.top + ((maxValue - tick) / valueRange) * innerHeight;
            return (
              <g key={tick}>
                <line
                  x1={margin.left}
                  x2={width - margin.right}
                  y1={y}
                  y2={y}
                  stroke="hsl(var(--border))"
                  strokeDasharray="2 6"
                />
                <text x={margin.left - 12} y={y + 4} textAnchor="end" className={axisLabelClasses}>
                  {tick.toFixed(1)}%
                </text>
              </g>
            );
          })}

          <path d={areaPath} fill="url(#performance-area)" />
          <path d={linePath} fill="none" stroke="url(#performance-line)" strokeWidth={3} strokeLinecap="round" />

          {points.map((point, index) => (
            <circle
              key={point.month}
              cx={point.x}
              cy={point.y}
              r={index === activeIndex ? 5 : 3}
              fill={index === activeIndex ? 'hsl(var(--foreground))' : 'hsl(var(--background))'}
              stroke="hsl(var(--foreground))"
              strokeWidth={index === activeIndex ? 3 : 2}
              className="transition-all duration-200"
            />
          ))}

          {activePoint && (
            <line
              x1={activePoint.x}
              x2={activePoint.x}
              y1={margin.top}
              y2={baselineY}
              stroke="hsl(var(--foreground) / 0.2)"
              strokeDasharray="6 6"
            />
          )}

          {(() => {
            const axisY = height - margin.bottom + 4;
            const tickHeight = 18;
            return (
              <g>
                <line
                  x1={margin.left}
                  x2={width - margin.right}
                  y1={axisY}
                  y2={axisY}
                  stroke="hsl(var(--border))"
                  strokeWidth={1.5}
                />
                {points.map((point) => (
                  <g key={`${point.month}-tick`}>
                    <line
                      x1={point.x}
                      x2={point.x}
                      y1={axisY}
                      y2={axisY - tickHeight}
                      stroke="hsl(var(--foreground) / 0.5)"
                      strokeWidth={3}
                      strokeLinecap="round"
                    />
                    <text x={point.x} y={axisY + 26} textAnchor="middle" className={monthLabelClasses}>
                      {formatMonth(point.month)}
                    </text>
                  </g>
                ))}
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}
