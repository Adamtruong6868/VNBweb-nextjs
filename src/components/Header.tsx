'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/smalllogo.svg"
            alt="VNB Logo"
            width={40} // ✅ Required
            height={40} // ✅ Required
            className="w-10 h-auto"
            style={{
              animation: 'rotate3dLogo 20s linear infinite',
              transform: 'perspective(750px) rotate3d(180, -45, 0, -130deg)',
            }}
          />
          <span className="font-semibold text-lg hidden sm:inline">
            <span className="text-red-800">V</span>
            <span className="text-yellow-200">N</span>
            <span className="text-sky-400">B</span> Solutions
          </span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/solutions">AI Solutions</Link>
          <Link href="/gamefi">GameFi</Link>
          <Link href="/nodes">Node Projects</Link>
        </nav>
      </div>
    </header>
  )
}
