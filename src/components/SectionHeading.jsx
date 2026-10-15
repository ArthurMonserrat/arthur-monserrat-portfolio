export default function SectionHeading({ number, eyebrow, title, id, children }) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </div>
  )
}
