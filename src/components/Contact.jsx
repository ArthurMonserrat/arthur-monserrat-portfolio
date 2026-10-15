import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Informe seu nome.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Informe um e-mail válido.'
  if (form.message.trim().length < 10) errors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
  return errors
}

function isConfigured() {
  return Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
}

export default function Contact() {
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
      setStatus('Envio não configurado: adicione as variáveis públicas do EmailJS para ativar o formulário.')
      return
    }
    setSending(true)
    setStatus('')
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { ...form, title: 'Mensagem do portfólio' }, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
      setStatus('Mensagem enviada com sucesso.')
      setForm(initialForm)
    } catch {
      setStatus('Não foi possível enviar a mensagem. Tente novamente mais tarde.')
    } finally { setSending(false) }
  }

  return (
    <div className="contact-grid">
      <div><p>O formulário usa EmailJS e só é considerado funcional após a configuração e o teste real de envio.</p><a className="text-link" href="https://github.com/ArthurMonserrat" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      <form noValidate onSubmit={submit}>
        <label htmlFor="name">Nome</label><input id="name" value={form.name} onChange={(event) => update('name', event.target.value)} aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
        <label htmlFor="email">E-mail</label><input id="email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
        <label htmlFor="message">Mensagem</label><textarea id="message" rows="5" value={form.message} onChange={(event) => update('message', event.target.value)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
        <button className="submit-button" type="submit" disabled={sending}>{sending ? 'Enviando…' : 'Enviar mensagem'}</button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </div>
  )
}
