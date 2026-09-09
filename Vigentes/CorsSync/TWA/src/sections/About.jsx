import { ArrowUpRight, Check, RadioTower, Route, Waypoints } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import aboutImage from '../assets/images/nossa-historia-twa.jpg'
import { createWhatsAppUrl } from '../data/siteData'

const timeline = [
  {
    year: '2009',
    title: 'A origem wireless',
    text: 'A TWA nasce em Balneário Camboriú para atender à crescente demanda por conectividade e redes Wi-Fi.',
    icon: RadioTower,
  },
  {
    year: 'Evolução',
    title: 'Sistemas integrados',
    text: 'A atuação se amplia para segurança, automação, telecom e soluções eletrônicas para condomínios.',
    icon: Waypoints,
  },
  {
    year: 'Hoje',
    title: 'Da obra ao pós-entrega',
    text: 'A experiência passa a acompanhar toda a jornada da construção civil, com suporte contínuo após a instalação.',
    icon: Route,
  },
]

const strengths = [
  'Atendimento especializado para construtoras e condomínios',
  'Projetos técnicos e consultoria dedicada',
  'Execução conforme normas de segurança',
  'Revenda Ouro Intelbras',
]

function About() {
  return (
    <section className="section about-section" id="quem-somos">
      <div className="about-grid-pattern" aria-hidden="true" />
      <div className="container about-layout">
        <div className="about-visual" data-reveal>
          <img
            src={aboutImage}
            alt="Profissional da TWA configurando um sistema de automação predial"
            loading="lazy"
          />
          <div className="about-image-caption">
            <strong>80+</strong>
            <span>obras entregues na região</span>
          </div>
        </div>

        <div className="about-content" data-reveal>
          <SectionHeading
            eyebrow="Nossa história"
            title="Evolução constante. Responsabilidade em cada entrega."
            text="A TWA — Tecnologia Wireless Avançada — nasceu com um DNA pioneiro e cresceu acompanhando a transformação dos sistemas eletrônicos."
            light
          />

          <div className="timeline">
            {timeline.map(({ year, title, text, icon: Icon }) => (
              <article className="timeline-item" key={year}>
                <div className="timeline-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <span>{year}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-strengths">
            {strengths.map((strength) => (
              <div key={strength}>
                <Check size={18} aria-hidden="true" />
                <span>{strength}</span>
              </div>
            ))}
          </div>

          <a
            className="button button--accent"
            href={createWhatsAppUrl('Olá! Gostaria de conhecer melhor a equipe e as soluções da TWA.')}
            target="_blank"
            rel="noreferrer"
          >
            Conheça nossa equipe
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
