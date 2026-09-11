import { ArrowRight, BadgeCheck, CarFront, Cpu, TimerReset } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import oficinaVideo from '../assets/oficina-rotina.mp4'
import videoPoster from '../assets/oficina-geral.jpeg'
import { contact } from '../data/siteData'

const strengths = [
  { icon: Cpu, title: 'Equipamentos modernos', copy: 'Leitura eletrônica e diagnóstico preciso para agir no ponto certo.' },
  { icon: CarFront, title: 'Atendimento multimarcas', copy: 'Estrutura preparada para diferentes modelos, portes e necessidades.' },
  { icon: BadgeCheck, title: 'Procedência garantida', copy: 'Peças selecionadas com qualidade e segurança para o seu veículo.' },
  { icon: TimerReset, title: 'Agilidade responsável', copy: 'Organização para reduzir o tempo parado sem abrir mão do cuidado.' },
]

function Capabilities() {
  return (
    <section className="capabilities section section--dark" id="sobre">
      <div className="container capabilities__grid">
        <Reveal className="capabilities__media">
          <video muted autoPlay loop playsInline preload="metadata" poster={videoPoster} aria-label="Rotina de serviços na Mecânica 277">
            <source src={oficinaVideo} type="video/mp4" />
          </video>
          <span className="capabilities__video-label"><i /> Por dentro da 277</span>
          <div className="capabilities__years"><strong>8</strong><span>anos em<br />atividade</span></div>
        </Reveal>

        <div className="capabilities__content">
          <Reveal>
            <SectionHeading
              eyebrow="Experiência que resolve"
              title={<>Uma oficina completa. <em>Um atendimento próximo.</em></>}
              description="A Mecânica 277 nasceu da experiência e do desejo de oferecer serviços de qualidade, sempre com prioridade para a satisfação de cada cliente."
              light
            />
          </Reveal>
          <div className="strength-list">
            {strengths.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal className="strength-item" delay={index * 55} key={item.title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                </Reveal>
              )
            })}
          </div>
          <Reveal>
            <a className="button button--outline-light" href={contact.whatsapp} target="_blank" rel="noreferrer">
              Falar com a equipe <ArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
