function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'is-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}

export default SectionTitle

