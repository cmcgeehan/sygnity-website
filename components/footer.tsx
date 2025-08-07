import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/avelaWordmark.png" 
                alt="Avela Therapy" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-cream/80 mb-4 tracking-wide">
              Professional mental health services for adolescents, adults, and families throughout Florida.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                            <Link href="tel:+15616142857" className="hover:text-blush-pink transition-colors tracking-wider">
              (561) 614-2857
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link href="mailto:chris.gamer@thisiswellness.com" className="hover:text-blush-pink transition-colors tracking-wider">
                  chris.gamer@thisiswellness.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="tracking-wider">serving all of florida</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 tracking-wider all-lowercase">services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/adolescent-therapy" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">adolescent therapy</Link></li>
              <li><Link href="/services/substance-abuse" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">substance use treatment</Link></li>
              <li><Link href="/services/medication-management" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">medication management</Link></li>
              <li><Link href="/services/family-therapy" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">family therapy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 tracking-wider all-lowercase">quick links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">about us</Link></li>
              <li><Link href="/for-parents" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">for parents</Link></li>
              <li><Link href="/faq" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">faq</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">contact</Link></li>
              <li><Link href="/blog" className="text-cream/80 hover:text-blush-pink transition-colors tracking-wider all-lowercase">blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 tracking-wider all-lowercase">crisis resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong className="tracking-wider all-lowercase">national suicide prevention lifeline:</strong>
                <br />
                <Link href="tel:988" className="text-dusty-blue hover:text-blush-pink transition-colors tracking-wider">988</Link>
              </li>
              <li>
                <strong className="tracking-wider all-lowercase">crisis text line:</strong>
                <br />
                <span className="tracking-wider all-lowercase">text HOME to 741741</span>
              </li>
              <li>
                <strong className="tracking-wider all-lowercase">emergency:</strong>
                <br />
                <Link href="tel:911" className="text-blush-pink hover:text-dusty-blue transition-colors tracking-wider">911</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dusty-blue/20 pt-8 mt-8 text-center text-sm text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} Avela Therapy. All rights reserved. |
            <Link href="/privacy" className="hover:text-blush-pink ml-1 transition-colors tracking-wider all-lowercase">privacy policy</Link> |
            <Link href="/terms" className="hover:text-blush-pink ml-1 transition-colors tracking-wider all-lowercase">terms of service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
