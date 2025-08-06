import type { Metadata } from 'next'
import { Phone, Heart, Shield, Users, CheckCircle, AlertCircle, MessageCircle, Star, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help My Teen with Depression Florida - Virtual Therapy for Reluctant Teens | Sygnity Wellness',
  description: 'Help your depressed teenager in Florida with virtual therapy. Expert support when your teen won\'t talk about depression or anxiety. Call (561) 614-2857 for help for anxious teenagers.',
  keywords: 'help my teen with depression Florida, help my depressed teenager Florida, my teen is depressed and won\'t talk Florida, help for anxious teenager Florida, virtual teen therapy Florida, my teen won\'t talk Florida',
  alternates: {
    canonical: 'https://sygnityhealth.com/for-parents'
  },
  openGraph: {
    title: 'Help My Teen with Depression Florida - Virtual Therapy for Parents',
    description: 'Help your depressed teenager in Florida with virtual therapy. Expert support when your teen won\'t talk.',
    url: 'https://sygnityhealth.com/for-parents',
  }
}

export default function ForParentsPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
              Help My Teen with Depression Florida
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Help my teen with depression Florida" - we hear this from concerned parents daily. When your teen is depressed and won't talk, virtual teen therapy in Florida can help. You're not alone, and expert help is available.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#20394c] mb-6">
                When Your Teen is Depressed and Won't Talk
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a Florida parent, you've noticed the changes. Maybe your once-happy teenager has become withdrawn, angry, or anxious. Perhaps they're struggling with school, friends, or displaying concerning behaviors. When your teen is depressed and won't talk about it, these signs can be overwhelming - but recognizing them is the first step toward getting help.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                At Sygnity Wellness, we specialize in helping Florida families when teens are reluctant to engage. Our virtual teen therapy approach makes it easier for anxious teenagers to open up from the comfort of home. We believe in partnering with parents to support your teen's mental health journey, understanding that every Florida family is unique.
              </p>
              <Link href="tel:+15616142857" className="btn-primary inline-flex">
                <Phone className="w-5 h-5" />
                Call for Free Consultation
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Signs Your Teen May Need Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6cbf84] rounded-full mt-2 flex-shrink-0"></div>
                  Persistent sadness or mood changes
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6cbf84] rounded-full mt-2 flex-shrink-0"></div>
                  Withdrawal from family and friends
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6cbf84] rounded-full mt-2 flex-shrink-0"></div>
                  Declining academic performance
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6cbf84] rounded-full mt-2 flex-shrink-0"></div>
                  Changes in sleep or eating patterns
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6cbf84] rounded-full mt-2 flex-shrink-0"></div>
                  Increased irritability or anger
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6cbf84] rounded-full mt-2 flex-shrink-0"></div>
                  Risky or self-destructive behaviors
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#aedff7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                We approach every family with empathy and understanding, creating a safe space for healing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#aedff7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Evidence-Based Treatment</h3>
              <p className="text-gray-600">
                Our therapists use proven methods and stay current with the latest research in adolescent mental health.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#aedff7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-3">Family-Centered Approach</h3>
              <p className="text-gray-600">
                We involve the whole family in the healing process, strengthening relationships and communication.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f1ec] p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-[#20394c] mb-4">
              What to Expect from Your First Call
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              During your free consultation, we'll listen to your concerns, answer your questions, and help you understand how therapy can benefit your teen. There's no pressure – just caring professionals ready to support your family.
            </p>
            <Link href="tel:+15616142857" className="btn-primary inline-flex">
              <Phone className="w-5 h-5" />
              Start with a Free Call Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
