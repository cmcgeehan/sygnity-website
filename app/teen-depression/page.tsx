import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Heart, Brain, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Depression Therapy Florida | Help My Depressed Teenager - Sygnity Wellness',
  description: 'Professional teen depression therapy in Florida. Virtual depression counseling for teenagers. Help your depressed teenager with online therapy from licensed therapists.',
  keywords: 'teen depression therapy Florida, help my depressed teenager Florida, virtual depression therapy teens Florida, teen depression counseling Florida, adolescent depression treatment Florida, my teen is depressed and won\'t talk Florida',
  alternates: {
    canonical: 'https://sygnityhealth.com/teen-depression'
  },
  openGraph: {
    title: 'Teen Depression Therapy Florida | Help My Depressed Teenager',
    description: 'Professional teen depression therapy in Florida. Virtual depression counseling for teenagers from licensed therapists.',
    url: 'https://sygnityhealth.com/teen-depression',
  }
}

export default function TeenDepressionPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Help My Depressed Teenager - Virtual Teen Depression Therapy Florida
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen depression therapy in Florida. If your teen is depressed and won't talk, 
                our licensed therapists provide virtual depression counseling that helps adolescents 
                overcome depression and rediscover hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Get Free Consultation
                </Link>
                <Link href="/teen-trauma" className="btn-secondary">
                  Teen Trauma Therapy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Depression often co-occurs with other mental health conditions. Our comprehensive approach also addresses 
                  <Link href="/teen-anxiety" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> teen anxiety</Link> and 
                  <Link href="/teen-trauma" className="text-[#20394c] hover:text-[#6cbf84] font-semibold underline"> trauma recovery</Link>.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Signs Your Teen May Have Depression</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Persistent sadness or irritability</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Withdrawing from family and friends</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Loss of interest in activities they once enjoyed</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Changes in sleep or appetite</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Difficulty concentrating or making decisions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Feelings of hopelessness or worthlessness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Approaches Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Virtual Teen Depression Treatment in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based depression therapy approaches specifically designed for teenagers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-gray-600 mb-4">
                Help teens identify and change negative thought patterns that contribute to depression.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Negative thought identification</li>
                <li>• Behavioral activation techniques</li>
                <li>• Mood monitoring and tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Interpersonal Therapy (IPT)</h3>
              <p className="text-gray-600 mb-4">
                Focus on improving relationships and communication skills to reduce depressive symptoms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Communication skills training</li>
                <li>• Relationship pattern analysis</li>
                <li>• Social support building</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Solution-Focused Therapy</h3>
              <p className="text-gray-600 mb-4">
                Build on teen's strengths and resources to create positive changes and hope for the future.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Strength-based approach</li>
                <li>• Goal setting and planning</li>
                <li>• Future-focused techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Support Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                When Your Teen is Depressed and Won't Talk
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                It's heartbreaking when your teenager is struggling with depression but won't open up. 
                Our virtual teen depression therapy in Florida creates a safe space where teens feel 
                comfortable sharing their feelings.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Teen-Focused Approach</h4>
                    <p className="text-gray-600">Therapy designed specifically for adolescent communication styles</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Virtual Comfort</h4>
                    <p className="text-gray-600">Many teens feel more comfortable opening up from home</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Parent Guidance</h4>
                    <p className="text-gray-600">Support and strategies for parents of depressed teens</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">How We Help Parents</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Assessment & Understanding</h4>
                    <p className="text-gray-600 text-sm">Help you understand your teen's depression symptoms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Communication Strategies</h4>
                    <p className="text-gray-600 text-sm">Learn how to talk to your depressed teenager</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Family Support</h4>
                    <p className="text-gray-600 text-sm">Create a supportive home environment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#20394c] mb-4">
              Comprehensive Teen Mental Health Support
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f5f1ec] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Teen Anxiety Therapy</h3>
              <p className="text-gray-600 mb-4">
                Depression and anxiety often occur together in teenagers. Our anxiety therapy services 
                complement depression treatment to address both conditions simultaneously.
              </p>
              <Link href="/teen-anxiety" className="btn-secondary text-sm">
                Learn More About Anxiety Therapy
              </Link>
            </div>
            <div className="bg-[#f5f1ec] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Teen Trauma Therapy</h3>
              <p className="text-gray-600 mb-4">
                Unprocessed trauma can contribute to depression in teens. Our trauma therapy services 
                help teens heal from past experiences that may be fueling their depression.
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
              Ready to Help Your Teen Overcome Depression?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free consultation to discuss teen depression therapy options in Florida
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