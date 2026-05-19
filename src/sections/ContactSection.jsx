import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'

const contacts = [
  { label: 'Email', value: 'lealemsisay6@gmail.com', icon: FaEnvelope, href: 'mailto:lealemsisay6@gmail.com' },
  { label: 'Phone', value: '+251984780317 ', icon: FaPhone, href: 'tel:+251984780317' },
  { label: 'Location', value: 'Addis Ababa, Ethiopia', icon: FaLocationDot, href: '#' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lealem-sisay-1340b5375?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/lealemsisay', icon: FaGithub },
]

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_su5nnne'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_chg9yui'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'ka4V2o8YcievjpZpQ'

export default function ContactSection({ theme = 'dark' }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatusMessage('')

    const payload = {
      source: 'Portfolio',
      name: formData.name,
      email: formData.email,
      time: new Date().toLocaleString(),
      message: formData.message,
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload)
      setStatusMessage('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      const details = error?.text || error?.message || 'Please try again.'
      setStatusMessage(`Failed to send message: ${details}`)
    } finally {
      setIsSending(false)
    }
  }

  const isLight = theme === 'light'
  const fieldBaseClass = `w-full rounded-lg border px-3 py-2 text-sm transition-colors duration-300 focus:outline-none ${
    isLight
      ? 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
      : 'border-white/15 bg-slate-900/60 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/55 focus:ring-2 focus:ring-cyan-300/20'
  }`

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Let us Build Something Useful"
        subtitle="Open to software engineering opportunities, collaboration, and product-focused projects."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45 }}
      >
        <Card
          className={
            isLight
              ? 'border-slate-300 bg-white/85 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.35)] hover:border-blue-300/80'
              : ''
          }
        >
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-4">
              {contacts.map(({ label, value, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors duration-300 ${
                      isLight
                        ? 'border-slate-300 bg-slate-50 text-slate-800 hover:border-blue-400 hover:bg-blue-50'
                        : 'border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-300/40 hover:bg-white/[0.06]'
                    }`}
                  >
                    <Icon className={isLight ? 'text-blue-500' : 'text-cyan-300'} />
                    <span>
                      <span className={`block text-xs uppercase tracking-[0.15em] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {label}
                      </span>
                      <span className="text-sm">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`rounded-xl border p-4 transition-colors duration-300 ${
                isLight ? 'border-slate-300 bg-slate-50' : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Social</p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors duration-300 ${
                      isLight
                        ? 'border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600'
                        : 'border-white/15 bg-white/[0.04] text-slate-200 hover:border-blue-300/45 hover:bg-blue-400/10'
                    }`}
                  >
                    <Icon className={isLight ? 'text-blue-500' : 'text-blue-300'} />
                    {label}
                  </a>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className={`mb-1 block text-xs uppercase tracking-[0.12em] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={fieldBaseClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`mb-1 block text-xs uppercase tracking-[0.12em] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className={fieldBaseClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`mb-1 block text-xs uppercase tracking-[0.12em] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className={`${fieldBaseClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 disabled:cursor-not-allowed ${
                    isLight
                      ? 'bg-slate-900 hover:bg-slate-700 disabled:bg-slate-400'
                      : 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/60'
                  }`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {statusMessage && (
                  <p
                    className={`text-sm ${
                      statusMessage.toLowerCase().includes('success')
                        ? isLight
                          ? 'text-emerald-700'
                          : 'text-emerald-300'
                        : isLight
                          ? 'text-rose-700'
                          : 'text-rose-300'
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
