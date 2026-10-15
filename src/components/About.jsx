import { useState } from 'react'

const copy = {
  pt: {
    button: 'English',
    paragraph: 'Sou Arthur Monserrat, estudante do 3º período de Engenharia de Software na PUC Minas. Desde 2026, sou estagiário na SM&A, onde trabalho com softwares industriais. Essa experiência me permite aproximar os conhecimentos da graduação da prática profissional e ampliar minha compreensão sobre o desenvolvimento e a aplicação de sistemas em ambientes industriais.',
    facts: ['Formação: Engenharia de Software — PUC Minas', 'Interesses: desenvolvimento web, interfaces e software', 'Conhecimentos: HTML, CSS, JavaScript, Git e GitHub'],
  },
  en: {
    button: 'Português',
    paragraph: 'I’m Arthur Monserrat, a third-semester Software Engineering student at PUC Minas. Since 2026, I’ve been an intern at SM&A, working with industrial software. This experience allows me to connect what I learn at university with professional practice and gain a deeper understanding of software development and its application in industrial environments.',
    facts: ['Education: Software Engineering — PUC Minas', 'Interests: web development, interfaces, and software', 'Knowledge: HTML, CSS, JavaScript, Git, and GitHub'],
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
