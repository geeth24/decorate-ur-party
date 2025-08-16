"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const events = [
  {
    value: "birthdays",
    label: "Birthdays",
    title: "Birthday Celebrations",
    description: "We create magical birthday experiences for all ages with custom themes, balloon decorations, and personalized setups that make your celebration truly special.",
    features: [
      "Custom theme decorations",
      "Balloon arrangements and sculptures",
      "Personalized backdrops and photo areas"
    ]
  },
  {
    value: "weddings",
    label: "Weddings",
    title: "Wedding Decorations",
    description: "Transform your wedding venue into a romantic paradise with our elegant floral arrangements, stunning backdrops, and carefully curated decor elements.",
    features: [
      "Ceremony and reception decor",
      "Bridal bouquets and floral arrangements",
      "Entrance and stage decorations"
    ]
  },
  {
    value: "baby",
    label: "Baby Events",
    title: "Baby Celebrations",
    description: "Celebrate new life with our adorable baby shower and Annaprashan (first feeding ceremony) decorations that create a joyful atmosphere for these precious milestones.",
    features: [
      "Baby shower themes and setups",
      "Gender reveal decorations",
      "Traditional ceremony decorations"
    ]
  },
  {
    value: "special",
    label: "Special Occasions",
    title: "Special Occasions",
    description: "From house warmings to corporate events and seasonal celebrations, we provide custom decorations that perfectly match the occasion and create a memorable atmosphere.",
    features: [
      "House warming ceremonies",
      "Corporate event styling",
      "Festival and holiday decorations"
    ]
  }
]

export default function EventsSection() {
  const containerVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
  return (
    <section id="events" className="relative py-16 md:py-24">
      <div className="bg-aurora-subtle" />
      <div className="container relative space-y-12">
        <motion.div className="text-center space-y-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="section-title section-title-underline">Events We Decorate</h2>
          <p className="section-subtitle">From intimate gatherings to grand celebrations, we've got you covered</p>
        </motion.div>
        <Tabs defaultValue="birthdays" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 rounded-xl shadow-sm">
            {events.map((event) => (
              <TabsTrigger key={event.value} value={event.value}>
                {event.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {events.map((event) => (
            <TabsContent key={event.value} value={event.value} className="mt-6">
              <motion.div className="grid gap-6 md:grid-cols-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <motion.div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-border image-shine" variants={itemVariants}>
                  <Image src="/hero-bg.webp" alt={`${event.title} decoration`} fill className="object-cover transition-all hover:scale-105" />
                </motion.div>
                <motion.div className="flex flex-col justify-center space-y-4" variants={itemVariants}>
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                  <ul className="grid gap-2">
                    {event.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary float-slow" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
