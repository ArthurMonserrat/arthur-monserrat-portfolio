import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders the portfolio navigation and required sections', () => {
  render(<App />)

  expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /projetos/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /experiências/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /contato/i })).toBeInTheDocument()
})

test('switches the about section to English', () => {
  render(<App />)

  expect(screen.getAllByText(/PUC Minas/i).length).toBeGreaterThan(0)
  fireEvent.click(screen.getByRole('button', { name: /english/i }))

  expect(screen.getByText(/Pontifical Catholic University of Minas Gerais/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /português/i })).toHaveAttribute('aria-pressed', 'true')
})

test('keeps every section available through the mobile menu and marks the selected section', () => {
  render(<App />)

  const navigation = screen.getByRole('navigation', { name: /navegação principal/i })
  expect(within(navigation).getByRole('button', { name: /abrir menu/i })).toHaveAttribute('aria-expanded', 'false')
  fireEvent.click(within(navigation).getByRole('button', { name: /abrir menu/i }))
  expect(within(navigation).getByRole('button', { name: /fechar menu/i })).toHaveAttribute('aria-expanded', 'true')
  const contactLink = within(navigation).getByRole('link', { name: /contato/i })
  fireEvent.click(contactLink)
  expect(contactLink).toHaveAttribute('aria-current', 'page')
})

test('offers the sanitised public resume for download', () => {
  render(<App />)

  expect(screen.getByRole('link', { name: /baixar currículo/i })).toHaveAttribute('href', '/curriculo/arthur-monserrat-curriculo-publico.pdf')
  expect(screen.getAllByText(/Auxiliar Administrativo/i).length).toBeGreaterThan(0)
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
