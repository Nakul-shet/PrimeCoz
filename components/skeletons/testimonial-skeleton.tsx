"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialSkeletonProps {
  className?: string
}

export default function TestimonialSkeleton({ className }: TestimonialSkeletonProps) {
  return (
    <motion.div 
      className={cn("rounded-lg bg-white p-6 shadow-md", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote */}
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      
      {/* Person info */}
      <div className="flex items-center">
        {/* Avatar */}
        <Skeleton className="h-12 w-12 rounded-full mr-4" />
        
        <div>
          {/* Name */}
          <Skeleton className="h-5 w-32 mb-1" />
          
          {/* Position & company */}
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialSkeletonGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <TestimonialSkeleton 
          key={i} 
          className="animate-pulse" 
        />
      ))}
    </div>
  )
}