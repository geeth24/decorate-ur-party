"use client"
import { motion } from "framer-motion"
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
    <Card className="card-bezel hover-lift h-full overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full p-4 bg-primary/10 text-primary ring-1 ring-primary/20 float-slow">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 }
    }
  }
  const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
  return (
    <section id="services" className="relative bg-muted/60 py-16 md:py-24">
      <div className="bg-aurora-subtle" />
      <div className="container relative space-y-12">
        <motion.div className="text-center space-y-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="section-title section-title-underline">Our Decoration Services</h2>
          <p className="section-subtitle">We offer a wide range of decoration services to make your events special</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} className="rounded-xl" variants={itemVariants}>
              <ServiceCard title={service.title} description={service.description} icon={service.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
