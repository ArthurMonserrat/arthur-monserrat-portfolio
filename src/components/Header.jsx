const links = [
  ['Sobre', '#sobre'],
  ['Projetos', '#projetos'],
  ['Experiências', '#experiencias'],
  ['Contato', '#contato'],
]

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Arthur Monserrat, início">AM<span>.</span></a>
      <nav aria-label="Navegação principal">
        <ul>
          {links.map(([label, href], index) => (
            <li key={href}><a href={href}><span>0{index + 1}</span>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
