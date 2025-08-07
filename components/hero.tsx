import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center">
          <div className="w-full max-w-xl">
            <h1 className="text-4xl md:text-6xl font-light text-charcoal mb-6 leading-tight font-display tracking-wider small-caps">
              Teen Therapy Florida - Virtual Teen Counseling
            </h1>
            <p className="text-xl text-soft-gray mb-8 leading-relaxed tracking-wide">
              Help your teen with depression, anxiety, and trauma through virtual teen therapy in Florida. 
              Professional online teen counseling with licensed therapists specializing in adolescent mental health. 
              Free consultation available - start your teen's healing journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="tel:+15616142857" className="btn-primary">
                <Phone className="w-5 h-5" />
                Free Consultation
              </Link>
              <Link href="/teen-anxiety" className="btn-secondary">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-soft-gray">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                <Link href="/team" className="tracking-wider all-lowercase hover:text-dusty-blue transition-colors">licensed teen therapists</Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                <span className="tracking-wider all-lowercase">virtual therapy sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-dusty-blue rounded-full"></div>
                <span className="tracking-wider all-lowercase">florida-wide service</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg">
            <div className="relative z-10">
              <picture>
                <source srcSet="/happy-family.webp" type="image/webp" />
                <Image
                  src="/happy-family.jpg"
                  alt="Happy family - Teen therapy Florida - Virtual counseling for adolescent anxiety and depression treatment"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </picture>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blush-pink/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}