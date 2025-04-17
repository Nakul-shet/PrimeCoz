"use client"

import React from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import { CreatorSkeletonGrid } from "@/components/skeletons/creator-skeleton"
import { TestimonialSkeletonGrid } from "@/components/skeletons/testimonial-skeleton"
import { FeatureSkeletonGrid } from "@/components/skeletons/feature-skeleton"
import StatsSkeleton from "@/components/skeletons/stats-skeleton"

interface ContentLoaderProps {
  isLoading: boolean
  children: React.ReactNode
  type?: "full" | "partial"
  loadingTime?: number
}

export default function ContentLoader({ 
  isLoading, 
  children, 
  type = "full",
  loadingTime = 1500 
}: ContentLoaderProps) {
  const [showContent, setShowContent] = React.useState(!isLoading)
  
  React.useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, loadingTime)
      
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isLoading, loadingTime])
  
  if (type === "partial") {
    return (
      <>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <Skeleton className="h-8 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-10" />
            
            {/* Placeholder for the specific content */}
            <div className="py-4">
              {children}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </>
    )
  }
  
  return (
    <>
      {!showContent ? (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-10 py-8"
        >
          {/* Hero section placeholder */}
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <Skeleton key={i} className="aspect-square rounded-full" />
                ))}
              </div>
              
              <div className="space-y-6">
                <Skeleton className="h-12 w-5/6 mb-4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-10 w-40" />
                <StatsSkeleton />
              </div>
            </div>
          </div>
          
          {/* Features placeholder */}
          <div className="container mx-auto px-4 md:px-6 py-12">
            <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
            <FeatureSkeletonGrid />
          </div>
          
          {/* Creators placeholder */}
          <div className="container mx-auto px-4 md:px-6 py-12">
            <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
            <CreatorSkeletonGrid />
          </div>
          
          {/* Testimonials placeholder */}
          <div className="container mx-auto px-4 md:px-6 py-12">
            <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
            <TestimonialSkeletonGrid />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}