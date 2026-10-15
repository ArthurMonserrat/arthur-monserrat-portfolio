import { fireEvent, render, screen } from '@testing-library/react'
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

  fireEvent.click(screen.getByRole('button', { name: /english/i }))

  expect(screen.getByText(/software engineering student/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /português/i })).toHaveAttribute('aria-pressed', 'true')
})

test('shows validation errors and does not claim a configured email delivery', () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }))

  expect(screen.getByText(/informe seu nome/i)).toBeInTheDocument()
  expect(screen.getByText(/informe um e-mail válido/i)).toBeInTheDocument()
  expect(screen.getByText(/pelo menos 10 caracteres/i)).toBeInTheDocument()
})
