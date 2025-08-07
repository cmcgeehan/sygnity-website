import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Teen Therapy Florida - Free Consultation | Virtual Teen Counseling - Avela Therapy',
  description: 'Contact Avela Therapy for a free teen therapy consultation in Florida. Call (561) 614-2857 for virtual teen anxiety, depression, and trauma therapy services.',
  keywords: ['contact teen therapy', 'free consultation', 'virtual teen counseling', 'teen therapy florida'],
  canonical: 'https://avelatherapy.com/contact',
  openGraph: {
    title: 'Contact Teen Therapy Florida - Free Consultation | Avela Therapy',
    description: 'Contact Avela Therapy for a free teen therapy consultation in Florida. Virtual teen counseling services.',
    url: 'https://avelatherapy.com/contact',
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 