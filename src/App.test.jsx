import { render, screen } from '@testing-library/react'
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
