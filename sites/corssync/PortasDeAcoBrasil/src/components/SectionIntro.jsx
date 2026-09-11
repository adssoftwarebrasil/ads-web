function SectionIntro({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-intro ${light ? "section-intro--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro__copy">{description}</p>}
    </div>
  );
}

export default SectionIntro;
