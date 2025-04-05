import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

interface CreatorCardProps {
  name: string
  handle: string
  category: string
  views: string
  image: string
}

export default function CreatorCard({ name, handle, category, views, image }: CreatorCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          width={300}
          height={400}
          alt={name}
          className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Badge className="absolute top-2 right-2 bg-orange-500">{category}</Badge>
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <div className="font-medium">{name}</div>
          <div className="text-sm opacity-90">{handle}</div>
          <div className="flex items-center mt-2 text-sm">
            <Eye className="h-3 w-3 mr-1" />
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

