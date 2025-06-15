import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { otpMap } from '@/lib/otpStore'

export async function POST(req: Request) {
  const { email, title, message } = await req.json()
  const code = Math.floor(100000 + Math.random() * 900000).toString()

  otpMap.set(email, { code, title, message })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"VNB Solutions to verify" <${process.env.CONTACT_EMAIL}>`,
    to: email,
    subject: 'Your Verification Code',
    text: `Use this code: ${code}`,
  })

  return NextResponse.json({ success: true })
}
