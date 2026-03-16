import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CS & S Tree Experts | Professional Tree Services in Memphis',
  description: 'Chris Sampley - Expert tree trimming, removal, and stump grinding services in Memphis, TN. Licensed & insured. Free estimates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
