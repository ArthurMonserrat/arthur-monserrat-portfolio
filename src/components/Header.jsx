import { useEffect, useState } from 'react'

const links = [
  ['Sobre', '#sobre'],
  ['Projetos', '#projetos'],
  ['Experiências', '#experiencias'],
  ['Contato', '#contato'],
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActiveHref(`#${visible.target.id}`)
    }, { rootMargin: '-35% 0px -55% 0px' })

    links.forEach(([, href]) => {
      const section = document.querySelector(href)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  function selectLink(href) {
    setActiveHref(href)
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Arthur Monserrat, início">AM<span>.</span></a>
      <nav aria-label="Navegação principal">
        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-menu" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen((open) => !open)}>
          <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
        </button>
        <ul id="primary-menu" className={isOpen ? 'is-open' : ''}>
          {links.map(([label, href], index) => (
            <li key={href}><a href={href} aria-current={activeHref === href ? 'page' : undefined} onClick={() => selectLink(href)}><span>0{index + 1}</span>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
