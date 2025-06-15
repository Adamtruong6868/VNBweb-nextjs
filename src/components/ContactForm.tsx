'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: '', title: '', message: '' })
  const [code, setCode] = useState('')
  const [step, setStep] = useState<'form' | 'verify'>('form')
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const requestVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending verification code...')
    const res = await fetch('/api/request-verification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const result = await res.json()
    setStatus(result.success ? 'Verification code sent to your email.' : result.error || 'Failed to send code.')
    if (result.success) setStep('verify')
  }

  const verifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Verifying...')
    const res = await fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email, code }),
    })
    const result = await res.json()
    setStatus(result.success ? '✅ Sent successfully! VNB will check your message!' : result.error || 'Verification failed.')
    if (result.success) {
      setStep('form')
      setFormData({ email: '', title: '', message: '' })
      setCode('')
    }
  }

  return (
    <form
      onSubmit={step === 'form' ? requestVerification : verifyCode}
      className="space-y-4 bg-black/30 backdrop-blur-lg border border-white/10 text-white rounded-xl shadow-xl p-6 w-full"
    >
      {step === 'form' ? (
        <>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="title"
            placeholder="Subject"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-white/10 border border-white/30 text-white backdrop-blur-md hover:bg-white/20 transition hover:shadow-lg"
          >
            Send Verification Code
          </button>
        </>
      ) : (
        <>
          <input
            name="code"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-white/10 border border-white/30 text-white backdrop-blur-md hover:bg-white/20 transition hover:shadow-lg"
          >
            Verify & Send Message
          </button>
        </>
      )}
      {status && <p className="text-sm text-white/80 mt-2">{status}</p>}
    </form>
  )
}
