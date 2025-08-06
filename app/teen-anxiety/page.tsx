import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Heart, Brain, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Anxiety Therapy Florida | Virtual Anxiety Treatment for Teenagers - Sygnity Wellness',
  description: 'Professional teen anxiety therapy in Florida. Virtual anxiety treatment for teenagers with social anxiety, panic attacks, and anxiety disorders. Licensed therapists available online.',
  keywords: 'teen anxiety therapy Florida, anxiety treatment for teenagers Florida, virtual anxiety therapy teens Florida, teen social anxiety Florida treatment, panic attacks in teenagers Florida, teen anxiety disorder Florida',
  alternates: {
    canonical: 'https://sygnityhealth.com/teen-anxiety'
  },
  openGraph: {
    title: 'Teen Anxiety Therapy Florida | Virtual Anxiety Treatment for Teenagers',
    description: 'Professional teen anxiety therapy in Florida. Virtual anxiety treatment for teenagers with social anxiety, panic attacks, and anxiety disorders.',
    url: 'https://sygnityhealth.com/teen-anxiety',
  }
}

export default function TeenAnxietyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Anxiety Therapy Florida - Virtual Treatment That Works
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Help your anxious teenager with professional virtual anxiety therapy in Florida. 
                Our licensed therapists specialize in treating teen social anxiety, panic attacks, 
                and anxiety disorders through evidence-based online counseling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Get Free Consultation
                </Link>
                <Link href="/teen-depression" className="btn-secondary">
                  Teen Depression Therapy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Looking for additional support? Our teen therapy services also include specialized treatment for 
                  <Link href="/teen-depression" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> depression</Link> and 
                  <Link href="/teen-trauma" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> trauma recovery</Link>.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Signs Your Teen May Need Anxiety Therapy</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Avoiding school or social situations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Frequent panic attacks or intense worry</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Physical symptoms (headaches, stomach aches)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Sleep problems or difficulty concentrating</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Excessive worry about future events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Virtual Teen Anxiety Treatment Options in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based anxiety therapy approaches designed specifically for teenagers in Florida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-gray-600 mb-4">
                Evidence-based therapy helping teens identify and change negative thought patterns that fuel anxiety.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Anxiety coping strategies</li>
                <li>• Thought challenging techniques</li>
                <li>• Behavioral activation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Social Anxiety Treatment</h3>
              <p className="text-gray-600 mb-4">
                Specialized support for teens struggling with social situations, peer relationships, and performance anxiety.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Social skills development</li>
                <li>• Exposure therapy</li>
                <li>• Confidence building</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Panic Attack Management</h3>
              <p className="text-gray-600 mb-4">
                Learn practical tools to manage and reduce panic attacks, with techniques teens can use anywhere.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Breathing techniques</li>
                <li>• Grounding exercises</li>
                <li>• Emergency coping skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Why Choose Virtual Teen Anxiety Therapy in Florida?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Licensed Specialists</h3>
              <p className="text-gray-600">Teen anxiety specialists licensed in Florida</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Virtual Convenience</h3>
              <p className="text-gray-600">Therapy from the comfort of home</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Evidence-Based</h3>
              <p className="text-gray-600">Proven anxiety treatment methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#20394c] mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Sessions that fit your teen's schedule</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#20394c] mb-4">
              Related Teen Mental Health Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f5f1ec] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Teen Depression Therapy</h3>
              <p className="text-gray-600 mb-4">
                If your anxious teen is also struggling with persistent sadness, hopelessness, or depression, 
                our specialized teen depression therapy can help address both conditions together.
              </p>
              <Link href="/teen-depression" className="btn-secondary text-sm">
                Learn More About Depression Therapy
              </Link>
            </div>
            <div className="bg-[#f5f1ec] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Teen Trauma Therapy</h3>
              <p className="text-gray-600 mb-4">
                Many teens with anxiety have also experienced trauma. Our trauma therapy services help teens 
                process difficult experiences that may be contributing to their anxiety.
              </p>
              <Link href="/teen-trauma" className="btn-secondary text-sm">
                Learn More About Trauma Therapy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Help Your Teen Overcome Anxiety?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free consultation to discuss your teen's anxiety treatment options in Florida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Consultation
              </Link>
              <Link href="/" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}