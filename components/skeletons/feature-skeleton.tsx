"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureSkeletonProps {
  className?: string
}

export default function FeatureSkeleton({ className }: FeatureSkeletonProps) {
  return (
    <motion.div 
      className={cn("p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon placeholder */}
      <Skeleton className="h-12 w-12 rounded-md mb-4" />
      
      {/* Title */}
      <Skeleton className="h-7 w-3/4 mb-3" />
      
      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </motion.div>
  )
}

export function FeatureSkeletonGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <FeatureSkeleton 
          key={i}
          className="animate-pulse" 
        />
      ))}
    </div>
  )
}