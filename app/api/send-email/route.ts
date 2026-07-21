import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { render } from "@react-email/render";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  eventType: z.string().min(1, 'Event type is required'),
  message: z.string().min(1, 'Message is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const validatedData = contactSchema.parse(body)
    
    const emailHtml = await render(ContactEmail({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      eventType: validatedData.eventType,
      message: validatedData.message,
    }))

    const { data, error } = await resend.emails.send({
      from: 'Decorate Ur Party <inquiry@contact.decorateurparty.com>',
      to: ['info@decorateurparty.com'],
      subject: `New Inquiry Request - ${validatedData.eventType}`,
      html: emailHtml,
      replyTo: validatedData.email,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
