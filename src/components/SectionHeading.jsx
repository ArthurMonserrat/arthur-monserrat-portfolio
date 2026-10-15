export default function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
