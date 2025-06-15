import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { otpMap } from '@/lib/otpStore'

export async function POST(req: Request) {
  const { email, code } = await req.json()
  const entry = otpMap.get(email)

  if (!entry || entry.code !== code) {
    return NextResponse.json({ success: false, error: 'Invalid or expired code' }, { status: 400 })
  }

  otpMap.delete(email)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"VNB Contact Form" <${process.env.CONTACT_EMAIL}>`,
    to: 'truongdat.ecc@gmail.com',
    subject: `Contact: ${entry.title}`,
    text: `From: ${email}\n\n${entry.message}`,
  })

  return NextResponse.json({ success: true })
}
