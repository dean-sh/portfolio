'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MetricData {
  label: string;
  value: number;
  unit: string;
  color: string;
  trend: 'up' | 'down' | 'stable';
  percentage: number;
}

export default function EnergyDashboard() {
  const [metrics, setMetrics] = useState<MetricData[]>([
    { label: 'Portfolio Risk (VaR)', value: 3.2, unit: '%', color: 'red-400', trend: 'down', percentage: 25 },
    { label: 'Forecast Accuracy', value: 4.8, unit: '%NMAE', color: 'green-400', trend: 'down', percentage: 76 }
  ]);

  const [currentTime, setCurrentTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  
  // Forecast data for charts - Initialize with time-aware patterns
  const [forecastData, setForecastData] = useState(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const timeOffset = currentHour + currentMinute / 60;
    
    return {
      wind: Array.from({ length: 24 }, (_, i) => {
        const hour = (i + timeOffset) % 24;
        const baseWind = 400 + Math.sin(hour * 0.3) * 200;
        return {
          hour: i,
          forecast: Math.max(0, baseWind + Math.random() * 100),
          actual: i < 12 ? Math.max(0, baseWind * 0.9 + Math.random() * 80) : null
        };
      }),
      solar: Array.from({ length: 24 }, (_, i) => {
        const hour = (i + timeOffset) % 24;
        const solarBase = Math.max(0, 800 * Math.sin((hour - 6) * Math.PI / 12));
        return {
          hour: i,
          forecast: Math.max(0, solarBase + Math.random() * 100),
          actual: i < 12 ? Math.max(0, solarBase * 0.85 + Math.random() * 80) : null
        };
      })
    };
  });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  // Simulate real-time data updates with faster intervals and time-based changes
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      
      // Update metrics more frequently
      setMetrics(prev => prev.map(metric => {
        let newValue = metric.value;
        if (metric.label === 'Portfolio Risk (VaR)') {
          newValue = Math.max(0.5, Math.min(8.0, metric.value + (Math.random() - 0.5) * 0.3));
        } else if (metric.label === 'Forecast Accuracy') {
          newValue = Math.max(3.0, Math.min(7.0, metric.value + (Math.random() - 0.5) * 0.15));
        } else {
          newValue = metric.value + Math.floor(Math.random() * 30 - 15);
        }
        return {
          ...metric,
          value: newValue,
          percentage: Math.max(10, Math.min(95, metric.percentage + Math.floor(Math.random() * 10 - 5)))
        };
      }));

      // Update forecast data to simulate time progression
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const timeOffset = currentHour + currentMinute / 60;

      setForecastData(prev => ({
        wind: Array.from({ length: 24 }, (_, i) => {
          const hour = (i + timeOffset) % 24;
          const baseWind = 400 + Math.sin(hour * 0.3 + timeOffset * 0.1) * 200;
          const variance = Math.sin(timeOffset * 0.05) * 50;
          return {
            hour: i,
            forecast: Math.max(0, baseWind + variance + Math.random() * 100),
            actual: i < 12 ? Math.max(0, baseWind * 0.9 + variance * 0.8 + Math.random() * 80) : null
          };
        }),
        solar: Array.from({ length: 24 }, (_, i) => {
          const hour = (i + timeOffset) % 24;
          const solarBase = Math.max(0, 800 * Math.sin((hour - 6) * Math.PI / 12));
          const timeVariance = Math.sin(timeOffset * 0.08) * 100;
          return {
            hour: i,
            forecast: Math.max(0, solarBase + timeVariance + Math.random() * 100),
            actual: i < 12 ? Math.max(0, solarBase * 0.85 + timeVariance * 0.7 + Math.random() * 80) : null
          };
        })
      }));
    }, 1500); // Faster updates: every 1.5 seconds instead of 3

    return () => clearInterval(interval);
  }, [mounted]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7m0 0H7" />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10m0 0h10" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
          </svg>
        );
    }
  };

  const ForecastChart = ({ title, data, color, type }: { title: string, data: any[], color: string, type: 'wind' | 'solar' }) => {
    if (!mounted || !data || data.length === 0) return null;
    
    const maxValue = Math.max(...data.map(d => Math.max(d.forecast, d.actual || 0)));
    const strokeColor = color === 'wind-400' ? '#0ea5e9' : '#f59e0b';
    
    return (
      <div className="glass-card p-4 rounded-xl border border-dark-700/60 hover:border-energy-600/30 transition-all duration-300">
        <h4 className="text-sm font-semibold text-white mb-3">{title}</h4>
        <div className="relative h-32 bg-dark-900/50 rounded-lg p-3">
          <svg width="100%" height="100%" viewBox="0 0 300 110" className="overflow-visible">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="25" height="20" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Forecast line (dashed) */}
            <polyline
              points={data.map((d, i) => `${(i / 23) * 280 + 10},${95 - (d.forecast / maxValue) * 70}`).join(' ')}
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeDasharray="4,2"
              opacity="0.7"
            />
            
            {/* Actual line (solid) */}
            <polyline
              points={data.slice(0, 12).map((d, i) => `${(i / 23) * 280 + 10},${95 - ((d.actual || 0) / maxValue) * 70}`).join(' ')}
              fill="none"
              stroke={strokeColor}
              strokeWidth="2.5"
              opacity="1"
            />
            
            {/* Data points */}
            {data.slice(0, 12).map((d, i) => (
              <circle
                key={i}
                cx={(i / 23) * 280 + 10}
                cy={95 - ((d.actual || 0) / maxValue) * 70}
                r="2.5"
                fill={strokeColor}
                opacity="0.8"
              />
            ))}
          </svg>
          
          {/* Time labels - Dynamic based on current time */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-dark-400 px-2">
            {mounted && (() => {
              const now = new Date();
              const currentHour = now.getHours();
              const startTime = `${currentHour.toString().padStart(2, '0')}:00`;
              const midTime = `${((currentHour + 12) % 24).toString().padStart(2, '0')}:00`;
              const endTime = `${((currentHour + 24) % 24).toString().padStart(2, '0')}:00`;
              return (
                <>
                  <span>{startTime}</span>
                  <span>{midTime}</span>
                  <span>{endTime}</span>
                </>
              );
            })()}
            {!mounted && (
              <>
                <span>00:00</span>
                <span>12:00</span>
                <span>24:00</span>
              </>
            )}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-between mt-3 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-0.5 mr-2" style={{ backgroundColor: strokeColor, opacity: 0.7 }}></div>
            <span className="text-dark-200">Forecast</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0.5 mr-2" style={{ backgroundColor: strokeColor }}></div>
            <span className="text-dark-200">Actual</span>
          </div>
          <div className="text-dark-300">
            Max: {Math.round(maxValue)} MW
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card-readable rounded-3xl p-6 md:p-8 border border-dark-700/60 shadow-professional-lg w-full"
    >
      {/* Dashboard Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Energy Management Dashboard</h3>
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className="text-dark-200">
            {mounted ? currentTime : 'Loading...'} • Live Data
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-energy-400 rounded-full animate-pulse"></div>
            <span className="text-energy-400 font-medium">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Improved Layout: Stacked on Mobile, Side by Side on Desktop */}
      <div className="space-y-6">
        
        {/* Key Metrics Row */}
        <div className="">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Key Performance Metrics
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 rounded-xl border border-dark-700/60 hover:border-energy-600/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-dark-200 leading-tight">{metric.label}</span>
                  {getTrendIcon(metric.trend)}
                </div>
                
                <div className="mb-3">
                  <span className="text-2xl font-bold text-white">
                    {metric.label.includes('Risk') || metric.label.includes('Accuracy') 
                      ? metric.value.toFixed(1) 
                      : metric.value.toLocaleString()}
                  </span>
                  <span className="text-sm text-dark-300 ml-1">{metric.unit}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ 
                      backgroundColor: metric.color === 'red-400' ? '#f87171' : 
                                      metric.color === 'green-400' ? '#4ade80' :
                                      metric.color === 'wind-400' ? '#0ea5e9' : '#f59e0b'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-dark-400">{metric.percentage}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        {/* Generation Forecasts Section */}
        <div className="">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generation Forecasts
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ForecastChart 
              title="Wind Generation" 
              data={forecastData.wind} 
              color="wind-400" 
              type="wind" 
            />
            <ForecastChart 
              title="Solar Generation" 
              data={forecastData.solar} 
              color="solar-500" 
              type="solar" 
            />
          </div>
        </div>
        
      </div>

    </motion.div>
  );
}