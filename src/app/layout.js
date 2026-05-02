import './globals.css'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import LanguageProvider from './providers/LanguageProvider'
import NetworkBackground from './components/NetworkBackground'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://nextjs-portfolio.example.com'),
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description: 'My Next.js portfolio.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Portfolio',
    description: 'My Next.js portfolio.',
    url: 'https://nextjs-portfolio.example.com/',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://nextjs-portfolio.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description: 'My Next.js portfolio.',
    images: ['https://nextjs-portfolio.example.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans relative isolate overflow-x-hidden bg-[#0a192f]`}>
        <NetworkBackground />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
