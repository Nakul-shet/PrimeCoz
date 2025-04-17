"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CreatorSkeletonProps {
  className?: string
}

export default function CreatorSkeleton({ className }: CreatorSkeletonProps) {
  return (
    <motion.div 
      className={cn("flex flex-col overflow-hidden rounded-lg bg-white shadow-md", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image placeholder */}
      <Skeleton className="h-40 w-full bg-gray-200" />
      
      {/* Content area */}
      <div className="p-4 space-y-3">
        {/* Name */}
        <Skeleton className="h-6 w-3/4" />
        
        {/* Handle */}
        <Skeleton className="h-4 w-1/2" />
        
        {/* Category and views */}
        <div className="flex justify-between pt-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    </motion.div>
  )
}

export function CreatorSkeletonGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {[...Array(5)].map((_, i) => (
        <CreatorSkeleton 
          key={i} 
          className="animate-pulse" 
        />
      ))}
    </div>
  )
}