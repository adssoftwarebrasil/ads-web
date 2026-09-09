function SectionHeading({ eyebrow, title, description, inverse = false, align = 'left' }) {
  return (
    <div className={`section-heading section-heading-${align} ${inverse ? 'section-heading-inverse' : ''}`} data-reveal>
      <p className="eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeading
