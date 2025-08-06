import { CheckCircle } from 'lucide-react'

const inNetworkProviders = [
  {
    name: 'Blue Cross Blue Shield',
    inNetwork: true
  },
  {
    name: 'Aetna',
    inNetwork: true
  },
  {
    name: 'Florida Blue',
    inNetwork: true
  }
]

const otherProviders = [
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Medicaid',
  'Medicare',
  'Out-of-Network Benefits'
]

export function InsuranceAccepted() {
  return (
    <section className="section-padding bg-[#f5f1ec]">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#20394c] mb-4">
            Insurance Accepted
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with any insurance you have! We're in-network with major providers and can help you maximize your benefits regardless of your coverage.
          </p>
        </div>

        <div className="mb-8">
          {/* In-Network Providers */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#20394c] mb-4 text-center">
              In-Network Providers
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {inNetworkProviders.map((provider, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg border-2 border-[#6cbf84] flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#20394c]">{provider.name}</span>
                    <div className="text-sm text-[#6cbf84] font-semibold">In-Network</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Providers */}
          <div>
            <h3 className="text-xl font-bold text-[#20394c] mb-4 text-center">
              We Also Work With
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProviders.map((provider, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6cbf84] flex-shrink-0" />
                  <span className="font-medium text-[#20394c]">{provider}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Don't see your insurance provider? We work with any insurance! Call us to verify your coverage and maximize your benefits.
          </p>
          <a href="tel:+15616142857" className="btn-primary inline-flex">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Verify Your Coverage
          </a>
        </div>
      </div>
    </section>
  )
}
