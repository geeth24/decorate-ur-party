import { PartyPopper, Flower2, PanelsTopLeft, Image as ImageIcon, Table2, Sparkles } from "lucide-react"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Balloon Decorations",
    description: "Balloon arches, walls, and themed installations to add color and fun to your events.",
    icon: <PartyPopper className="h-10 w-10 text-primary" />
  },
  {
    title: "Floral Arrangements",
    description: "Beautiful centerpieces, backdrops, and bridal bouquets with fresh and artificial flowers.",
    icon: <Flower2 className="h-10 w-10 text-primary" />
  },
  {
    title: "Theme-Based Decor",
    description: "Custom themes for any occasion, bringing your vision to life with creative designs.",
    icon: <PanelsTopLeft className="h-10 w-10 text-primary" />
  },
  {
    title: "Custom Backdrops & Props",
    description: "Stunning backdrops and props tailored to your event theme and venue.",
    icon: <ImageIcon className="h-10 w-10 text-primary" />
  },
  {
    title: "Table Setup & Centerpieces",
    description: "Elegant table arrangements that complement your event's style and atmosphere.",
    icon: <Table2 className="h-10 w-10 text-primary" />
  },
  {
    title: "LED & Neon Signage",
    description: "Custom LED and neon signs to add a modern touch to your celebration.",
    icon: <Sparkles className="h-10 w-10 text-primary" />
  }
]

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full p-4 bg-primary/10 text-primary">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-16 md:py-24">
      <div className="container space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Decoration Services</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We offer a wide range of decoration services to make your events special
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
