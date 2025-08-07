import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, CreditCard, Shield, DollarSign, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insurance & Payment Options | Teen Therapy Florida - Avela Therapy',
  description: 'Teen therapy insurance coverage in Florida. We accept major insurance plans for virtual teen therapy, anxiety, depression, and trauma treatment. Flexible payment options available.',
  keywords: ['teen therapy insurance Florida', 'virtual therapy insurance coverage', 'teen mental health insurance', 'Florida therapy insurance accepted', 'teen therapy payment options'],
  openGraph: {
    title: 'Insurance & Payment Options | Teen Therapy Florida - Avela Therapy',
    description: 'We accept major insurance plans for teen therapy in Florida. Flexible payment options for virtual therapy services.',
    url: 'https://avelatherapy.com/insurance',
  }
}

export default function InsurancePage() {
  const insurancePlans = [
    'Aetna', 'BlueCross BlueShield', 'Cigna', 'UnitedHealthcare', 'Humana',
    'Florida Blue', 'Molina Healthcare', 'Medicaid', 'Medicare', 'Tricare',
    'AmeriHealth', 'Beacon Health Options', 'Magellan Health', 'Optum',
    'WellCare', 'Sunshine Health', 'Simply Healthcare', 'Staywell'
  ]

  return (
    <div className="pt-20">
      {/* Schema Markup */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Insurance & Payment Options",
            "description": "Teen therapy insurance coverage and payment options in Florida",
            "url": "https://avelatherapy.com/insurance",
            "mainEntity": {
              "@type": "MedicalBusiness",
              "name": "Avela Therapy",
              "paymentAccepted": ["Insurance", "Self-Pay", "HSA", "FSA", "Credit Card"],
              "currenciesAccepted": "USD",
              "priceRange": "$$"
            }
          })
        }}
      />

      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-cream to-cream/50">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-light text-charcoal mb-6 leading-tight font-display tracking-wider small-caps">
            insurance & payment options
          </h1>
          <p className="text-xl text-soft-gray mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Making teen mental health care accessible and affordable for Florida families. We accept most major insurance plans and offer flexible payment options for virtual therapy services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary">
              <Phone className="w-5 h-5" />
              verify your insurance
            </Link>
            <Link href="/contact" className="btn-secondary">
              <FileText className="w-5 h-5" />
              get cost estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Insurance Coverage */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 font-display tracking-wider small-caps">
              accepted insurance plans
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto tracking-wide">
              We are in-network with most major insurance providers serving Florida families. Mental health coverage is typically included under your behavioral health benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {insurancePlans.map((plan) => (
              <div key={plan} className="card p-4 text-center">
                <CheckCircle className="w-6 h-6 text-dusty-blue mx-auto mb-2" />
                <p className="font-medium text-charcoal tracking-wider all-lowercase">{plan}</p>
              </div>
            ))}
          </div>

          <div className="bg-dusty-blue/10 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
              don't see your insurance?
            </h3>
            <p className="text-soft-gray mb-6 tracking-wide">
              Insurance networks change frequently. Even if your plan isn't listed, we may still be able to help. Contact us for a free insurance verification.
            </p>
            <Link href="tel:+15616142857" className="btn-outline">
              <Phone className="w-5 h-5" />
              call to verify coverage
            </Link>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-12 text-center font-display tracking-wider small-caps">
            flexible payment options
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl text-center">
              <Shield className="w-16 h-16 text-dusty-blue mx-auto mb-6" />
              <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
                insurance billing
              </h3>
              <p className="text-soft-gray mb-6 tracking-wide">
                We bill your insurance directly for covered services. You only pay your copay, coinsurance, or deductible amount.
              </p>
              <ul className="space-y-2 text-sm text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>direct insurance billing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>pre-authorization assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>benefits verification</span>
                </li>
              </ul>
            </div>

            <div className="card p-8 rounded-xl text-center">
              <CreditCard className="w-16 h-16 text-dusty-blue mx-auto mb-6" />
              <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
                self-pay options
              </h3>
              <p className="text-soft-gray mb-6 tracking-wide">
                Competitive self-pay rates for families without insurance coverage or who prefer private-pay therapy services.
              </p>
              <ul className="space-y-2 text-sm text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>transparent pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>payment plans available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>sliding scale consideration</span>
                </li>
              </ul>
            </div>

            <div className="card p-8 rounded-xl text-center">
              <DollarSign className="w-16 h-16 text-dusty-blue mx-auto mb-6" />
              <h3 className="text-xl font-medium text-charcoal mb-4 font-display tracking-wider small-caps">
                HSA/FSA accepted
              </h3>
              <p className="text-soft-gray mb-6 tracking-wide">
                Use your Health Savings Account or Flexible Spending Account to pay for teen therapy services with pre-tax dollars.
              </p>
              <ul className="space-y-2 text-sm text-soft-gray tracking-wide">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>HSA/FSA eligible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>detailed receipts provided</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-dusty-blue" />
                  <span>tax-advantaged payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Information */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
                understanding your costs
              </h2>
              <p className="text-xl text-soft-gray mb-6 tracking-wide">
                Teen therapy costs vary based on your insurance coverage and the type of services needed. We're committed to transparency in pricing.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">typical insurance copays</h3>
                  <p className="text-soft-gray tracking-wide">Most Florida insurance plans have copays ranging from $10-$50 for mental health services. Your specific copay depends on your plan details.</p>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">deductible considerations</h3>
                  <p className="text-soft-gray tracking-wide">If you haven't met your annual deductible, you may be responsible for the full session fee until it's met. We'll help you understand your benefits.</p>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">out-of-network benefits</h3>
                  <p className="text-soft-gray tracking-wide">Many plans offer out-of-network benefits with reimbursement. We provide detailed superbills for easy insurance submission.</p>
                </div>
              </div>
            </div>

            <div className="bg-dusty-blue/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-charcoal mb-6 font-display tracking-wider small-caps">
                free insurance verification
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">benefits check</p>
                    <p className="text-sm text-soft-gray tracking-wide">We verify your mental health benefits before your first session</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">cost estimate</p>
                    <p className="text-sm text-soft-gray tracking-wide">Get a clear understanding of your expected out-of-pocket costs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dusty-blue mt-1" />
                  <div>
                    <p className="font-medium text-charcoal tracking-wider all-lowercase">no surprises</p>
                    <p className="text-sm text-soft-gray tracking-wide">Transparent pricing with no hidden fees or unexpected charges</p>
                  </div>
                </div>
              </div>

              <Link href="tel:+15616142857" className="btn-primary w-full">
                <Phone className="w-5 h-5" />
                get free benefits check
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding bg-cream">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-12 text-center font-display tracking-wider small-caps">
            insurance & payment FAQ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">do you accept my insurance?</h3>
                <p className="text-soft-gray tracking-wide">We accept most major Florida insurance plans. Call us for a free verification to confirm your specific coverage and benefits.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">what if I don't have insurance?</h3>
                <p className="text-soft-gray tracking-wide">We offer competitive self-pay rates and payment plans. Some families find our rates comparable to high insurance copays.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">are virtual sessions covered?</h3>
                <p className="text-soft-gray tracking-wide">Yes! Most insurance plans now cover telehealth/virtual therapy sessions the same as in-person visits.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">when is payment due?</h3>
                <p className="text-soft-gray tracking-wide">Insurance copays are collected at the time of service. Self-pay clients can pay per session or set up monthly payment plans.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">do you offer sliding scale fees?</h3>
                <p className="text-soft-gray tracking-wide">We have limited sliding scale spots available for families with financial hardship. Contact us to discuss your situation.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal mb-2 tracking-wider all-lowercase">can I use my HSA/FSA?</h3>
                <p className="text-soft-gray tracking-wide">Absolutely! Mental health therapy is a qualified medical expense for HSA and FSA accounts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding bg-dusty-blue/10">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6 font-display tracking-wider small-caps">
            ready to get started?
          </h2>
          <p className="text-xl text-soft-gray mb-8 max-w-2xl mx-auto tracking-wide">
            Don't let insurance questions delay your teen's mental health care. We'll handle the verification process and explain all your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+15616142857" className="btn-primary text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              verify insurance now
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              request cost estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}