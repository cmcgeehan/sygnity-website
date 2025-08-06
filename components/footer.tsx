import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#20394c] text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sygnity Wellness</h3>
            <p className="text-gray-300 mb-4">
              Professional mental health services for adolescents, adults, and families throughout Florida.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                            <Link href="tel:+15616142857" className="hover:text-[#aedff7]">
              (561) 614-2857
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link href="mailto:info@sygnity-wellness.com" className="hover:text-[#aedff7]">
                  info@sygnity-wellness.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Serving all of Florida</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/adolescent-therapy" className="text-gray-300 hover:text-white">Adolescent Therapy</Link></li>
              <li><Link href="/services/substance-abuse" className="text-gray-300 hover:text-white">Substance Use Treatment</Link></li>
              <li><Link href="/services/medication-management" className="text-gray-300 hover:text-white">Medication Management</Link></li>
              <li><Link href="/services/family-therapy" className="text-gray-300 hover:text-white">Family Therapy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/for-parents" className="text-gray-300 hover:text-white">For Parents</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Crisis Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>National Suicide Prevention Lifeline:</strong>
                <br />
                <Link href="tel:988" className="text-[#aedff7] hover:text-white">988</Link>
              </li>
              <li>
                <strong>Crisis Text Line:</strong>
                <br />
                Text HOME to 741741
              </li>
              <li>
                <strong>Emergency:</strong>
                <br />
                <Link href="tel:911" className="text-[#ff6b6b] hover:text-white">911</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Sygnity Wellness. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
