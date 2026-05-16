import type { Metadata } from 'next'
import { Orbitron, Space_Mono } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KD Smart Transport - Cyberpunk Ride-Sharing',
  description: 'Next-generation ride-sharing platform with cyberpunk neon UI and 3D interactive effects',
  keywords: ['ride-sharing', 'transport', 'cyberpunk', 'technology', 'Pakistan'],
  authors: [{ name: 'KD Smart Transport Team' }],
  openGraph: {
    title: 'KD Smart Transport',
    description: 'Revolutionary ride-sharing platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceMono.variable}`}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Scanline Effect */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.04)_4px)] z-50" />
        </div>

        {/* Main Content */}
        <main className="relative z-0">
          {children}
        </main>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </body>
    </html>
  )
}
