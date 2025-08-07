import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>
}) {
  const params = await searchParams
  return (
    <div className="pt-20">
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
              contact teen therapy florida - free consultation
            </h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto tracking-wide">
              ready to help your teen? contact our florida teen therapy team today. call (561) 614-2857 for a free consultation about virtual teen anxiety, depression, and trauma counseling services.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-[#20394c] mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#20394c]">Call for Free Consultation</h3>
                                  <Link href="tel:+15616142857" className="text-lg text-[#ff6b6b] hover:underline">
              (561) 614-2857
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#6cbf84] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#20394c]">Email</h3>
                      <Link href="mailto:chris.gamer@thisiswellness.com" className="text-lg text-gray-600 hover:underline">
                        chris.gamer@thisiswellness.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#aedff7] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#20394c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#20394c]">Serving Florida Teens</h3>
                      <p className="text-lg text-gray-600">Virtual teen therapy throughout Florida</p>
                      <p className="text-sm text-gray-500">Miami, Orlando, Tampa, West Palm Beach, Fort Lauderdale & statewide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#20394c] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#20394c]">Hours</h3>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f1ec] p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#20394c] mb-3">Crisis Support</h3>
                <p className="text-gray-600 mb-4">
                  If you or your teen is experiencing a mental health crisis, please contact:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                  <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                  <p><strong>Emergency:</strong> Call 911</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-[#20394c] mb-6">Send Us a Message</h2>
                
                {params.success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Thank you for your message. We will get back to you soon!</p>
                  </div>
                )}

                {params.error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">Failed to send message. Please try again.</p>
                  </div>
                )}
                
                <form action="/api/contact" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6cbf84] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6cbf84] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6cbf84] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6cbf84] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6cbf84] focus:border-transparent"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary justify-center">
                    Send Message
                  </button>
                </form>

                <div className="mt-6 p-4 bg-[#aedff7] rounded-lg">
                  <p className="text-sm text-[#20394c] text-center">
                    <strong>Prefer to talk?</strong> Call us directly at{' '}
                                <Link href="tel:+15616142857" className="font-semibold hover:underline">
              (561) 614-2857
                    </Link>{' '}
                    for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
