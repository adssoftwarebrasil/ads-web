import Icon from "../components/Icon";
import { highlights, makeWhatsappLink } from "../data/siteData";

function ServiceHighlights() {
  return (
    <section className="highlights" aria-label="Soluções em destaque">
      <div className="container highlights__grid">
        {highlights.map((item, index) => (
          <article
            className={`highlight-card reveal reveal--delay-${index + 1}`}
            key={item.title}
          >
            <div className="highlight-card__top">
              <span className="highlight-card__number">{item.number}</span>
              <span className="highlight-card__icon">
                <Icon name={item.icon} size={27} />
              </span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a
              href={makeWhatsappLink(item.whatsappMessage)}
              rel="noreferrer"
              target="_blank"
            >
              {item.linkLabel}
              <Icon name="arrowRight" size={18} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceHighlights;

