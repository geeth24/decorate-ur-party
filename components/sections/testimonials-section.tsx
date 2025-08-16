import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
