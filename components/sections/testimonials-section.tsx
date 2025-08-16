"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Wedding Client",
    testimonial: "Decorate Urparty transformed our wedding venue into an absolute dream! The floral arrangements and backdrop were exactly what we envisioned. Highly recommend their services!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Priya Patel",
    role: "Baby Shower Host",
    testimonial: "The team did an amazing job with my sister's baby shower. The balloon decorations were stunning and everyone loved the custom backdrop. Will definitely use their services again!",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Rodriguez",
    role: "Corporate Event Manager",
    testimonial: "We've used Decorate Urparty for multiple corporate events and they never disappoint. Professional, creative, and always on time. They make our job so much easier!",
    image: "/placeholder.svg?height=100&width=100"
  }
]

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

function TestimonialCard({ name, role, testimonial, image }: TestimonialCardProps) {
  return (
    <Card className="hover-lift h-full ring-1 ring-border">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
          <p className="text-muted-foreground italic">"{testimonial}"</p>
          <div className="flex text-primary">
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

export default function TestimonialsSection() {
  const containerVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } } }
  const itemVariants = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
  return (
    <section id="testimonials" className="relative py-16 md:py-24">
      <div className="bg-aurora-subtle" />
      <div className="container relative space-y-12">
        <motion.div className="text-center space-y-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="section-title section-title-underline">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it — hear from our happy customers</p>
        </motion.div>
        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} className="rounded-xl" variants={itemVariants}>
              <TestimonialCard name={testimonial.name} role={testimonial.role} testimonial={testimonial.testimonial} image={testimonial.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
