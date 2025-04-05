import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  image: string
  quote: string
}

export default function TestimonialCard({ name, position, company, image, quote }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-teal-500 mb-4 opacity-50" />
        <p className="text-gray-600 mb-6">"{quote}"</p>
        <div className="flex items-center">
          <Image src={image || "/placeholder.svg"} width={80} height={80} alt={name} className="rounded-full mr-4" />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{position}</div>
            <div className="text-sm font-medium text-teal-600">{company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

