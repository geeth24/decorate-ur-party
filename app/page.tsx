import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Decorate Urparty Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Decorate Urparty</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section id="services" className="bg-muted py-16 md:py-24">
          <div className="container space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Decoration Services</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We offer a wide range of decoration services to make your events special
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Balloon Decorations"
                description="Balloon arches, walls, and themed installations to add color and fun to your events."
                icon="/placeholder.svg?height=80&width=80"
              />
              <ServiceCard
                title="Floral Arrangements"
                description="Beautiful centerpieces, backdrops, and bridal bouquets with fresh and artificial flowers."
                icon="/placeholder.svg?height=80&width=80"
              />
              <ServiceCard
                title="Theme-Based Decor"
                description="Custom themes for any occasion, bringing your vision to life with creative designs."
                icon="/placeholder.svg?height=80&width=80"
              />
              <ServiceCard
                title="Custom Backdrops & Props"
                description="Stunning backdrops and props tailored to your event theme and venue."
                icon="/placeholder.svg?height=80&width=80"
              />
              <ServiceCard
                title="Table Setup & Centerpieces"
                description="Elegant table arrangements that complement your event's style and atmosphere."
                icon="/placeholder.svg?height=80&width=80"
              />
              <ServiceCard
                title="LED & Neon Signage"
                description="Custom LED and neon signs to add a modern touch to your celebration."
                icon="/placeholder.svg?height=80&width=80"
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
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
                <TabsTrigger value="birthdays">Birthdays</TabsTrigger>
                <TabsTrigger value="weddings">Weddings</TabsTrigger>
                <TabsTrigger value="baby">Baby Events</TabsTrigger>
                <TabsTrigger value="special">Special Occasions</TabsTrigger>
              </TabsList>
              <TabsContent value="birthdays" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Birthday decoration"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Birthday Celebrations</h3>
                    <p className="text-muted-foreground">
                      We create magical birthday experiences for all ages with custom themes, balloon decorations, and
                      personalized setups that make your celebration truly special.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Custom theme decorations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Balloon arrangements and sculptures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Personalized backdrops and photo areas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="weddings" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Wedding decoration"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Wedding Decorations</h3>
                    <p className="text-muted-foreground">
                      Transform your wedding venue into a romantic paradise with our elegant floral arrangements,
                      stunning backdrops, and carefully curated decor elements.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Ceremony and reception decor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Bridal bouquets and floral arrangements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Entrance and stage decorations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="baby" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Baby shower decoration"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Baby Celebrations</h3>
                    <p className="text-muted-foreground">
                      Celebrate new life with our adorable baby shower and Annaprashan (first feeding ceremony)
                      decorations that create a joyful atmosphere for these precious milestones.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Baby shower themes and setups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Gender reveal decorations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Traditional ceremony decorations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="special" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Special event decoration"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Special Occasions</h3>
                    <p className="text-muted-foreground">
                      From house warmings to corporate events and seasonal celebrations, we provide custom decorations
                      that perfectly match the occasion and create a memorable atmosphere.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>House warming ceremonies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Corporate event styling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>Festival and holiday decorations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-muted py-16 md:py-24">
          <div className="container space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse through our portfolio of stunning event decorations
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Gallery+${i + 1}`}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Don't just take our word for it - hear from our happy customers
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                role="Wedding Client"
                testimonial="Decorate Urparty transformed our wedding venue into an absolute dream! The floral arrangements and backdrop were exactly what we envisioned. Highly recommend their services!"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Priya Patel"
                role="Baby Shower Host"
                testimonial="The team did an amazing job with my sister's baby shower. The balloon decorations were stunning and everyone loved the custom backdrop. Will definitely use their services again!"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Michael Rodriguez"
                role="Corporate Event Manager"
                testimonial="We've used Decorate Urparty for multiple corporate events and they never disappoint. Professional, creative, and always on time. They make our job so much easier!"
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Ready to make your event special? Contact us for a free consultation and quote.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Locations</p>
                      <p className="text-sm text-muted-foreground">Serving New Jersey and New York</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">(732) 491-1541</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@decorateurparty.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Request a Quote</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-type" className="text-sm font-medium">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="" disabled selected>
                        Select event type
                      </option>
                      <option value="birthday">Birthday Party</option>
                      <option value="wedding">Wedding</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="housewarming">House Warming</option>
                      <option value="annaprashan">Annaprashan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your event and decoration needs"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Decorate Urparty Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Decorate Urparty</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making your events memorable with our creative decoration services in New Jersey and New York.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Balloon Decorations</li>
                <li>Floral Arrangements</li>
                <li>Theme-Based Decor</li>
                <li>Custom Backdrops & Props</li>
                <li>Table Setup & Centerpieces</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Events</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Birthday Parties</li>
                <li>Weddings</li>
                <li>Baby Showers</li>
                <li>Corporate Events</li>
                <li>House Warming</li>
                <li>Annaprashan</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(732) 491-1541</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@decorateurparty.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Serving NJ and NY</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Decorate Urparty. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full p-2 bg-primary/10">
            <Image
              src={icon || "/placeholder.svg"}
              alt={title}
              width={80}
              height={80}
              className="h-12 w-12 object-contain"
            />
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

function TestimonialCard({ name, role, testimonial, image }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={50}
              height={50}
              className="rounded-full h-12 w-12 object-cover"
            />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
          <p className="text-muted-foreground italic">"{testimonial}"</p>
          <div className="flex text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

