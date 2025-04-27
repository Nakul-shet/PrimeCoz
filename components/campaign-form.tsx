"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Form Schema
const formSchema = z.object({
  // Sign Up Section
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
  
  // Business Details Section
  companyName: z.string().min(2),
  industry: z.string(),
  companySize: z.string(),
  website: z.string().url().optional(),
  
  // Campaign Details Section
  campaignName: z.string().min(2),
  campaignObjective: z.string(),
  targetAudience: z.string(),
  budget: z.string(),
  timeline: z.string(),
  
  // Influencer Details Section
  influencerType: z.string(),
  followerRange: z.string(),
  contentType: z.string(),
  platforms: z.string(),
  
  // Brand URLs Section
  websiteUrl: z.string().url(),
  socialMediaUrls: z.string(),
  productUrls: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type FormData = z.infer<typeof formSchema>

const steps = [
  { title: "Sign Up", description: "Create your account" },
  { title: "Business Details", description: "Tell us about your company" },
  { title: "Campaign Details", description: "Define your campaign goals" },
  { title: "Influencer Details", description: "Specify influencer requirements" },
  { title: "Brand URLs", description: "Add your brand's online presence" },
]

export default function CampaignForm() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      industry: "",
      companySize: "",
      website: "",
      campaignName: "",
      campaignObjective: "",
      targetAudience: "",
      budget: "",
      timeline: "",
      influencerType: "",
      followerRange: "",
      contentType: "",
      platforms: "",
      websiteUrl: "",
      socialMediaUrls: "",
      productUrls: "",
    },
    mode: "onChange",
  })

  const onSubmit = async (data: FormData) => {
    try {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        console.log(data)
        // Handle form submission
      }
    } catch (error) {
      console.error("Form validation error:", error)
    }
  }

  const handleNext = async () => {
    const fields = getCurrentStepFields(currentStep)
    const result = await form.trigger(fields)
    if (result) {
      setCurrentStep(currentStep + 1)
    }
  }

  const getCurrentStepFields = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 0:
        return ["email", "password", "confirmPassword"]
      case 1:
        return ["companyName", "industry", "companySize"]
      case 2:
        return ["campaignName", "campaignObjective", "targetAudience"]
      case 3:
        return ["influencerType", "contentType"]
      case 4:
        return ["websiteUrl", "socialMediaUrls", "productUrls"]
      default:
        return []
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">Create Influencer Marketing Campaign</h1>
        <Progress value={progress} className="h-2 bg-orange-100 [&>div]:bg-orange-500" />
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center"
            >
              <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors",
                    index < currentStep
                      ? "bg-primary text-primary-foreground"
                      : index === currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                {index + 1}
              </div>

              <div
                className={cn(
                  "text-sm text-center",
                  index <= currentStep ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              {currentStep === 0 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Size</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            {["1-10", "11-50", "51-200", "201-500", "500+"].map((size) => (
                              <FormItem key={size} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={size} />
                                </FormControl>
                                <FormLabel className="font-normal">{size} employees</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="campaignName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Campaign Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="campaignObjective"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Campaign Objective</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            {["Brand Awareness", "Lead Generation", "Sales", "App Downloads"].map((objective) => (
                              <FormItem key={objective} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={objective} />
                                </FormControl>
                                <FormLabel className="font-normal">{objective}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Audience</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="influencerType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Influencer Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            {["Micro", "Macro", "Mega", "Celebrity"].map((type) => (
                              <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={type} />
                                </FormControl>
                                <FormLabel className="font-normal">{type} Influencers</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            {["Instagram Posts", "Instagram Reels", "TikTok Videos", "YouTube Videos"].map((type) => (
                              <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={type} />
                                </FormControl>
                                <FormLabel className="font-normal">{type}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourwebsite.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="socialMediaUrls"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Social Media URLs</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Instagram: https://instagram.com/yourbrand&#10;Twitter: https://twitter.com/yourbrand"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productUrls"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product URLs</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="https://yourwebsite.com/product1&#10;https://yourwebsite.com/product2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="flex justify-between mt-6">
                {currentStep > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Previous
                  </Button>
                )}
                <Button 
                  type="button" 
                  className="ml-auto"
                  onClick={handleNext}
                >
                  {currentStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
} 