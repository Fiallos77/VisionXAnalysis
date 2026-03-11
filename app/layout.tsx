import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vision X Analysis',
    template: '%s | Vision X Analysis',
  },
  description:
    'Independent football scouting and video analysis. Identifying patterns, profiling players, and decoding the game.',
  keywords: ['football analysis', 'scouting', 'video analysis', 'tactical analysis'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body className="bg-pitch-black text-text-primary font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
