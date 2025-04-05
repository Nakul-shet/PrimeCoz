import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Download, Info, ArrowUp } from "lucide-react"

export default function AnalyticsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Analytics for Every Business</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Track performance, measure ROI, and optimize your creator marketing strategy with our comprehensive
            analytics dashboard
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 md:p-8 shadow-lg border border-gray-100">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
              <TabsList className="bg-white">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="demographics">Demographics</TabsTrigger>
                <TabsTrigger value="conversion">Conversion</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Info className="mr-2 h-4 w-4" />
                  Help
                </Button>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.4M</div>
                    <div className="flex items-center text-xs text-green-600">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      <span>20.1% from last month</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8.7%</div>
                    <div className="flex items-center text-xs text-green-600">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      <span>1.2% from last month</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.2%</div>
                    <div className="flex items-center text-xs text-green-600">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      <span>0.5% from last month</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">ROI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">287%</div>
                    <div className="flex items-center text-xs text-green-600">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      <span>32% from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Views Over Time</CardTitle>
                    <CardDescription>Daily view count across all creator content</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <LineChart
                      data={[
                        { name: "Jan", value: 400000 },
                        { name: "Feb", value: 600000 },
                        { name: "Mar", value: 550000 },
                        { name: "Apr", value: 800000 },
                        { name: "May", value: 950000 },
                        { name: "Jun", value: 1200000 },
                        { name: "Jul", value: 1500000 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#14b8a6"]}
                      valueFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                    <CardDescription>Engagement by content type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={[
                        { name: "Reels", value: 85 },
                        { name: "Stories", value: 65 },
                        { name: "Posts", value: 45 },
                        { name: "Lives", value: 30 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#14b8a6"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Top Performing Creators</CardTitle>
                    <CardDescription>Based on engagement and conversion rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Alex Johnson",
                          handle: "@alexcreates",
                          engagement: "8.7%",
                          conversion: "4.2%",
                          roi: "320%",
                        },
                        {
                          name: "Sophia Lee",
                          handle: "@sophiastyle",
                          engagement: "7.9%",
                          conversion: "3.8%",
                          roi: "295%",
                        },
                        {
                          name: "Marcus Chen",
                          handle: "@marcusfitness",
                          engagement: "9.2%",
                          conversion: "3.5%",
                          roi: "275%",
                        },
                        {
                          name: "Priya Sharma",
                          handle: "@priyacooks",
                          engagement: "8.1%",
                          conversion: "3.3%",
                          roi: "260%",
                        },
                        {
                          name: "Alex Johnson",
                          handle: "@alexcreates",
                          engagement: "8.7%",
                          conversion: "4.2%",
                          roi: "320%",
                        },
                      ].map((creator, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                              {i + 1}
                            </div>
                            <div>
                              <div className="font-medium">{creator.name}</div>
                              <div className="text-sm text-gray-500">{creator.handle}</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-sm font-medium">{creator.engagement}</div>
                              <div className="text-xs text-gray-500">Engagement</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">{creator.conversion}</div>
                              <div className="text-xs text-gray-500">Conversion</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">{creator.roi}</div>
                              <div className="text-xs text-gray-500">ROI</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                    <CardDescription>Age distribution of engaged users</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <PieChart
                      data={[
                        { name: "18-24", value: 35 },
                        { name: "25-34", value: 40 },
                        { name: "35-44", value: 15 },
                        { name: "45+", value: 10 },
                      ]}
                      index="name"
                      categories={["value"]}
                      valueFormatter={(value) => `${value}%`}
                      colors={["#14b8a6", "#0d9488", "#0f766e", "#115e59"]}
                      className="h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement by Platform</CardTitle>
                    <CardDescription>Comparison of engagement rates across social platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={[
                        { name: "Instagram", value: 8.7 },
                        { name: "TikTok", value: 9.2 },
                        { name: "YouTube", value: 6.5 },
                        { name: "Facebook", value: 4.8 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#14b8a6"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Engagement by Time</CardTitle>
                    <CardDescription>Hourly engagement distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <LineChart
                      data={[
                        { name: "6am", value: 2.1 },
                        { name: "9am", value: 4.5 },
                        { name: "12pm", value: 6.2 },
                        { name: "3pm", value: 7.8 },
                        { name: "6pm", value: 9.4 },
                        { name: "9pm", value: 8.3 },
                        { name: "12am", value: 5.1 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#f97316"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Gender Distribution</CardTitle>
                    <CardDescription>Audience breakdown by gender</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <PieChart
                      data={[
                        { name: "Female", value: 58 },
                        { name: "Male", value: 39 },
                        { name: "Other", value: 3 },
                      ]}
                      index="name"
                      categories={["value"]}
                      valueFormatter={(value) => `${value}%`}
                      colors={["#f472b6", "#60a5fa", "#a78bfa"]}
                      className="h-full"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                    <CardDescription>Top regions by audience percentage</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={[
                        { name: "North America", value: 42 },
                        { name: "Europe", value: 28 },
                        { name: "Asia", value: 18 },
                        { name: "Australia", value: 7 },
                        { name: "Other", value: 5 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#14b8a6"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="conversion" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Conversion Funnel</CardTitle>
                    <CardDescription>User journey from view to purchase</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={[
                        { name: "Views", value: 100 },
                        { name: "Engagement", value: 42 },
                        { name: "Click", value: 18 },
                        { name: "Add to Cart", value: 8 },
                        { name: "Purchase", value: 3.2 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#14b8a6"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Conversion by Creator Type</CardTitle>
                    <CardDescription>Conversion rates by creator category</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <BarChart
                      data={[
                        { name: "Micro", value: 4.2 },
                        { name: "Macro", value: 3.1 },
                        { name: "Nano", value: 5.7 },
                        { name: "Celebrity", value: 2.3 },
                      ]}
                      categories={["value"]}
                      index="name"
                      colors={["#f97316"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

