'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'
import Link from 'next/link'

export function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [isDismissed])

  if (!isVisible || isDismissed) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#ff6b6b] text-white p-4 z-50 md:hidden">
        <Link href="tel:+15616142857" className="flex items-center justify-center gap-2 font-semibold">
          <Phone className="w-5 h-5" />
          Call Now - Free Consultation
        </Link>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#20394c] text-white p-4 rounded-lg shadow-2xl z-50 md:max-w-md md:left-auto md:right-4">
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-gray-300 hover:text-white"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="pr-6">
        <p className="text-sm font-medium mb-2">
          Worried about your teen? Talk to someone now — it's free.
        </p>
        <Link href="tel:+15616142857" className="btn-primary">
          <Phone className="w-4 h-4" />
          Call Now
        </Link>
      </div>
    </div>
  )
}
