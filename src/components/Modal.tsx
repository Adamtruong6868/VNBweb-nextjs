// src/components/Modal.tsx
'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({
  children,
  onClose,
  showClose = true,
}: {
  children: ReactNode
  onClose: () => void
  showClose?: boolean
  title?: string
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (typeof window === 'undefined') return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center overflow-y-auto p-4">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl text-white p-6 sm:p-8 animate-fadeIn">
        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-white/70 hover:text-white text-2xl font-bold transition-transform duration-200 hover:scale-125"
            aria-label="Close modal"
          >
            &times;
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  )
}
