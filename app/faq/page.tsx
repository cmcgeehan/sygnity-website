import type { Metadata } from 'next'
import { FAQAccordion } from '@/components/faq-accordion'

export const metadata: Metadata = {
  title: 'FAQ - Sygnity Wellness',
  description: 'Frequently asked questions about therapy services, insurance, costs, and what to expect at Sygnity Wellness in Florida.',
}

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. We recommend calling your insurance provider to verify your mental health benefits and any copay requirements. Our team can also help verify your coverage during your initial consultation."
  },
  {
    question: "How much does therapy cost?",
    answer: "The cost of therapy varies depending on your insurance coverage and the type of services needed. With insurance, most clients pay a copay ranging from $20-$50 per session. For those without insurance, we offer competitive self-pay rates and payment plans. Contact us for specific pricing information."
  },
  {
    question: "Is therapy confidential?",
    answer: "Yes, therapy is confidential. We follow strict HIPAA guidelines to protect your privacy. For minors, parents have certain rights to information, but we work to balance transparency with building trust with your teen. We'll discuss confidentiality policies during your first visit."
  },
  {
    question: "How long does therapy take?",
    answer: "The length of therapy varies for each individual and depends on your specific goals and needs. Some people see improvement in a few sessions, while others benefit from longer-term support. We'll work with you to develop a treatment plan that fits your situation and regularly assess progress."
  },
  {
    question: "What should I expect in the first session?",
    answer: "The first session is about getting to know you and understanding your concerns. We'll discuss your history, current challenges, and goals for therapy. For teens, we may meet with parents first, then with the teen alone. This session helps us determine the best treatment approach for your unique situation."
  },
  {
    question: "Do you offer telehealth services?",
    answer: "Yes, we offer secure telehealth sessions for clients throughout Florida. This can be especially convenient for busy families or those in remote areas. We use HIPAA-compliant video platforms to ensure your privacy and security during virtual sessions."
  },
  {
    question: "What if my teen doesn't want to go to therapy?",
    answer: "It's common for teens to be hesitant about therapy. We're experienced in working with reluctant adolescents and focus on building rapport and trust. Sometimes starting with a parent consultation can help us develop strategies to engage your teen and address their concerns about therapy."
  },
  {
    question: "How do I know if my teen needs therapy?",
    answer: "Signs that your teen might benefit from therapy include persistent mood changes, withdrawal from family and friends, declining grades, changes in sleep or eating patterns, risky behaviors, or expressing feelings of hopelessness. Trust your instincts as a parent – if you're concerned, it's worth having a conversation with a professional."
  },
  {
    question: "What types of therapy do you offer?",
    answer: "We offer various evidence-based therapies including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), family therapy, and trauma-informed care. Our therapists are trained in multiple approaches and will recommend the best fit based on your specific needs and preferences."
  },
  {
    question: "Can parents be involved in their teen's therapy?",
    answer: "Yes, family involvement is often beneficial for teen therapy. The level of parent involvement depends on the teen's age, the issues being addressed, and what works best for your family. We may have family sessions, parent consultations, or provide guidance on how to support your teen at home."
  }
]

export default function FAQPage() {
  return (
    <div className="pt-20">
      <div className="section-padding bg-[#f5f1ec]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#20394c] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our therapy services, insurance, and what to expect.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max max-w-4xl">
          <FAQAccordion faqs={faqs} />
          
          <div className="mt-12 bg-[#f5f1ec] p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-[#20394c] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              We're here to help. Call us for a free consultation and get personalized answers to your questions.
            </p>
            <a href="tel:+15616142857" className="btn-primary inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call for Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
