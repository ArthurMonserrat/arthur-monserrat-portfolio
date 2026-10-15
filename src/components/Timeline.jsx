export default function Timeline({ entries, kind, language, copy }) {
  return (
    <ol className={`timeline ${kind}`}>
      {entries.map((entry) => (
        <li key={entry.title ?? entry.role}>
          <p className="timeline-year">{copy?.period ?? entry.year ?? entry.period}</p>
          <article>
            <p className="timeline-kicker">{copy?.organization ?? entry.organization ?? copy?.kicker ?? 'PROJETO'}</p>
            <h3>{copy?.title ?? copy?.role ?? entry.title ?? entry.role}</h3>
            {(copy?.paragraphs ?? [copy?.description ?? entry.description]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {entry.technologies && <ul className="tag-list">{entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
            {entry.images && <div className="project-gallery" role="group" aria-label={copy.galleryLabel}>
              {entry.images.map((image) => <figure key={image.src}><img src={image.src} alt={language === 'en' ? image.altEn : image.altPt} /><figcaption>{language === 'en' ? image.captionEn : image.captionPt}</figcaption></figure>)}
            </div>}
            {entry.repository && <div className="project-links"><a href={entry.repository} target="_blank" rel="noreferrer">GitHub ↗</a><a href={entry.demo} target="_blank" rel="noreferrer">Aplicação ↗</a></div>}
          </article>
        </li>
      ))}
    </ol>
  )
}
