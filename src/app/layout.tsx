import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'VNB Solutions',
  description: 'Empowering the decentralized future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        {/* 🔁 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/assets/background-earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🌑 Dark Overlay */}
        <div className="fixed inset-0 bg-black/60 pointer-events-none -z-10" />

        {/* ✅ Page Content */}
        <Header />
        <main className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
