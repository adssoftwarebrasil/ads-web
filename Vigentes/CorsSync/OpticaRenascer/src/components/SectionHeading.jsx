function SectionHeading({ eyebrow, title, text, light = false, align = 'left' }) {
  return (
    <div className={'section-heading section-heading--' + align + (light ? ' section-heading--light' : '')}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}

export default SectionHeading
