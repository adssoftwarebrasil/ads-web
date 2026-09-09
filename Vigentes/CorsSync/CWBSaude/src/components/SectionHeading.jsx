function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'dark' }) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${tone}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export default SectionHeading
