"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import CreatorSkeleton, { CreatorSkeletonGrid } from "@/components/skeletons/creator-skeleton"
import TestimonialSkeleton, { TestimonialSkeletonGrid } from "@/components/skeletons/testimonial-skeleton"
import FeatureSkeleton, { FeatureSkeletonGrid } from "@/components/skeletons/feature-skeleton"
import StatsSkeleton from "@/components/skeletons/stats-skeleton"
import ContentLoader from "@/components/content-loader"

export function CreatorSkeletonDemo() {
  const [isLoading, setIsLoading] = React.useState(false)
  
  const toggleLoading = () => {
    setIsLoading(prev => !prev)
    if (!isLoading) {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-4">
        <Button 
          onClick={toggleLoading} 
          variant="outline"
          className="bg-teal-600 hover:bg-teal-700 text-white"
        >
          {isLoading ? "Reset" : "Show Creator Skeleton"}
        </Button>
      </div>
      
      {isLoading ? (
        <CreatorSkeletonGrid />
      ) : (
        <div className="border rounded-lg p-6 bg-white">
          <p className="text-center text-gray-500">Click the button above to see the creator skeleton animations</p>
        </div>
      )}
    </div>
  )
}

export function TestimonialSkeletonDemo() {
  const [isLoading, setIsLoading] = React.useState(false)
  
  const toggleLoading = () => {
    setIsLoading(prev => !prev)
    if (!isLoading) {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-4">
        <Button 
          onClick={toggleLoading} 
          variant="outline"
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          {isLoading ? "Reset" : "Show Testimonial Skeleton"}
        </Button>
      </div>
      
      {isLoading ? (
        <TestimonialSkeletonGrid />
      ) : (
        <div className="border rounded-lg p-6 bg-white">
          <p className="text-center text-gray-500">Click the button above to see the testimonial skeleton animations</p>
        </div>
      )}
    </div>
  )
}

export function FeatureSkeletonDemo() {
  const [isLoading, setIsLoading] = React.useState(false)
  
  const toggleLoading = () => {
    setIsLoading(prev => !prev)
    if (!isLoading) {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-4">
        <Button 
          onClick={toggleLoading} 
          variant="outline"
          className="bg-pink-600 hover:bg-pink-700 text-white"
        >
          {isLoading ? "Reset" : "Show Feature Skeleton"}
        </Button>
      </div>
      
      {isLoading ? (
        <FeatureSkeletonGrid />
      ) : (
        <div className="border rounded-lg p-6 bg-white">
          <p className="text-center text-gray-500">Click the button above to see the feature skeleton animations</p>
        </div>
      )}
    </div>
  )
}

export function StatsSkeletonDemo() {
  const [isLoading, setIsLoading] = React.useState(false)
  
  const toggleLoading = () => {
    setIsLoading(prev => !prev)
    if (!isLoading) {
      setTimeout(() => setIsLoading(false), 3000)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-4">
        <Button 
          onClick={toggleLoading} 
          variant="outline"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isLoading ? "Reset" : "Show Stats Skeleton"}
        </Button>
      </div>
      
      {isLoading ? (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-lg">
          <StatsSkeleton />
        </div>
      ) : (
        <div className="border rounded-lg p-6 bg-white">
          <p className="text-center text-gray-500">Click the button above to see the stats skeleton animations</p>
        </div>
      )}
    </div>
  )
}