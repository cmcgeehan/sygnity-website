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
      <div className="fixed bottom-0 left-0 right-0 bg-blush-pink text-charcoal p-4 z-50 md:hidden">
        <Link href="tel:+15616142857" className="flex items-center justify-center gap-2 font-medium tracking-wider">
          <Phone className="w-5 h-5" />
          call now - free consultation
        </Link>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-charcoal text-cream p-4 rounded-lg shadow-2xl z-50 md:max-w-md md:left-auto md:right-4">
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-cream/60 hover:text-cream transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="pr-6">
        <p className="text-sm font-medium mb-2 tracking-wide">
          worried about your teen? talk to someone now — it's free.
        </p>
        <Link href="tel:+15616142857" className="btn-primary">
          <Phone className="w-4 h-4" />
          call now
        </Link>
      </div>
    </div>
  )
}
