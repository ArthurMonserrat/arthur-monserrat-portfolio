import { useState } from 'react'

const copy = {
  pt: {
    button: 'English',
    paragraph: 'Sou Arthur Monserrat Souza, estudante do 3º período de Engenharia de Software na PUC Minas. Desde janeiro de 2025, atuo como Auxiliar Administrativo, com documentoscopia e análise de dados, áudios e documentos em processos de combate a fraudes. Tenho interesse em desenvolvimento web e interfaces.',
    facts: ['Formação: Engenharia de Software — PUC Minas', 'Interesses: desenvolvimento web e interfaces', 'Conhecimentos: HTML, CSS, JavaScript, Git e GitHub'],
  },
  en: {
    button: 'Português',
    paragraph: 'I am Arthur Monserrat Souza, a third-semester Software Engineering student at the Pontifical Catholic University of Minas Gerais. Since January 2025, I have worked as an Administrative Assistant, handling document examination and the analysis of data, audio, and documents in fraud prevention processes. I am interested in web development and interfaces.',
    facts: ['Education: Software Engineering — PUC Minas', 'Interests: web development and interfaces', 'Knowledge: HTML, CSS, JavaScript, Git, and GitHub'],
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
