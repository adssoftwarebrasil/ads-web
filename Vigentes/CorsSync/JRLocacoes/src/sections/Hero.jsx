import { ArrowDownRight, ArrowRight, Clock3, MapPin, MoveUpRight, Truck, Warehouse } from 'lucide-react'
import heroImage from '../assets/transporte-tanque-horizontal.jpeg'

const primaryWhatsApp =
  'https://wa.me/5562981648938?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20JR%20Loca%C3%A7%C3%B5es.'

const quickFacts = [
  { icon: Truck, title: 'Caminhão munck', text: 'Içamento e transporte' },
  { icon: Warehouse, title: 'Contêineres', text: 'Apoio e armazenamento' },
  { icon: MapPin, title: 'Atendimento', text: 'Trindade e região' },
  { icon: Clock3, title: 'Horário', text: '08h às 18h' },
]

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-background"
        src={heroImage}
        alt="Caminhão munck da JR Locações içando uma estrutura industrial"
        fetchpriority="high"
      />
      <div className="hero-overlay" />
      <div className="hero-road-lines" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Locação especializada</span>
            <MoveUpRight size={18} aria-hidden="true" />
          </div>
          <h1 id="hero-title">
            Força para mover.
            <span> Precisão para entregar.</span>
          </h1>
          <p>
            Caminhão munck, içamento, transporte e contêineres com atendimento responsável,
            pontual e próximo.
          </p>
          <div className="hero-actions">
            <a className="button button--red" href={primaryWhatsApp} target="_blank" rel="noreferrer">
              Solicitar orçamento
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a className="text-link text-link--light" href="#solucoes">
              Conheça as soluções
              <ArrowDownRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-location">
          <span>Base operacional</span>
          <strong>Trindade • GO</strong>
        </div>
      </div>

      <div className="hero-facts">
        <div className="container hero-facts-grid">
          {quickFacts.map(({ icon: Icon, title, text }) => (
            <div className="hero-fact" key={title}>
              <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              <span>
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
