import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f5f1ec] to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#20394c] mb-6 leading-tight">
              Teen Therapy Florida - Virtual Teen Counseling
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#6cbf84] rounded-full"></div>
                Licensed Teen Therapists
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#6cbf84] rounded-full"></div>
                Virtual Therapy Sessions
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#6cbf84] rounded-full"></div>
                Florida-wide Service
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Teen therapy Florida - Virtual counseling for adolescent anxiety and depression treatment"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#aedff7] rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}