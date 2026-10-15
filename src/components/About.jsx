import { useState } from 'react'

const copy = {
  pt: {
    button: 'English',
    paragraph: 'Sou Arthur Monserrat Souza, estudante de Engenharia de Software. Este espaço reúne projetos em desenvolvimento web e uma trajetória construída com aprendizado contínuo.',
    facts: ['Formação: Engenharia de Software', 'Foco: aplicações web', 'Objetivo: construir soluções claras e úteis'],
  },
  en: {
    button: 'Português',
    paragraph: 'I am Arthur Monserrat Souza, a Software Engineering student. This space brings together web development projects and a journey built through continuous learning.',
    facts: ['Education: Software Engineering', 'Focus: web applications', 'Goal: build clear and useful solutions'],
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
