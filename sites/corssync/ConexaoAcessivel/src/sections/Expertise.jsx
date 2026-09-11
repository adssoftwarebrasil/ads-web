import { ArrowUpRight, Compass, Scale, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import inclusiveSpace from '../assets/espaco-acessivel-inclusivo.webp'
import projectDocs from '../assets/documentacao-projeto.jpeg'
import { whatsappUrl } from '../data/siteData'

const differentiators = [
  { icon: Compass, title: 'Expertise técnica', text: 'Condução por arquiteta e urbanista especializada em acessibilidade.' },
  { icon: Scale, title: 'Visão integrada', text: 'Norma, arquitetura e realidade da obra avaliadas em conjunto.' },
  { icon: Sparkles, title: 'Propósito genuíno', text: 'Mais autonomia, dignidade e segurança para todas as pessoas.' },
]

function Expertise() {
  return (
    <section className="section expertise" id="experiencia">
      <div className="container expertise-grid">
        <div className="expertise-visual" data-reveal>
          <img className="expertise-visual__main" src={inclusiveSpace} alt="Espaço de convivência com diferentes recursos de acessibilidade" />
          <div className="expertise-visual__detail">
            <img src={projectDocs} alt="Documentação e desenhos de projeto de acessibilidade" />
          </div>
          <div className="expertise-stamp"><strong>15+</strong><span>anos de experiência</span></div>
        </div>

        <div className="expertise-content" data-reveal>
          <SectionHeading
            eyebrow="Experiência que reposiciona espaços"
            title="Arquitetura, norma e vida real no mesmo projeto."
          />
          <p className="expertise-story">
            Fundada há 9 anos, a Conexão Acessível ganhou uma nova direção há 5 anos, quando foi adquirida pela arquiteta e urbanista Eliana Trevisan. Com mais de 15 anos de experiência em acessibilidade, Eliana ampliou o olhar da empresa: de uma atuação focada em produtos e instalações para uma consultoria especializada em soluções arquitetônicas.
          </p>

          <div className="differentiators">
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <div className="differentiator" key={item.title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </div>
              )
            })}
          </div>

          <a className="text-link text-link--blue" href={whatsappUrl} target="_blank" rel="noreferrer">
            Conversar com a especialista <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Expertise
