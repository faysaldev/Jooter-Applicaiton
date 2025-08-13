import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD },
})

export default async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  await transporter.sendMail({ from: process.env.EMAIL_USERNAME, to, subject, html })
}