import Footer from './components/Footer'
import Header from './components/Header'
import SectionHeading from './components/SectionHeading'
import About from './components/About'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import { experiences, projects } from './data/portfolio'

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <p className="eyebrow">PORTFÓLIO / 2026</p>
          <h1 id="hero-title">Arthur<br /><em>Monserrat.</em></h1>
          <p className="hero-copy">Estudante de Engenharia de Software na PUC Minas, com interesse em desenvolvimento web e interfaces.</p>
        </section>

        <section id="sobre" aria-labelledby="sobre-title">
          <SectionHeading number="01" eyebrow="APRESENTAÇÃO" title="Sobre mim" id="sobre-title" />
          <About />
        </section>

        <section id="projetos" aria-labelledby="projetos-title">
          <SectionHeading number="02" eyebrow="TRABALHOS SELECIONADOS" title="Projetos" id="projetos-title" />
          <Timeline entries={projects} kind="projects" />
        </section>

        <section id="experiencias" aria-labelledby="experiencias-title">
          <SectionHeading number="03" eyebrow="PERCURSO" title="Experiências" id="experiencias-title" />
          <Timeline entries={experiences} kind="experiences" />
        </section>

        <section id="contato" aria-labelledby="contato-title">
          <SectionHeading number="04" eyebrow="VAMOS CONVERSAR" title="Contato" id="contato-title" />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
