"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  textColor?: string;
}

function AnimatedStat({ value, suffix = '', prefix = '', label, duration = 2, textColor = 'text-white' }: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Use different easing functions based on the value size
        let easedProgress;
        if (value > 1000) {
          // Ease-out cubic for large numbers to slow down at the end
          easedProgress = 1 - Math.pow(1 - progress, 3);
        } else if (value > 100) {
          // Ease-out quad
          easedProgress = 1 - Math.pow(1 - progress, 2);
        } else {
          // Linear for small numbers
          easedProgress = progress;
        }
        
        setCount(Math.floor(easedProgress * value));
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };
      
      animationFrameId = requestAnimationFrame(step);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [inView, value, duration]);

  return (
    <motion.div 
      ref={ref}
      className="text-center text-white"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`text-3xl font-bold ${textColor}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm">{label}</div>
    </motion.div>
  );
}

interface AnimatedStatsRowProps {
  stats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    textColor?: string;
  }>;
  className?: string;
}

export default function AnimatedStatsRow({ stats, className = "" }: AnimatedStatsRowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className={`p-6 rounded-lg shadow-lg backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 ${className}`}
    >
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <AnimatedStat
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            label={stat.label}
            textColor={stat.textColor}
            duration={1.5 + index * 0.2} // Stagger the animations
          />
        ))}
      </div>
    </motion.div>
  );
}