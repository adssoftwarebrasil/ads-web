import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import storefrontImage from '../assets/fachada-frontal.jpg'

export default function Story() {
  return (
    <section className="story" id="historia">
      <div className="container story__grid">
        <Reveal className="story__content">
          <p className="eyebrow eyebrow--yellow"><span /> Casa das Oficinas</p>
          <h2>Uma história construída no balcão, na oficina e na confiança.</h2>
          <p>
            Desde 1999, a Casa das Oficinas atende Feira de Santana com soluções
            automotivas para diferentes rotinas: o mecânico que precisa manter o serviço
            andando, o motorista que procura a peça certa e o cliente que quer cuidar do carro.
          </p>
          <a className="inline-link inline-link--light" href="#contato">
            Conheça nosso atendimento <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="story__photo" delay={100}>
          <img src={storefrontImage} alt="Entrada e fachada da Casa das Oficinas" loading="lazy" />
          <div className="story__year" aria-label="Desde 1999">
            <span>Desde</span>
            <strong>1999</strong>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
