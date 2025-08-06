import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/fixes.css'
import { StickyCallBar } from '@/components/sticky-call-bar'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Sygnity Wellness',
  description: 'Virtual teen therapy in Florida specializing in anxiety, depression, and trauma treatment. Help your teen with professional online counseling. Free consultation available.',
  keywords: 'teen therapy Florida, virtual teen therapy Florida, teen anxiety therapy Florida, teen depression therapy Florida, online teen counseling Florida, help my teen with depression Florida',
  authors: [{ name: 'Sygnity Wellness Team' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sygnityhealth.com/'
  },
  openGraph: {
    title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment',
    description: 'Virtual teen therapy in Florida specializing in anxiety, depression, and trauma treatment. Free consultation available.',
    type: 'website',
    locale: 'en_US',
    url: 'https://sygnityhealth.com/',
    siteName: 'Sygnity Wellness',
    images: [{
      url: 'https://sygnityhealth.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Sygnity Wellness - Teen Therapy Florida'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment',
    description: 'Virtual teen therapy in Florida specializing in anxiety, depression, and trauma treatment.',
    images: ['https://sygnityhealth.com/og-image.jpg']
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Florida',
    'geo.position': '27.7663;-82.6404',
    'ICBM': '27.7663, -82.6404'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Sygnity Wellness",
              "description": "Virtual teen therapy in Florida specializing in anxiety, depression, and trauma treatment",
              "url": "https://sygnityhealth.com",
              "logo": "https://sygnityhealth.com/logo.png",
              "image": "https://sygnityhealth.com/og-image.jpg",
              "telephone": "+1-XXX-XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "State",
                "name": "Florida"
              },
              "medicalSpecialty": [
                "Adolescent Psychology",
                "Mental Health Counseling",
                "Anxiety Treatment",
                "Depression Treatment",
                "Trauma Therapy"
              ],
              "serviceType": "Virtual Therapy",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Therapy Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Teen Anxiety Therapy",
                      "description": "Virtual anxiety treatment for teenagers in Florida"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Teen Depression Therapy",
                      "description": "Virtual depression treatment for teenagers in Florida"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Teen Trauma Therapy",
                      "description": "Virtual trauma and PTSD treatment for teenagers in Florida"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  )
}
