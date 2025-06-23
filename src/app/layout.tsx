import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'LVNG.ai - Next-Generation AI Integration for Enterprise',
  description: 'Transform your enterprise with autonomous AI systems that continuously evolve and optimize. From strategy to implementation - we architect your intelligent future.',
  keywords: ['AI integration', 'enterprise AI', 'autonomous AI', 'agentic AI', 'AI automation', 'AI consulting'],
  authors: [{ name: 'LVNG.ai' }],
  creator: 'LVNG.ai',
  publisher: 'LVNG.ai',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lvng.ai',
    title: 'LVNG.ai - Next-Generation AI Integration for Enterprise',
    description: 'Transform your enterprise with autonomous AI systems that continuously evolve and optimize.',
    siteName: 'LVNG.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LVNG.ai - Enterprise AI Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LVNG.ai - Next-Generation AI Integration for Enterprise',
    description: 'Transform your enterprise with autonomous AI systems that continuously evolve and optimize.',
    images: ['/og-image.jpg'],
    creator: '@lvng_ai',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
} 