export default function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
