'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-[#20394c] pr-4">
              {faq.question}
            </h3>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#20394c] flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#20394c] flex-shrink-0" />
            )}
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
