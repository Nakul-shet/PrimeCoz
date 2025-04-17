"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BackgroundVideoProps {
  videoSrc: string;
  fallbackImage?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

export default function BackgroundVideo({
  videoSrc,
  fallbackImage = '',
  overlayColor = '#000',
  overlayOpacity = 0.4,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-full"
      >
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {fallbackImage && (
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${fallbackImage})`,
              display: 'none'
            }}
          />
        )}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      </motion.div>
    </div>
  );
}