import { useEffect, useState } from 'react'

export default function Header({ language, setLanguage, copy }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const links = [
    [copy.nav.about, '#sobre'],
    [copy.nav.projects, '#projetos'],
    [copy.nav.experience, '#experiencias'],
    [copy.nav.contact, '#contato'],
  ]

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
      <div className="site-header__inner">
        <a className="brand" href="#inicio" aria-label={language === 'pt' ? 'Arthur Monserrat, início' : 'Arthur Monserrat, home'}>AM<span>.</span></a>
        <nav aria-label={copy.navLabel}>
          <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-menu" aria-label={isOpen ? copy.menu.close : copy.menu.open} onClick={() => setIsOpen((open) => !open)}>
            <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
          </button>
          <ul id="primary-menu" className={isOpen ? 'is-open' : ''}>
            {links.map(([label, href], index) => (
              <li key={href}><a href={href} aria-current={activeHref === href ? 'page' : undefined} onClick={() => selectLink(href)}><span>0{index + 1}</span>{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="language-switcher" aria-label={language === 'pt' ? 'Idioma' : 'Language'}>
          <button type="button" className="language-option" aria-label="Português" aria-pressed={language === 'pt'} onClick={() => setLanguage('pt')}>PT</button>
          <span aria-hidden="true">|</span>
          <button type="button" className="language-option" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
        </div>
      </div>
    </header>
  )
}
