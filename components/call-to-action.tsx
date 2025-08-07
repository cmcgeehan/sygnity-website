import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-cream mb-4 font-display tracking-wider small-caps">
            ready to take the first step?
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto mb-8 tracking-wide">
            don't wait to get the help you or your teen needs. call us today for a free consultation and start your journey toward healing and wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
              <Phone className="w-5 h-5" />
              call for free consultation
            </Link>
            <Link href="/contact" className="btn-secondary text-lg py-4 px-8">
              <ArrowRight className="w-5 h-5" />
              contact us
            </Link>
          </div>

          <p className="text-cream/60 mt-6 text-sm tracking-wide">
            available monday-friday 8am-6pm, saturday 9am-3pm
          </p>
        </div>
      </div>
    </section>
  )
}
