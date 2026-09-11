function SectionHeading({ eyebrow, title, description, inverse = false }) {
  return (
    <div className={`section-heading ${inverse ? "section-heading--inverse" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;
