import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, expect, test, vi } from 'vitest'
import emailjs from '@emailjs/browser'
import App from './App'

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }))

afterEach(() => {
  vi.clearAllMocks()
  vi.unstubAllEnvs()
})

test('renders the portfolio navigation and required sections', () => {
  render(<App />)

  expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /projetos/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /experiências/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /contato/i })).toBeInTheDocument()
})

test('renders the concise hero without secondary actions', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /Arthur Monserrat\./i })).toBeInTheDocument()
  expect(screen.queryByText(/Estudante de Engenharia de Software na PUC Minas/i)).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /ver projeto/i })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /entrar em contato/i })).not.toBeInTheDocument()
})

test('presents the verified current education and professional experience', () => {
  render(<App />)

  expect(screen.getByText(/Sou Arthur Monserrat, estudante do 3º período/i)).toBeInTheDocument()
  expect(screen.getByText(/Desde 2026, sou estagiário na SM&A/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /estagiário/i })).toBeInTheDocument()
  expect(screen.getByText('2026 — Atual')).toBeInTheDocument()
  expect(screen.getByText(/Atuação com softwares industriais/i)).toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: /auxiliar administrativo/i })).not.toBeInTheDocument()
})

test('switches the about section to English', () => {
  render(<App />)

  expect(screen.getAllByText(/PUC Minas/i).length).toBeGreaterThan(0)
  fireEvent.click(screen.getByRole('button', { name: /english/i }))

  expect(screen.getByText(/I’m Arthur Monserrat, a third-semester Software Engineering student at PUC Minas/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /português/i })).toHaveAttribute('aria-pressed', 'true')
})

test('keeps every section available through the mobile menu and marks the selected section', () => {
  render(<App />)

  const navigation = screen.getByRole('navigation', { name: /navegação principal/i })
  const menuButton = within(navigation).getByRole('button', { name: /abrir menu/i })
  expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  fireEvent.click(menuButton)
  const contactLink = within(navigation).getByRole('link', { name: /contato/i })
  fireEvent.click(contactLink)
  expect(contactLink).toHaveAttribute('aria-current', 'page')
})

test('shows only the private corporate project with its correctly identified entry capture', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /sistema de apontamento de horas/i })).toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: /banco de horas 2/i })).not.toBeInTheDocument()
  expect(screen.getByRole('img', { name: /tela de entrada do ecossistema SM&A/i })).toHaveAttribute('src', '/images/projects/sistema-apontamento-horas.png')
  expect(screen.getByText(/portal do ecossistema SM&A/i)).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /^github ↗$/i })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /^aplicação ↗$/i })).not.toBeInTheDocument()
})

test('presents direct contact channels without implementation copy', () => {
  render(<App />)

  expect(screen.getByText(/vamos conversar sobre um projeto/i)).toBeInTheDocument()
  expect(screen.queryByText(/o formulário usa emailjs/i)).not.toBeInTheDocument()
  expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/ArthurMonserrat')
  expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/arthurmonserrat')
  expect(screen.getByRole('link', { name: /e-mail/i })).toHaveAttribute('href', 'mailto:arthurmonserrat6@gmail.com')
})

test('shows validation errors and does not claim a configured email delivery', () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }))

  expect(screen.getByText(/informe seu nome/i)).toBeInTheDocument()
  expect(screen.getByText(/informe um e-mail válido/i)).toBeInTheDocument()
  expect(screen.getByText(/pelo menos 10 caracteres/i)).toBeInTheDocument()
})

test('keeps unavailable delivery feedback free of implementation details', () => {
  render(<App />)

  fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Visitante' } })
  fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'visitante@example.com' } })
  fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Mensagem de teste válida.' } })
  fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }))

  expect(screen.getByRole('status')).toHaveTextContent(/o envio não está disponível agora/i)
  expect(screen.queryByText(/emailjs/i)).not.toBeInTheDocument()
})

test('shows a friendly confirmation after EmailJS accepts a valid message', async () => {
  vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service')
  vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template')
  vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public')
  emailjs.send.mockResolvedValue({ status: 200 })
  render(<App />)

  fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Visitante' } })
  fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'visitante@example.com' } })
  fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Mensagem de teste válida.' } })
  fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }))

  expect(await screen.findByRole('status')).toHaveTextContent(/mensagem enviada com sucesso/i)
  expect(emailjs.send).toHaveBeenCalledOnce()
})

test('keeps EmailJS failures technical-detail-free for visitors', async () => {
  vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service')
  vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template')
  vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public')
  emailjs.send.mockRejectedValue(new Error('EmailJS response 403'))
  render(<App />)

  fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Visitante' } })
  fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'visitante@example.com' } })
  fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Mensagem de teste válida.' } })
  fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }))

  expect(await screen.findByRole('status')).toHaveTextContent(/não foi possível enviar/i)
  expect(screen.queryByText(/emailjs|403/i)).not.toBeInTheDocument()
})
