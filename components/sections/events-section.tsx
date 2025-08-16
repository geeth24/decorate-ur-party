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
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Events We Decorate</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            From intimate gatherings to grand celebrations, we've got you covered
          </p>
        </div>
        <Tabs defaultValue="birthdays" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {events.map((event) => (
              <TabsTrigger key={event.value} value={event.value}>
                {event.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {events.map((event) => (
            <TabsContent key={event.value} value={event.value} className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/hero-bg.webp"
                    alt={`${event.title} decoration`}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                  <ul className="grid gap-2">
                    {event.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
