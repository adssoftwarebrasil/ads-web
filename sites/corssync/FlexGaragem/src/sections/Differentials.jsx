import { BadgeCheck, Crosshair, HeartPulse, Shield } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import undersideImage from '../assets/media/detalhamento-inferior.webp'

const differentials = [
  {
    icon: BadgeCheck,
    tag: 'Procedência',
    title: 'Representante autorizado 3M',
    text: 'Produtos originais de alta performance e processos validados por uma referência global.',
  },
  {
    icon: Crosshair,
    tag: 'Precisão',
    title: 'Especialização em detailing premium',
    text: 'Olhar minucioso para o acabamento, a renovação interna e a proteção de cada superfície.',
  },
  {
    icon: Shield,
    tag: 'Patrimônio',
    title: 'Proteção que preserva valor',
    text: 'Serviços voltados à conservação a longo prazo e à valorização do seu veículo.',
  },
  {
    icon: HeartPulse,
    tag: 'Bem-estar',
    title: 'Tecnologia a favor da saúde',
    text: 'Limpeza técnica e oxi-sanitização contra manchas, odores, fungos e bactérias.',
  },
]

function Differentials() {
  return (
    <section className="differentials section" id="diferenciais">
      <div className="differentials__backdrop" aria-hidden="true">FLEX</div>
      <div className="container">
        <div className="differentials__top">
          <Reveal className="differentials__heading">
            <p className="eyebrow eyebrow--lime"><span /> O padrão Flex</p>
            <h2>
              <span>Não é só</span>
              <span>limpeza.</span>
              <em>É conservação.</em>
            </h2>
            <p>
              Técnica, produtos profissionais e cuidado atento para entregar um resultado que permanece depois que o carro sai da garagem.
            </p>
          </Reveal>
          <Reveal className="differentials__image" delay={120}>
            <img src={undersideImage} alt="Detalhamento técnico na parte inferior de um veículo" />
            <span>Detalhe sem atalhos</span>
          </Reveal>
        </div>

        <div className="differentials__grid">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal as="article" className="differential-card" key={item.title} delay={index * 65}>
                <div className="differential-card__top">
                  <Icon aria-hidden="true" />
                  <span>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="differential-card__index">0{index + 1}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Differentials
