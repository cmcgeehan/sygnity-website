import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Pill, Brain, Shield, Heart, Target, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medication Management Florida | Psychiatric Medication Services - Avela Therapy',
  description: 'Professional medication management in Florida. Psychiatric medication services for teens and adults. Licensed psychiatrists providing virtual medication consultations.',
  keywords: ['medication management', 'psychiatric medication', 'virtual psychiatry', 'medication consultation'],

  openGraph: {
    title: 'Medication Management Florida | Psychiatric Medication Services - Avela Therapy',
    description: 'Professional medication management in Florida. Psychiatric medication services for teens and adults.',
    url: 'https://avelatherapy.com/services/medication-management',
  }
}

export default function MedicationManagementPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-[#f5f1ec] to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
                Medication Management Florida - Expert Psychiatric Medication Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional medication management in Florida providing comprehensive psychiatric medication 
                evaluation and ongoing monitoring. Our licensed providers optimize medication effectiveness 
                while minimizing side effects for improved mental health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+15616142857" className="btn-primary text-lg py-4 px-8">
                  <Phone className="w-5 h-5" />
                  Schedule Medication Consultation
                </Link>
                <Link href="/services/adolescent-therapy" className="btn-secondary text-lg py-4 px-8 flex items-center gap-2">
                  Therapy Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Benefits of Professional Medication Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Optimal medication effectiveness</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Minimized side effects</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Regular monitoring and adjustments</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Virtual appointment convenience</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84]" />
                  <span>Coordinated care with therapy providers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions Treated Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Conditions We Treat with Medication Management in Florida
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our psychiatric medication management services address a wide range of mental health conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Anxiety Disorders</h3>
              <p className="text-gray-600 mb-4">
                Medication management for generalized anxiety, panic disorder, social anxiety, and phobias.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SSRIs and SNRIs</li>
                <li>• Benzodiazepines (short-term)</li>
                <li>• Beta-blockers for physical symptoms</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Depression</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive medication management for major depression and persistent depressive disorder.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Antidepressant optimization</li>
                <li>• Combination therapy approaches</li>
                <li>• Treatment-resistant depression options</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">ADHD</h3>
              <p className="text-gray-600 mb-4">
                Medication management for Attention Deficit Hyperactivity Disorder in teens and adults.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Stimulant medications</li>
                <li>• Non-stimulant alternatives</li>
                <li>• Dosage optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Bipolar Disorder</h3>
              <p className="text-gray-600 mb-4">
                Mood stabilization and comprehensive medication management for bipolar disorder.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mood stabilizers</li>
                <li>• Antipsychotic medications</li>
                <li>• Episode prevention strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Pill className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">PTSD & Trauma</h3>
              <p className="text-gray-600 mb-4">
                Medication support for trauma-related symptoms and post-traumatic stress disorder.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trauma-informed prescribing</li>
                <li>• Nightmare and flashback management</li>
                <li>• Sleep and anxiety support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#aedff7] rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#20394c]" />
              </div>
              <h3 className="text-xl font-bold text-[#20394c] mb-4">Sleep Disorders</h3>
              <p className="text-gray-600 mb-4">
                Medication management for sleep disorders related to mental health conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Insomnia treatment</li>
                <li>• Sleep architecture improvement</li>
                <li>• Non-habit forming options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Medication Management Process Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-6">
                Our Medication Management Process in Florida
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We follow a comprehensive, patient-centered approach to psychiatric medication management 
                that prioritizes safety, effectiveness, and your individual needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Thorough Assessment</h4>
                    <p className="text-gray-600">Comprehensive evaluation of symptoms, medical history, and treatment goals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Personalized Treatment Plan</h4>
                    <p className="text-gray-600">Customized medication strategy based on your specific needs and preferences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Regular Monitoring</h4>
                    <p className="text-gray-600">Ongoing assessment of medication effectiveness and side effects</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#6cbf84] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Coordinated Care</h4>
                    <p className="text-gray-600">Collaboration with your therapy providers for comprehensive treatment</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#20394c] mb-6">Medication Management Timeline</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Initial Consultation (60 min)</h4>
                    <p className="text-gray-600 text-sm">Comprehensive psychiatric evaluation and treatment planning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Follow-up (2 weeks)</h4>
                    <p className="text-gray-600 text-sm">Initial medication response and side effect assessment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Adjustment Phase (4-8 weeks)</h4>
                    <p className="text-gray-600 text-sm">Regular monitoring and dosage optimization</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#6cbf84] rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-[#20394c]">Maintenance (Monthly+)</h4>
                    <p className="text-gray-600 text-sm">Ongoing monitoring and long-term medication management</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Medication Management Benefits */}
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Advantages of Virtual Medication Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our virtual medication management services offer convenience and accessibility while maintaining 
              the highest standards of psychiatric care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600 text-sm">Appointments that work around your schedule</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Privacy & Comfort</h4>
              <p className="text-gray-600 text-sm">Discuss medications from your own space</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Consistent Care</h4>
              <p className="text-gray-600 text-sm">Regular check-ins without travel barriers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#6cbf84] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#20394c] mb-2">Coordinated Care</h4>
              <p className="text-gray-600 text-sm">Easy communication with your therapy team</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
              Medication Management FAQ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Can psychiatric medications be prescribed virtually?</h4>
              <p className="text-gray-600 text-sm">Yes, most psychiatric medications can be prescribed through virtual consultations, with some exceptions for controlled substances which may require in-person evaluation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">How often will I need medication management appointments?</h4>
              <p className="text-gray-600 text-sm">Initially, appointments are typically every 2-4 weeks, then monthly or quarterly once medications are stabilized, depending on your individual needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">What should I expect during my first appointment?</h4>
              <p className="text-gray-600 text-sm">A comprehensive 60-minute evaluation covering your symptoms, medical history, current medications, and treatment goals to develop a personalized medication plan.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-[#20394c] mb-3">Do you coordinate care with my therapist?</h4>
              <p className="text-gray-600 text-sm">Yes, with your permission, we coordinate closely with your therapy providers to ensure comprehensive, integrated mental health care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-[#20394c] to-[#2e4f64] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Optimize Your Mental Health with Expert Medication Management
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation to discuss how medication management can support your mental health goals in Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+15616142857" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff5252] transition-colors">
                Schedule Medication Consultation
              </Link>
              <Link href="/services/family-therapy" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#20394c] transition-colors">
                Family Therapy Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}