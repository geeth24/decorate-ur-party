import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
  Tailwind,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  phone: string
  eventType: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  phone,
  eventType,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Request from {name} - {eventType}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#e11d48',
                'primary-foreground': '#0a0a0a',
                secondary: '#f5f5f5',
                'secondary-foreground': '#0a0a0a',
                muted: '#f5f5f5',
                'muted-foreground': '#737373',
                background: '#ffffff',
                foreground: '#0a0a0a',
                border: '#e5e5e5',
                input: '#d9d9d9',
                ring: '#c2c2c2',
                card: '#ffffff',
                'card-foreground': '#0a0a0a',
                destructive: '#ef4444',
                'destructive-foreground': '#fafafa',
                accent: '#f5f5f5',
                'accent-foreground': '#0a0a0a',
                popover: '#ffffff',
                'popover-foreground': '#0a0a0a',
              },
              fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Body className="bg-muted font-montserrat text-foreground">
          <Container className="mx-auto bg-background rounded-lg shadow-lg p-8 max-w-2xl">
            <Section className="text-center pb-8 border-b border-border">
              <Img
                src="https://decorateurparty.com/logo.png"
                width="120"
                height="120"
                alt="Decorate Ur Party"
                className="mx-auto mb-4"
              />
              <Heading className="text-3xl font-bold text-foreground font-playfair mb-2">
                🎉 Decorate Ur Party
              </Heading>
              <Text className="text-muted-foreground text-lg">
                New Inquiry Request
              </Text>
            </Section>

            <Section className="py-8">
              <Heading className="text-xl font-bold text-foreground mb-6 font-playfair">
                Contact Details
              </Heading>
              <Row className="mb-4">
                <Column className="pr-4">
                  <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Name
                  </Text>
                  <Text className="text-foreground font-medium">
                    {name}
                  </Text>
                </Column>
                <Column>
                  <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Email
                  </Text>
                  <Text className="text-foreground font-medium">
                    {email}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className="pr-4">
                  <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Phone
                  </Text>
                  <Text className="text-foreground font-medium">
                    {phone}
                  </Text>
                </Column>
                <Column>
                  <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Event Type
                  </Text>
                  <Text className="text-foreground font-medium">
                    {eventType}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr className="border-border my-8" />

            <Section className="py-8">
              <Heading className="text-xl font-bold text-foreground mb-6 font-playfair">
                Message
              </Heading>
              <Text className="text-foreground leading-relaxed p-4 bg-muted rounded-lg border border-border">
                {message}
              </Text>
            </Section>

            <Hr className="border-border my-8" />

            <Section className="text-center py-8 bg-muted rounded-lg">
              <Text className="text-muted-foreground text-sm leading-relaxed mb-4">
                This request was submitted through the Decorate Ur Party website.
                Please respond within 24 hours to provide the best service.
              </Text>
              <Text className="text-muted-foreground text-sm leading-relaxed">
                📍 Serving New Jersey and New York<br />
                📞 (732) 491-1541<br />
                ✉️ info@decorateurparty.com
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
