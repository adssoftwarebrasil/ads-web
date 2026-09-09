function SectionHeading({ eyebrow, title, description, align = "left", theme = "light" }) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${theme}`}>
      <p className="eyebrow">
        <span aria-hidden="true" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}

export default SectionHeading;
