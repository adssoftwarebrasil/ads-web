import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import operationImage from '../assets/icamento-silo.jpeg'

const operations = [
  'Içamento de estruturas e equipamentos',
  'Transporte e posicionamento de cargas',
  'Movimentação de contêineres',
  'Atuação em obras e ambientes industriais',
]

const primaryWhatsApp =
  'https://wa.me/5562981648938?text=Ol%C3%A1%2C%20preciso%20avaliar%20uma%20opera%C3%A7%C3%A3o%20com%20caminh%C3%A3o%20munck.'

function Operations() {
  return (
    <section className="operations section section--dark" id="operacoes">
      <div className="operations-pattern" aria-hidden="true" />
      <div className="container operations-grid">
        <div className="operations-copy reveal">
          <SectionTitle
            eyebrow="Capacidade em ação"
            title="Da carga pesada ao apoio da obra"
            text="O portfólio da JR mostra operações reais de içamento, transporte e posicionamento em diferentes cenários."
            light
          />
          <ul className="operations-list">
            {operations.map((operation) => (
              <li key={operation}>
                <CheckCircle2 aria-hidden="true" />
                {operation}
              </li>
            ))}
          </ul>
          <a className="button button--outline-light" href={primaryWhatsApp} target="_blank" rel="noreferrer">
            Avaliar minha operação
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="operations-media reveal">
          <img
            src={operationImage}
            alt="Caminhão munck da JR Locações içando um silo vertical"
            loading="lazy"
          />
          <div className="operations-stamp">
            <span>Serviço real</span>
            <strong>em campo</strong>
          </div>
          <div className="operations-caption">
            <span>Planejamento</span>
            <span>Responsabilidade</span>
            <span>Pontualidade</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Operations
