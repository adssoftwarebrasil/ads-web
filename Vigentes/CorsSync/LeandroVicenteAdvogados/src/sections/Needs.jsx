import { ArrowUpRight } from 'lucide-react'
import { createWhatsAppLink, needPaths } from '../data/siteData'

export default function Needs() {
  return (
    <section className="needs section" aria-labelledby="needs-title">
      <div className="container needs__grid">
        <div className="needs__intro" data-reveal>
          <span className="eyebrow">Por onde começar</span>
          <h2 id="needs-title">Encontre o caminho para a sua necessidade jurídica.</h2>
          <p>
            Selecione o tema mais próximo da sua situação para iniciar uma conversa direta com o escritório.
          </p>
        </div>

        <div className="needs__list">
          {needPaths.map((item, index) => (
            <a
              className="need-card"
              href={createWhatsAppLink(item.message)}
              target="_blank"
              rel="noreferrer"
              key={item.eyebrow}
              data-reveal
              style={{ '--delay': `${index * 80}ms` }}
            >
              <span className="need-card__number">0{index + 1}</span>
              <div>
                <small>{item.eyebrow}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="need-card__arrow" aria-hidden="true">
                <ArrowUpRight size={21} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
