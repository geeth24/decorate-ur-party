'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Facebook, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  eventType: z.string().min(1, 'Event type is required'),
  message: z.string().min(1, 'Message is required'),
})

type FormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const validatedData = contactSchema.parse(formData)
      setErrors({})

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        console.error('Email error:', result.error)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {}
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        setSubmitStatus('error')
        console.error('Submission error:', error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-muted/60 py-16 md:py-24">
      <div className="bg-aurora-subtle" />
      <div className="container relative space-y-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div className="space-y-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <h2 className="section-title section-title-underline">Get in Touch</h2>
              <p className="section-subtitle">
                Ready to make your event special? Contact us for a free consultation and quote.
              </p>
            </motion.div>
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
          <motion.div className="rounded-xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
            <div className="space-y-4 rounded-xl ring-1 ring-border p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Request a Quote</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-md">
                <p className="text-primary text-sm">
                  Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-destructive text-sm">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full input-bezel px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                      errors.name ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full input-bezel px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                      errors.email ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full input-bezel px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                    errors.phone ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-destructive text-xs">{errors.phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="event-type" className="text-sm font-medium">
                  Event Type
                </label>
                <select
                  id="event-type"
                  value={formData.eventType}
                  onChange={(e) => handleInputChange('eventType', e.target.value)}
                  className={`w-full input-bezel px-3 py-2 text-sm ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                    errors.eventType ? 'border-destructive' : 'border-input'
                  }`}
                >
                  <option value="">Select event type</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="House Warming">House Warming</option>
                  <option value="Annaprashan">Annaprashan</option>
                  <option value="Other">Other</option>
                </select>
                {errors.eventType && (
                  <p className="text-destructive text-xs">{errors.eventType}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full min-h-[120px] input-bezel px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                    errors.message ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Tell us about your event and decoration needs"
                />
                {errors.message && (
                  <p className="text-destructive text-xs">{errors.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
                variant="bezel"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
