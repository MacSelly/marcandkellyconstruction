import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Oswald, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://marcandkellyconstruction.com'

export const metadata: Metadata = {
  title: 'Marc & Kelly Construction | Commercial & Residential Painting — Accra, Ghana',
  description:
    'Professional painting and construction services with 20+ years coating offices, hotels, warehouses and luxury homes across Accra and Ghana. Free on-site estimates.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Marc & Kelly Construction | Commercial & Residential Painting',
    description:
      'Professional painting and construction services with 20+ years coating offices, hotels, warehouses and luxury homes across Accra and Ghana.',
    url: siteUrl,
    siteName: 'Marc & Kelly Construction',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-painter.png',
        width: 1200,
        height: 630,
        alt: 'Cole Hartman — Commercial Painter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marc & Kelly Construction | Commercial & Residential Painting',
    description:
      'Professional painting and construction services with 20+ years coating offices, hotels, warehouses and luxury homes across Accra and Ghana.',
    images: ['/hero-painter.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Marc & Kelly Construction',
  description:
    'Professional painting and construction services with 20+ years coating offices, hotels, warehouses and luxury homes across Accra and Ghana.',
  url: siteUrl,
  telephone: '+233249659930',
  email: 'markselly19@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dansoman',
    addressRegion: 'Accra',
    addressCountry: 'GH',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 5.5600,
      longitude: -0.2500,
    },
    geoRadius: '50000',
  },
  priceRange: '$$',
  openingHours: 'Mo-Fr 07:00-18:00',
  founder: {
    '@type': 'Person',
    name: 'Marc Kelly',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${geistMono.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
