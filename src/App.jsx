import Footer from './components/Footer'
import Header from './components/Header'
import SectionHeading from './components/SectionHeading'

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <p className="eyebrow">PORTFÓLIO / 2026</p>
          <h1 id="hero-title">Arthur<br />Monserrat <em>Souza.</em></h1>
          <p className="hero-copy">Estudante de Engenharia de Software, interessado em transformar problemas em experiências digitais claras.</p>
          <a className="text-link" href="#projetos">Ver projetos <span aria-hidden="true">↓</span></a>
        </section>

        <section id="sobre" aria-labelledby="sobre-title">
          <SectionHeading number="01" eyebrow="APRESENTAÇÃO" title="Sobre mim" />
          <p className="section-placeholder" id="sobre-title">Uma apresentação bilíngue será adicionada com informações verificadas do Arthur.</p>
        </section>

        <section id="projetos" aria-labelledby="projetos-title">
          <SectionHeading number="02" eyebrow="TRABALHOS SELECIONADOS" title="Projetos" />
          <p className="section-placeholder" id="projetos-title">Projetos públicos e capturas reais serão organizados aqui em ordem cronológica.</p>
        </section>

        <section id="experiencias" aria-labelledby="experiencias-title">
          <SectionHeading number="03" eyebrow="PERCURSO" title="Experiências" />
          <p className="section-placeholder" id="experiencias-title">Experiências acadêmicas e técnicas verificadas serão apresentadas com contexto e período.</p>
        </section>

        <section id="contato" aria-labelledby="contato-title">
          <SectionHeading number="04" eyebrow="VAMOS CONVERSAR" title="Contato" />
          <p className="section-placeholder" id="contato-title">Os canais de contato e o formulário estarão disponíveis nesta seção.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
