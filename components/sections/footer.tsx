import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
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
  )
}
