import { ArrowRight, CarFront, ShieldCheck, Wrench } from 'lucide-react'
import Reveal from '../components/Reveal'
import { contact } from '../data/siteData'
import fleetCard from '../assets/frotas/atendimento-frotas.jpeg'

const fleetBenefits = [
  {
    icon: CarFront,
    title: 'Diferentes portes',
    copy: 'Atendimento para veículos leves, SUVs, pick-ups, vans e linha pesada.',
  },
  {
    icon: Wrench,
    title: 'Serviços completos',
    copy: 'Manutenção mecânica, elétrica e eletrônica reunida em uma única oficina.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade e garantia',
    copy: 'Peças de procedência e garantia de 90 dias nas peças e nos serviços.',
  },
]

function Fleets() {
  return (
    <section className="fleets section" id="frotas">
      <span className="fleets__word" aria-hidden="true">FROTAS</span>
      <div className="container fleets__grid">
        <div className="fleets__content">
          <Reveal>
            <p className="eyebrow fleets__eyebrow"><span />Atendimento para empresas</p>
            <h2>Sua frota em movimento. Atendimento para quem <em>não pode parar.</em></h2>
            <p className="fleets__copy">
              A Mecânica 277 recebe veículos de diferentes portes e reúne serviços de manutenção, diagnóstico e reparação para apoiar a rotina da sua frota.
            </p>
          </Reveal>

          <div className="fleets__benefits">
            {fleetBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Reveal className="fleets__benefit" delay={index * 60} key={benefit.title}>
                  <span className="fleets__benefit-icon"><Icon aria-hidden="true" /></span>
                  <div><h3>{benefit.title}</h3><p>{benefit.copy}</p></div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="fleets__action" delay={100}>
            <a className="button button--dark" href={contact.fleetWhatsapp} target="_blank" rel="noreferrer">
              Consultar atendimento para frotas <ArrowRight aria-hidden="true" />
            </a>
            <span>Consulte com a equipe as modalidades, cartões e soluções atendidas.</span>
          </Reveal>
        </div>

        <Reveal className="fleets__visual" delay={120}>
          <div className="fleets__visual-frame">
            <img
              src={fleetCard}
              alt="Material da Mecânica 277 sobre atendimento para frotas e cartões de gestão atendidos"
              loading="lazy"
            />
          </div>
          <div className="fleets__visual-caption">
            <span>Atendimento corporativo</span>
            <strong>Fale com a equipe para consultar sua solução de gestão.</strong>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Fleets
