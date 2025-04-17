"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { ChevronRight, Play, BarChart3, Users, TrendingUp, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnalyticsSection from "@/components/analytics-section"
import CreatorCard from "@/components/creator-card"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedText from "@/components/animated-text"
import AnimatedStatsRow from "@/components/animated-stats"
import ContentLoader from "@/components/content-loader"
import AnimatedImageGrid from "@/components/AnimatedImageGrid"
import { motion } from "framer-motion"

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    // Simulate loading time for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ContentLoader isLoading={isLoading} type="full">
      
      {/* Hero Section with Full-width Video Background */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Full-width background video */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full bg-gray-900">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute w-full h-full object-cover opacity-60"
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/influencer-bg.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative mx-auto lg:ml-0 w-full max-w-md order-1 lg:order-0">
              {/* Creator image grid with animations */}
              <AnimatedImageGrid />
            </div>
            
            <div className="space-y-6 order-0 lg:order-1 text-white">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="p-6 rounded-lg shadow-lg backdrop-blur-sm bg-gray-900/30 transform hover:scale-105 transition-transform duration-300 border border-gray-700/50"
              >
                <AnimatedText 
                  text="MaximiZe the power of engaging content to reach a wider audience."
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white"
                  highlightColor="text-teal-400"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="p-6 rounded-lg shadow-lg backdrop-blur-sm bg-gray-900/30 border border-gray-700/50"
              >
                <p className="text-lg md:text-xl text-white">
                  Primeco<span className="text-red-500">Z</span> brings small businesses and startups closer to their audiences with social media influencer driven content and reels.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold shadow-lg" 
                  onClick={() => router.push('/contact')}
                >
                  Get Started
                </Button>
              </motion.div>
              
              <AnimatedStatsRow 
                stats={[
                  { value: 500000, suffix: "+", label: "Daily Views", textColor: "text-teal-400" },
                  { value: 2500, suffix: "+", label: "Creators", textColor: "text-pink-500" },
                  { value: 85, suffix: "%+", label: "Engagement Rate", textColor: "text-indigo-400" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-600">Trusted by innovative brands</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Replace with actual brand logos from the screenshot */}
            <Image src="/logo-renee.png" width={100} height={40} alt="RENEE" />
            <Image src="/logo-gates.png" width={120} height={40} alt="Bill & Melinda Gates Foundation" />
            <Image src="/logo-coinswitch.png" width={120} height={40} alt="CoinSwitch" />
            <Image src="/logo-centuryply.png" width={120} height={40} alt="CenturyPly" />
            <Image src="/logo-coindcx.png" width={100} height={40} alt="CoinDCX" />
            <Image src="/logo-forever21.png" width={100} height={40} alt="Forever 21" />
            <Image src="/logo-groww.png" width={100} height={40} alt="Groww" />
            {/* Add more logos from the screenshot */}
          </div>
        </div>
      </section>

      {/* Features Section with Animations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="bg-teal-100 p-4 rounded-lg inline-block mb-4 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                Let Reels Do the Work for Your Business
              </h2>
            </motion.div>
            <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
              <span className="text-pink-500 font-semibold">"</span>
              Short videos that speak to your audience and drive engagement
              <span className="text-pink-500 font-semibold">"</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>,
                title: "Spotlight",
                description: "Show your products being used through real videos by creators, so people can easily see the features and benefits.",
                accentColor: "border-green-500"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>,
                title: "Hotspot",
                description: "Create time-limited story and reel content that creates urgency and FOMO. Our analytics show these get 3x more engagement.",
                accentColor: "border-blue-500"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>,
                title: "Strategy",
                description: "Turn views into sales with our conversion-optimized reel formats that include clear CTAs and tracking links.",
                accentColor: "border-orange-500"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>,
                title: "Analytics",
                description: "Keep an eye on your content's performance with simple dashboards showing views, engagement, and more.",
                accentColor: "border-purple-500"
              }
            ].map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                accentColor={feature.accentColor}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Creator Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Top Creators This Month</h2>
              <p className="mt-2 text-lg text-gray-600">
                Discover creators who are driving exceptional results for businesses like yours
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700 text-white">Browse All Creators</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <CreatorCard
              name="Alex Johnson"
              handle="@alexcreates"
              category="Tech"
              views="1.2M"
              image="/placeholder.svg?height=400&width=300"
            />
            <CreatorCard
              name="Sophia Lee"
              handle="@sophiastyle"
              category="Fashion"
              views="890K"
              image="/placeholder.svg?height=400&width=300"
            />
            <CreatorCard
              name="Marcus Chen"
              handle="@marcusfitness"
              category="Fitness"
              views="2.1M"
              image="/placeholder.svg?height=400&width=300"
            />
            <CreatorCard
              name="Priya Sharma"
              handle="@priyacooks"
              category="Food"
              views="1.5M"
              image="/placeholder.svg?height=400&width=300"
            />
            <CreatorCard
              name="Jordan Taylor"
              handle="@jordantech"
              category="Tech Reviews"
              views="950K"
              image="/placeholder.svg?height=400&width=300"
            />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Content Strategy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">Our Approach</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Data-Driven, Creator-Led Strategy</h2>
              <p className="text-lg text-gray-600 mb-6">
                At PrimecoZ, we believe that successful content starts with a deep understanding of what your audience
                actually wants to see. Our platform combines data analytics with creator authenticity.
              </p>
              <ul className="space-y-4">
                {[
                  "AI-powered content matching with your brand identity",
                  "Performance tracking across all creator posts",
                  "Audience demographic insights for targeted campaigns",
                  "Competitive analysis to stay ahead of trends",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-orange-100 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-teal-100 rounded-full"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Content Strategy"
                  width={500}
                  height={400}
                  alt="Content strategy illustration"
                  className="rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">87%</div>
                    <div className="text-sm text-gray-600">Higher Engagement</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">3.2x</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">No Fluff. Real Growth Results.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <TrendingUp className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold">Reach</h3>
                  </div>
                  <div className="text-5xl font-bold mb-2">100M+</div>
                  <div className="text-teal-100">Total Views</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      width={50}
                      height={50}
                      alt="Client"
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-medium">GrowCo Startup</div>
                      <div className="text-sm text-gray-500">200% increase in brand awareness</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold">Engagement</h3>
                  </div>
                  <div className="text-5xl font-bold mb-2">200M+</div>
                  <div className="text-orange-100">Total Interactions</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      width={50}
                      height={50}
                      alt="Client"
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-medium">TechFlow App</div>
                      <div className="text-sm text-gray-500">3.5x increase in app downloads</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
            What Our Clients Say About Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Jennifer Lopez"
              position="Marketing Director"
              company="StyleTech"
              image="/placeholder.svg?height=80&width=80"
              quote="We've seen a 300% increase in engagement since partnering with PrimecoZ. Their creator matching algorithm found us perfect partners that truly understand our brand voice."
            />
            <TestimonialCard
              name="Marcus Wong"
              position="Founder"
              company="Growify"
              image="/placeholder.svg?height=80&width=80"
              quote="The analytics dashboard has been a game-changer for our marketing strategy. We can now see exactly which content drives conversions and optimize accordingly."
            />
            <TestimonialCard
              name="Samantha Patel"
              position="Social Media Manager"
              company="EcoEssentials"
              image="/placeholder.svg?height=80&width=80"
              quote="As a sustainable brand, authenticity is everything to us. PrimecoZ connected us with creators who genuinely care about our mission, resulting in content that resonates deeply with our audience."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Powerful Creator Marketing Awaits</h2>
              <p className="text-lg text-teal-100 mb-6">
                Ready to grow? Be seen by the people who matter. Leverage our network of 2,500+ creators to amplify your
                brand's message. Whether you're a startup looking to build awareness or an established business aiming
                to reach new audiences, our platform has you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50"
                onClick={() => router.push('/contact')}
                >
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Join 500+ businesses already growing</h3>
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                />
                <Input
                  placeholder="Business Email"
                  className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                />
                <Input
                  placeholder="Company Name"
                  className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Start Free Trial</Button>
                <p className="text-xs text-center text-teal-100">No credit card required. 14-day free trial.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Showcase Horizontal */}
      <section className="py-12 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto pb-8 space-x-4 no-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex-none w-20 h-20 md:w-24 md:h-24 relative">
                <Image
                  src={`/placeholder.svg?height=100&width=100&text=${i}`}
                  width={100}
                  height={100}
                  alt={`Creator ${i}`}
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does PrimecoZ help businesses connect with creators?",
                  answer:
                    "Our platform uses AI matching technology to pair your business with creators who align with your brand values, target audience, and marketing goals. We handle all aspects of the relationship from discovery to payment and performance tracking.",
                },
                {
                  question: "What types of businesses can benefit from creator marketing?",
                  answer:
                    "Businesses of all sizes can benefit from creator marketing. Whether you're a startup looking to build brand awareness, a small business wanting to reach new customers, or an established company launching new products, our platform can help you achieve your goals.",
                },
                {
                  question: "How do you measure the success of creator campaigns?",
                  answer:
                    "Our comprehensive analytics dashboard tracks key metrics including views, engagement rate, click-through rate, conversion rate, and ROI. We provide real-time data so you can see exactly how your campaigns are performing and make data-driven decisions.",
                },
                {
                  question: "What makes PrimecoZ different from other creator marketing platforms?",
                  answer:
                    "Unlike other platforms, we focus exclusively on short-form video content that drives results. Our proprietary AI matching technology ensures authentic partnerships, and our analytics provide unparalleled insights into campaign performance.",
                },
                {
                  question: "Can I specify which creators I want to work with?",
                  answer:
                    "While our AI will recommend creators based on your brand and goals, you have full control over which creators you work with. You can browse our creator marketplace, filter by niche, audience demographics, and performance metrics.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      </ContentLoader>
    </div>
  )
}

