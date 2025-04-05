import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Image 
                src="https://cdn-icons-png.flaticon.com/128/6422/6422197.png" 
                alt="ToRoar Logo" 
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="font-bold text-xl">PrimecoZ</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {[
                      {
                        title: "Creator Marketplace",
                        href: "#",
                        description: "Find and collaborate with the perfect creators for your brand",
                      },
                      {
                        title: "Campaign Management",
                        href: "#",
                        description: "Plan, execute and track your creator marketing campaigns",
                      },
                      {
                        title: "Analytics Dashboard",
                        href: "#",
                        description: "Measure performance with comprehensive analytics",
                      },
                      {
                        title: "Content Library",
                        href: "#",
                        description: "Store and organize all your creator content in one place",
                      },
                    ].map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      {
                        title: "For Startups",
                        href: "#",
                        description: "Build brand awareness and reach new audiences",
                      },
                      {
                        title: "For Small Businesses",
                        href: "#",
                        description: "Drive local engagement and customer acquisition",
                      },
                      {
                        title: "For E-commerce",
                        href: "#",
                        description: "Boost product sales and conversions",
                      },
                      {
                        title: "For SaaS Companies",
                        href: "#",
                        description: "Increase demos and trial signups",
                      },
                    ].map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resources</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium">
            Sign In
          </Link>
          <Button className="bg-red-600 hover:bg-teal-700">Get Started</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#" className="text-lg font-medium">
                Platform
              </Link>
              <Link href="#" className="text-lg font-medium">
                Solutions
              </Link>
              <Link href="#" className="text-lg font-medium">
                Pricing
              </Link>
              <Link href="#" className="text-lg font-medium">
                Resources
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="#" className="text-sm font-medium">
                  Sign In
                </Link>
                <Button className="bg-blue-600 hover:bg-teal-700">Get Started</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

