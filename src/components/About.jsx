export default function About({ copy }) {
  return (
    <div className="about-grid">
      <p className="about-copy">{copy.paragraph}</p>
      <div>
        <ul className="fact-list">
          {copy.facts.map((fact) => <li key={fact}>{fact}</li>)}
        </ul>
      </div>
    </div>
  )
}
