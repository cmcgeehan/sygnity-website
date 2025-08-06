import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="section-padding bg-[#20394c]">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't wait to get the help you or your teen needs. Call us today for a free consultation and start your journey toward healing and wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 justify-center text-lg">
              <Phone className="w-5 h-5" />
              Call for Free Consultation
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#20394c] font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center gap-2 justify-center text-lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            Available Monday-Friday 8AM-6PM, Saturday 9AM-3PM
          </p>
        </div>
      </div>
    </section>
  )
}
