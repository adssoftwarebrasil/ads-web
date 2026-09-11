import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import stockImage from '../assets/estoque-pecas-01.jpg'
import warehouseImage from '../assets/deposito-autopecas.jpg'
import { serviceTags, whatsappUrl } from '../data/siteData'

export default function Inventory() {
  return (
    <section className="inventory section" id="pecas-servicos">
      <div className="container inventory__grid">
        <Reveal className="inventory__visual">
          <div className="inventory__photo inventory__photo--main">
            <img src={stockImage} alt="Prateleiras de autopeças da Casa das Oficinas" loading="lazy" />
          </div>
          <div className="inventory__photo inventory__photo--secondary">
            <img src={warehouseImage} alt="Estoque de componentes automotivos" loading="lazy" />
          </div>
          <div className="inventory__stamp">
            <BadgeCheck aria-hidden="true" />
            <span>Variedade<br />de verdade</span>
          </div>
        </Reveal>

        <Reveal className="inventory__content" delay={100}>
          <p className="eyebrow"><span /> Peças & serviços</p>
          <h2>Do item no estoque ao carro pronto para rodar.</h2>
          <p>
            Uma estrutura feita para atender quem conhece de carro e quem só quer
            resolver tudo com clareza. Nossa equipe ajuda você a encontrar peças e
            acessórios e também cuida da manutenção do seu veículo.
          </p>

          <div className="service-tag-list" aria-label="Serviços automotivos">
            {serviceTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          <a className="inline-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar disponibilidade <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
