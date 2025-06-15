'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import Modal from './Modal'

export default function Footer() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto'
  }, [showModal])

  return (
    <footer className="bg-black/70 backdrop-blur text-white px-4 py-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo + Social Icons */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/smalllogo.png"
            alt="VNB Logo"
            className="w-10 h-10"
            style={{
              animation: 'rotate3dLogo 20s linear infinite',
              transform: 'perspective(750px) rotate3d(180, -45, 0, -130deg)',
            }}
          />
          <div className="flex gap-3">
            <a href="https://t.me/Vnbnode" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/socials/telegram.svg" alt="Telegram" className="w-5 h-5" />
            </a>
            <a href="https://discord.gg/g3AbxxkCGa" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/socials/discord.svg" alt="Discord" className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/VNBnode" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/socials/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://x.com/vnbnode" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/socials/x.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="https://github.com/vnbnode" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/socials/github.svg" alt="GitHub" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-sm text-center text-gray-400 flex-1">
          &copy; {new Date().getFullYear()} VNB Solutions. All rights reserved.
        </div>

        {/* Right: Contact Button */}
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md shadow-md hover:bg-white/20 hover:shadow-xl transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} title="VNB is happy to hear from you">
          <ContactForm />
        </Modal>
      )}
    </footer>
  )
}
