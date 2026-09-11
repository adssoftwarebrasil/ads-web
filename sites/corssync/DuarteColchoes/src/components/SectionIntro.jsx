export default function SectionIntro({ eyebrow, title, copy, align = 'left', inverse = false }) {
  return (
    <div className={`section-intro section-intro--${align} ${inverse ? 'section-intro--inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-intro__copy">{copy}</p>}
    </div>
  )
}

