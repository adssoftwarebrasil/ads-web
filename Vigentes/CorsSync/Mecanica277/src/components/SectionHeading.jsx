function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-heading__copy">{description}</p>}
    </div>
  )
}

export default SectionHeading
