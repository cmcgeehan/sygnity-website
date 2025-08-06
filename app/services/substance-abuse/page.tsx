import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Heart, Shield, Users, Target, AlertCircle, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Substance Use Treatment Florida | Teen & Adult Addiction Therapy - Sygnity Wellness',
  description: 'Comprehensive substance use treatment in Florida for teens and adults. Virtual addiction therapy, recovery support, and family counseling for substance abuse disorders.',
  keywords: 'substance use treatment Florida, addiction therapy Florida, teen substance abuse Florida, virtual addiction treatment Florida, substance abuse counseling Florida, recovery therapy Florida',
  alternates: {
    canonical: 'https://sygnityhealth.com/services/substance-abuse'
  },
  openGraph: {
    title: 'Substance Use Treatment Florida | Teen & Adult Addiction Therapy',
    description: 'Comprehensive substance use treatment in Florida for teens and adults. Virtual addiction therapy and recovery support.',
    url: 'https://sygnityhealth.com/services/substance-abuse',
  }
}

export default function SubstanceAbusePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Substance Use Treatment Florida - Recovery Support for Teens & Adults
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive substance use treatment in Florida providing virtual addiction therapy, 
                recovery support, and family counseling. Our evidence-based approach helps individuals 
                and families affected by substance use disorders achieve lasting recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
                  <Phone className="w-5 h-5" />
                  Free Recovery Consultation
                </Link>
                <Link href="/services/family-therapy" className="btn-secondary text-lg py-4 px-8 flex items-center gap-2">
                  Family Therapy Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Signs of Substance Use Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ff6b6b]" />
                  <span>Behavioral changes and mood swings</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ff6b6b]" />
                  <span>Neglecting responsibilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ff6b6b]" />
                  <span>Social isolation and relationship problems</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ff6b6b]" />
                  <span>Physical health deterioration</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ff6b6b]" />
                  <span>Inability to stop despite consequences</span>
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
              Evidence-Based Substance Use Treatment Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive addiction treatment program uses proven therapeutic methods for lasting recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Cognitive Behavioral Therapy</h3>
              <p className="text-gray-600 mb-4">
                Identify and change thought patterns and behaviors that contribute to substance use.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trigger identification and management</li>
                <li>• Coping skill development</li>
                <li>• Relapse prevention strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Motivational Interviewing</h3>
              <p className="text-gray-600 mb-4">
                Build motivation and commitment to change through collaborative, goal-oriented therapy.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Motivation enhancement</li>
                <li>• Ambivalence resolution</li>
                <li>• Goal-oriented planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Family Systems Therapy</h3>
              <p className="text-gray-600 mb-4">
                Address family dynamics and relationships affected by substance use disorders.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Family healing and recovery</li>
                <li>• Communication improvement</li>
                <li>• Boundary establishment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Trauma-Informed Care</h3>
              <p className="text-gray-600 mb-4">
                Address underlying trauma that often contributes to substance use disorders.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trauma processing therapy</li>
                <li>• EMDR for addiction</li>
                <li>• Safety and stabilization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Contingency Management</h3>
              <p className="text-gray-600 mb-4">
                Positive reinforcement strategies to support sobriety and recovery goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Behavioral reinforcement</li>
                <li>• Recovery milestone rewards</li>
                <li>• Motivation maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">12-Step Integration</h3>
              <p className="text-gray-600 mb-4">
                Support participation in 12-step programs and community recovery resources.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 12-step program support</li>
                <li>• Sponsor relationship guidance</li>
                <li>• Community resource connection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Teen-Specific Treatment Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Teen Substance Use Treatment in Florida
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Adolescent substance use requires specialized treatment approaches that address the unique 
                developmental, social, and psychological factors affecting teenagers.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Adolescent-Focused Approaches</h4>
                    <p className="text-gray-600">Treatment methods specifically designed for teen brain development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Family Involvement</h4>
                    <p className="text-gray-600">Comprehensive family therapy to support teen recovery</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Peer Support Integration</h4>
                    <p className="text-gray-600">Connecting teens with appropriate peer recovery support</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Academic and Social Support</h4>
                    <p className="text-gray-600">Addressing school and social challenges during recovery</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Common Teen Substance Issues</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#ff6b6b] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Alcohol Use</h4>
                    <p className="text-gray-600 text-sm">Underage drinking and binge drinking patterns</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#ff6b6b] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Marijuana Use</h4>
                    <p className="text-gray-600 text-sm">Cannabis use and dependency issues in teens</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#ff6b6b] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Prescription Drug Misuse</h4>
                    <p className="text-gray-600 text-sm">Abuse of prescription medications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#ff6b6b] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Vaping and Nicotine</h4>
                    <p className="text-gray-600 text-sm">E-cigarette and nicotine addiction treatment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Support Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Comprehensive Recovery Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recovery from substance use disorders requires ongoing support and multiple therapeutic approaches
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Individual Therapy</h4>
              <p className="text-gray-600 text-sm">One-on-one addiction counseling sessions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Family Counseling</h4>
              <p className="text-gray-600 text-sm">Healing relationships affected by addiction</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Relapse Prevention</h4>
              <p className="text-gray-600 text-sm">Strategies for maintaining long-term sobriety</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Dual Diagnosis</h4>
              <p className="text-gray-600 text-sm">Co-occurring mental health and addiction treatment</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Take the First Step Toward Recovery
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Recovery is possible. Start with a free consultation to discuss substance use treatment options in Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Recovery Consultation
              </Link>
              <Link href="/services/adolescent-therapy" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Teen Therapy Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}