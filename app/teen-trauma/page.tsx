import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Heart, Brain, Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teen Trauma Therapy Florida | PTSD & Grief Counseling for Teenagers - Avela Therapy',
  description: 'Professional teen trauma therapy in Florida. PTSD and grief counseling for teenagers. Licensed therapists specializing in adolescent trauma treatment and recovery.',
  keywords: ['teen trauma therapy', 'PTSD counseling', 'grief counseling', 'adolescent trauma treatment'],

  openGraph: {
    title: 'Teen Trauma Therapy Florida | PTSD & Grief Counseling for Teenagers - Avela Therapy',
    description: 'Professional teen trauma therapy in Florida. PTSD and grief counseling for teenagers.',
    url: 'https://avelatherapy.com/teen-trauma',
  }
}

export default function TeenTraumaPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Teen Trauma Therapy Florida - Virtual PTSD & Grief Counseling
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional teen trauma therapy in Florida. Our licensed therapists provide virtual 
                PTSD therapy, grief counseling, and EMDR therapy for teenagers who have experienced trauma. 
                Help your teen heal in a safe, supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Get Free Consultation
                </Link>
                <Link href="/teen-anxiety" className="btn-secondary">
                  Teen Anxiety Therapy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Signs Your Teen May Need Trauma Therapy</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Flashbacks or nightmares about past events</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Avoiding places, people, or activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Emotional numbness or detachment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Hypervigilance or being easily startled</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Sudden mood changes or outbursts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Difficulty concentrating or sleeping</span>
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
              Virtual Teen Trauma Treatment Approaches in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based trauma therapy methods specifically designed for adolescents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">EMDR Therapy for Teens</h3>
              <p className="text-gray-600 mb-4">
                Eye Movement Desensitization and Reprocessing (EMDR) helps teens process traumatic memories safely.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trauma memory processing</li>
                <li>• Reduced emotional distress</li>
                <li>• Safe virtual EMDR sessions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Trauma-Focused CBT</h3>
              <p className="text-gray-600 mb-4">
                Specialized cognitive behavioral therapy designed specifically for trauma recovery in adolescents.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trauma narrative development</li>
                <li>• Coping skills training</li>
                <li>• Cognitive restructuring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Grief Counseling</h3>
              <p className="text-gray-600 mb-4">
                Specialized grief therapy for teens coping with loss of loved ones, relationships, or life changes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Loss processing support</li>
                <li>• Healthy grieving strategies</li>
                <li>• Building resilience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Trauma Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Types of Trauma We Treat in Florida Teens
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our trauma therapists have experience helping teens recover from various types of traumatic experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-2">Acute Trauma</h4>
              <p className="text-gray-600 text-sm">Single incident trauma such as accidents, natural disasters, or sudden loss</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-2">Complex Trauma</h4>
              <p className="text-gray-600 text-sm">Ongoing or repeated traumatic experiences over time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-2">Grief & Loss</h4>
              <p className="text-gray-600 text-sm">Death of loved ones, divorce, or significant life changes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-2">Medical Trauma</h4>
              <p className="text-gray-600 text-sm">Traumatic medical procedures or chronic illness experiences</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-2">School Trauma</h4>
              <p className="text-gray-600 text-sm">Bullying, violence, or other traumatic school experiences</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-2">Community Violence</h4>
              <p className="text-gray-600 text-sm">Witnessing or experiencing violence in the community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Therapy Benefits */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Why Virtual Trauma Therapy Works for Teens
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Virtual trauma therapy can be especially effective for teens because it provides a sense 
                of safety and control that's crucial for trauma recovery.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Safety & Comfort</h4>
                    <p className="text-gray-600">Therapy from the safety of home can reduce re-traumatization</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Reduced Barriers</h4>
                    <p className="text-gray-600">No travel means fewer obstacles to consistent treatment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Teen-Friendly</h4>
                    <p className="text-gray-600">Many teens feel more comfortable with technology-based therapy</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Our Trauma Therapy Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Safety & Stabilization</h4>
                    <p className="text-gray-600 text-sm">Building safety skills and emotional regulation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Trauma Processing</h4>
                    <p className="text-gray-600 text-sm">Working through traumatic memories safely</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Integration & Growth</h4>
                    <p className="text-gray-600 text-sm">Building resilience and moving forward</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Help Your Teen Heal from Trauma
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free consultation to discuss teen trauma therapy options in Florida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Call for Free Consultation
              </Link>
              <Link href="/for-parents" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Resources for Parents
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}