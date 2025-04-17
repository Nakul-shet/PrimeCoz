"use client"

import React from "react"
import ContentLoader from "@/components/content-loader"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CreatorSkeletonDemo, 
  TestimonialSkeletonDemo, 
  FeatureSkeletonDemo,
  StatsSkeletonDemo
} from "@/components/demos/skeleton-demos"

export default function LoadingDemo() {
  const [isLoading, setIsLoading] = React.useState(true)
  
  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 0)
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Full Page Loading Animation</h2>
        <p className="text-gray-600 text-center max-w-2xl mb-6">
          This demo shows a full-page content loader with animated skeletons that display while content is loading.
        </p>
        <Button 
          onClick={simulateLoading}
          disabled={isLoading}
          className="bg-teal-600 hover:bg-teal-700 text-white"
        >
          {isLoading ? "Loading..." : "Simulate Full Page Loading"}
        </Button>
      </div>
      
      <ContentLoader isLoading={isLoading} type="full">
        <div className="py-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Content Loaded Successfully!</h2>
          <p className="text-gray-600">
            You can click the button above to see the animated content loading skeletons again.
            This demo shows how you can use these loading states in your application.
          </p>
        </div>
      </ContentLoader>
      
      <div className="mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Individual Skeleton Components</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Below you can see demos of individual skeleton components that can be used throughout the application.
        </p>
        
        <Tabs defaultValue="creators" className="w-full">
          <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="creators">Creators</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>
          
          <TabsContent value="creators" className="mt-4">
            <CreatorSkeletonDemo />
          </TabsContent>
          
          <TabsContent value="testimonials" className="mt-4">
            <TestimonialSkeletonDemo />
          </TabsContent>
          
          <TabsContent value="features" className="mt-4">
            <FeatureSkeletonDemo />
          </TabsContent>
          
          <TabsContent value="stats" className="mt-4">
            <StatsSkeletonDemo />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}