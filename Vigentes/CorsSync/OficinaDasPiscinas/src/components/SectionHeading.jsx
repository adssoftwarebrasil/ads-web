export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <div
      className={`section-heading section-heading--${align}${
        light ? " section-heading--light" : ""
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
