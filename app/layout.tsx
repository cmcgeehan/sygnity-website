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
  title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
  description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers. Licensed therapists specializing in adolescent mental health.',
  authors: [{ name: 'Avela Therapy Team' }],
  keywords: ['teen therapy florida', 'virtual teen counseling', 'teen anxiety therapy', 'teen depression treatment', 'adolescent mental health'],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avelatherapy.com/',
    siteName: 'Avela Therapy',
    title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
    description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers.',
    images: [
      {
        url: 'https://avelatherapy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Avela Therapy - Teen Therapy Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Therapy Florida | Virtual Teen Anxiety & Depression Treatment - Avela Therapy',
    description: 'Professional teen therapy services in Florida. Virtual anxiety, depression, and trauma treatment for teenagers.',
    images: ['https://avelatherapy.com/og-image.jpg']
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
        <link rel="icon" href="/avelaWordmark.png" type="image/png" />
        <link rel="apple-touch-icon" href="/avelaWordmark.png" />
        <link rel="icon" type="image/png" sizes="any" href="/avelaWordmark.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Avela Therapy",
              "description": "Virtual teen therapy in Florida specializing in anxiety, depression, and trauma treatment",
              "url": "https://avelatherapy.com",
              "logo": "https://avelatherapy.com/avelaWordmark.png",
              "image": "https://avelatherapy.com/og-image.jpg",
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
