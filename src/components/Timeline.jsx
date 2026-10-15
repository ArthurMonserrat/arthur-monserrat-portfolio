export default function Timeline({ entries, kind }) {
  return (
    <ol className={`timeline ${kind}`}>
      {entries.map((entry) => (
        <li key={entry.title ?? entry.role}>
          <p className="timeline-year">{entry.year ?? entry.period}</p>
          <article>
            <p className="timeline-kicker">{entry.organization ?? 'PROJETO'}</p>
            <h3>{entry.title ?? entry.role}</h3>
            <p>{entry.description}</p>
            {entry.technologies && <ul className="tag-list">{entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
            {entry.image ? <img src={entry.image} alt={`Captura da aplicação ${entry.title}`} /> : kind === 'projects' && <p className="evidence-note">Captura real da aplicação: pendente de registro.</p>}
            {entry.repository && <div className="project-links"><a href={entry.repository} target="_blank" rel="noreferrer">GitHub ↗</a><a href={entry.demo} target="_blank" rel="noreferrer">Aplicação ↗</a></div>}
          </article>
        </li>
      ))}
    </ol>
  )
}
