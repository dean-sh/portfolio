'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle: string;
  icon: React.ReactNode;
  color: 'energy' | 'solar' | 'wind' | 'grid';
  delay: number;
}

function MetricCard({ title, value, unit, subtitle, icon, color, delay }: MetricCardProps) {
  const colorClasses = {
    energy: 'border-energy-600/30 shadow-energy-glow/50 text-energy-400',
    solar: 'border-solar-500/30 shadow-solar-glow/50 text-solar-400',
    wind: 'border-wind-500/30 shadow-wind-glow/50 text-wind-400',
    grid: 'border-grid-500/30 shadow-professional/50 text-grid-400'
  };

  const bgClasses = {
    energy: 'from-energy-600/5 to-energy-800/5',
    solar: 'from-solar-500/5 to-solar-600/5', 
    wind: 'from-wind-500/5 to-wind-600/5',
    grid: 'from-grid-500/5 to-grid-600/5'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`
        glass-card rounded-2xl p-6 border-2 ${colorClasses[color]} 
        bg-gradient-to-br ${bgClasses[color]}
        hover:shadow-2xl transition-all duration-300 cursor-pointer
        relative overflow-hidden group
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl ${colorClasses[color]} bg-black/20 mb-4`}>
          {icon}
        </div>
        
        {/* Value */}
        <div className="mb-2">
          <span className="text-4xl font-bold text-dark-50">{value}</span>
          <span className={`text-lg font-medium ml-1 ${colorClasses[color]}`}>{unit}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-dark-100 mb-1">{title}</h3>
        
        {/* Subtitle */}
        <p className="text-sm text-dark-400">{subtitle}</p>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-dark-800 rounded-full h-1 overflow-hidden">
          <motion.div 
            className={`h-full bg-gradient-to-r ${colorClasses[color]}`}
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ duration: 1.5, delay: delay + 0.5 }}
          />
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-br ${bgClasses[color]} blur-xl -z-10
      `} />
    </motion.div>
  );
}

export default function EnergyMetrics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      title: "Wind Forecast Accuracy",
      value: "57",
      unit: "%",
      subtitle: "Improvement over baseline",
      color: 'wind' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Energy Cost Savings",
      value: "£50",
      unit: "/MWh",
      subtitle: "Through optimization algorithms",
      color: 'energy' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Solar Generation Model",
      value: "95",
      unit: "%",
      subtitle: "Prediction accuracy achieved",
      color: 'solar' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Grid Optimization",
      value: "30",
      unit: "%",
      subtitle: "MAPE improvement achieved",
      color: 'grid' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.title}
          {...metric}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
}