import { useState } from 'react'

const copy = {
  pt: {
    button: 'English',
    paragraph: 'Sou Arthur Monserrat Souza, estudante de Engenharia de Software. Este portfólio apresenta o Sistema de Apontamento de Horas do Ecossistema SM&A e sua tela de entrada para os sistemas Banco de Horas 1 e Banco de Horas 2 (Campo e Estudos).',
    facts: ['Formação: Engenharia de Software', 'Projeto: Sistema de Apontamento de Horas', 'Tecnologias: React, Vite, TypeScript e Supabase'],
  },
  en: {
    button: 'Português',
    paragraph: 'I am Arthur Monserrat Souza, a Software Engineering student. This portfolio presents the SM&A Ecosystem Time Tracking System and its entry screen for Banco de Horas 1 and Banco de Horas 2 (Field and Studies).',
    facts: ['Education: Software Engineering', 'Project: Time Tracking System', 'Technologies: React, Vite, TypeScript, and Supabase'],
  },
}

export default function About() {
  const [language, setLanguage] = useState('pt')
  const content = copy[language]
  const nextLanguage = language === 'pt' ? 'en' : 'pt'

  return (
    <div className="about-grid">
      <p>{content.paragraph}</p>
      <div>
        <button className="language-toggle" type="button" onClick={() => setLanguage(nextLanguage)} aria-pressed={language === 'en'}>
          {content.button}
        </button>
        <ul className="fact-list">
          {content.facts.map((fact) => <li key={fact}>{fact}</li>)}
        </ul>
      </div>
    </div>
  )
}
