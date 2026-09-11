function SectionIntro({ eyebrow, title, text, light = false, align = "left", titleId }) {
  return (
    <div className={`section-intro ${light ? "section-intro--light" : ""} section-intro--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {text && <p className="section-intro__text">{text}</p>}
    </div>
  );
}

export default SectionIntro;
