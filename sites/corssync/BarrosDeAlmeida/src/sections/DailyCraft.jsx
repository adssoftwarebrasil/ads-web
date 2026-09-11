import { Play } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { assets } from '../data/siteData.js'

const craftPoints = [
  {
    number: '01',
    title: 'Receitas próprias',
    text: 'Sabores construídos e preservados pela família ao longo de décadas.',
  },
  {
    number: '02',
    title: 'Sem pré-misturas',
    text: 'Cada preparo começa do jeito artesanal, com ingredientes selecionados.',
  },
  {
    number: '03',
    title: 'Feito diariamente',
    text: 'Produção fresquinha para acompanhar o ritmo e a rotina dos clientes.',
  },
]

function DailyCraft() {
  return (
    <section className="craft section" id="feito-aqui">
      <div className="craft__sun" aria-hidden="true" />
      <div className="container craft__grid">
        <Reveal className="craft__content">
          <SectionHeading
            eyebrow="Feito aqui"
            title="A diferença mora no preparo."
            description="Tempo, técnica e carinho não vêm prontos em pacote. É por isso que fazemos do nosso jeito."
            light
          />
          <div className="craft__points">
            {craftPoints.map((point) => (
              <article key={point.number} className="craft-point">
                <span>{point.number}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="craft__video-wrap" delay={120}>
          <div className="craft__video-label">
            <Play size={16} fill="currentColor" aria-hidden="true" />
            Um pouco da nossa rotina
          </div>
          <video
            className="craft__video"
            autoPlay
            controls
            loop
            muted
            playsInline
            poster={assets.rotinaPadariaPoster}
            preload="auto"
            aria-label="Vídeo da rotina da Padaria A Moderna"
          >
            <source src={assets.rotinaPadaria} type="video/mp4" />
            Seu navegador não oferece suporte à reprodução de vídeo.
          </video>
          <span className="craft__video-note">Da produção para a vitrine</span>
        </Reveal>
      </div>
    </section>
  )
}

export default DailyCraft
