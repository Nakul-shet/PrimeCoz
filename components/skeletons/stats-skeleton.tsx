"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatsSkeletonProps {
  className?: string
  columns?: number
}

export default function StatsSkeleton({ className, columns = 3 }: StatsSkeletonProps) {
  return (
    <motion.div 
      className={cn("p-6 rounded-lg backdrop-blur-sm bg-gray-900/30 border border-gray-700/50", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`grid grid-cols-${columns} gap-4`}>
        {[...Array(columns)].map((_, i) => (
          <div key={i} className="text-center">
            {/* Stat value */}
            <Skeleton className="h-8 w-16 mx-auto mb-2" />
            
            {/* Stat label */}
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function AnimatedStatsSkeleton() {
  return (
    <StatsSkeleton className="animate-pulse" />
  )
}