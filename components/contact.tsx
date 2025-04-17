import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with us to learn how PrimecoZ can help your business reach wider audiences through influencer-driven content.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    WhatsApp Number
                  </label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your business and requirements" rows={4} />
                </div>
                
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Submit <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-yellow-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">WhatsApp Us</h3>
                <p className="mb-4">
                  Get quick responses to your queries by connecting with us on WhatsApp.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold">+91 98765 43210</span>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                  Chat on WhatsApp
                </Button>
              </div>
              
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">contact@primecoz.com</span>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <p className="mb-4">
                  Drop by our office for a face-to-face meeting.
                </p>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-600 p-2 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">
                    123 Business Avenue, Tech Park, <br />
                    Bengaluru, Karnataka 560001, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 mt-2">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const faqs = [
  {
    question: "How quickly can PrimecoZ start helping my business?",
    answer: "We can typically onboard new clients within 7-10 business days. After signing up, our team will schedule an initial consultation to understand your business goals and target audience."
  },
  {
    question: "What types of businesses do you typically work with?",
    answer: "We work with businesses of all sizes, from startups to established brands. Our clients span multiple industries including e-commerce, tech, finance, consumer goods, and more."
  },
  {
    question: "How do you ensure that creator content aligns with my brand?",
    answer: "We have a thorough onboarding process where we understand your brand guidelines, tone, and objectives. We then carefully match you with creators who align with your brand values and target audience."
  },
  {
    question: "What kind of results can I expect?",
    answer: "While results vary by industry and campaign objectives, our clients typically see significant improvements in brand awareness, engagement, and conversion rates. We provide detailed analytics throughout your campaign."
  }
]