import Footer from './components/Footer'
import Header from './components/Header'
import SectionHeading from './components/SectionHeading'
import About from './components/About'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import { experiences, projects } from './data/portfolio'
import useLanguage from './hooks/useLanguage'

export default function App() {
  const { language, setLanguage, copy } = useLanguage()

  return (
    <div className="page-shell">
      <Header language={language} setLanguage={setLanguage} copy={copy} />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">{copy.hero.title}<br /><em>{copy.hero.surname}</em></h1>
          <p className="hero-copy">{copy.hero.copy}</p>
        </section>

        <section id="sobre" aria-labelledby="sobre-title">
          <SectionHeading number="01" eyebrow={copy.sections.about.eyebrow} title={copy.sections.about.title} id="sobre-title" />
          <About language={language} copy={copy.about} />
        </section>

        <section id="projetos" aria-labelledby="projetos-title">
          <SectionHeading number="02" eyebrow={copy.sections.projects.eyebrow} title={copy.sections.projects.title} id="projetos-title" />
          <Timeline entries={projects} kind="projects" language={language} copy={copy.project} />
        </section>

        <section id="experiencias" aria-labelledby="experiencias-title">
          <SectionHeading number="03" eyebrow={copy.sections.experience.eyebrow} title={copy.sections.experience.title} id="experiencias-title" />
          <Timeline entries={experiences} kind="experiences" language={language} copy={copy.experience} />
        </section>

        <section id="contato" aria-labelledby="contato-title">
          <SectionHeading number="04" eyebrow={copy.sections.contact.eyebrow} title={copy.sections.contact.title} id="contato-title" />
          <Contact copy={copy.contact} />
        </section>
      </main>
      <Footer copy={copy} />
    </div>
  )
}
