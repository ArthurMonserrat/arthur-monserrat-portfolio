import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialForm = { name: '', email: '', message: '' }

const contactLinks = [
  { id: 'github', href: 'https://github.com/ArthurMonserrat', external: true, icon: 'github' },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/arthurmonserrat', external: true, icon: 'linkedin' },
  { id: 'gmail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=arthur-monserrat6%40gmail.com', external: true, icon: 'gmail' },
  { id: 'whatsapp', href: 'https://wa.me/5531999501190', external: true, icon: 'whatsapp' },
]

function ContactIcon({ name }) {
  if (name === 'github') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.91.68 1.84v2.73c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" /></svg>
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.25 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.75 8.5h3v12h-3v-12Zm4.88 0h2.87v1.64h.04c.4-.76 1.38-1.96 2.84-1.96 3.04 0 3.6 2 3.6 4.6v7.72h-3v-6.84c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.61v6.96h-3V8.5Z" fill="currentColor" /></svg>
  if (name === 'gmail') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17v-13Zm1.7 1.8v.18l6.8 5.1 6.8-5.1V7.3H5.2Zm13.6 9.4v-7l-6.8 5.1-6.8-5.1v7h13.6Z" fill="currentColor" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.25A9.5 9.5 0 1 0 12 2.5Zm0 17.2a7.7 7.7 0 0 1-3.93-1.08l-.28-.17-2.85.74.76-2.77-.18-.29A7.7 7.7 0 1 1 12 19.7Zm4.22-5.77c-.23-.12-1.35-.67-1.56-.75-.21-.08-.36-.12-.52.12-.15.23-.59.75-.72.9-.13.16-.27.17-.5.06-.23-.12-.97-.36-1.84-1.14-.68-.61-1.14-1.36-1.27-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.35c.12.15 1.61 2.47 3.9 3.46.54.23.96.36 1.29.46.54.17 1.03.15 1.42.09.43-.06 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.44-.27Z" fill="currentColor" /></svg>
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = true
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = true
  if (form.message.trim().length < 10) errors.message = true
  return errors
}

function isConfigured() {
  return Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
}

export default function Contact({ copy }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  function update(field, value) { setForm((current) => ({ ...current, [field]: value })) }

  async function submit(event) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    if (!isConfigured()) {
      setStatus(copy.unavailable)
      return
    }
    setSending(true)
    setStatus('')
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { ...form, title: copy.subject }, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
      setStatus(copy.success)
      setForm(initialForm)
    } catch {
      setStatus(copy.failure)
    } finally { setSending(false) }
  }

  return (
    <div className="contact-grid">
      <div>
        <p className="contact-copy">{copy.description}</p>
        <ul className="contact-links" aria-label={copy.channelsLabel}>
          {contactLinks.map(({ id, href, external, icon }) => (
            <li key={id}>
              <a className="contact-link" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <ContactIcon name={icon} />
                <span>{copy.channels[id]}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="contact-fallback">{copy.channels.fallback} <a href="mailto:arthurmonserrat6@gmail.com">{copy.channels.emailDirect}</a></p>
      </div>
      <form noValidate onSubmit={submit}>
        <label htmlFor="name">{copy.fields.name}</label><input id="name" value={form.name} onChange={(event) => update('name', event.target.value)} aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <p id="name-error" className="field-error">{copy.errors.name}</p>}
        <label htmlFor="email">{copy.fields.email}</label><input id="email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p id="email-error" className="field-error">{copy.errors.email}</p>}
        <label htmlFor="message">{copy.fields.message}</label><textarea id="message" rows="5" value={form.message} onChange={(event) => update('message', event.target.value)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className="field-error">{copy.errors.message}</p>}
        <button className="submit-button" type="submit" disabled={sending}>{sending ? copy.sending : copy.submit}</button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </div>
  )
}
