import { ArrowDownRight, CheckCircle2, MessageCircle } from 'lucide-react'
import truckImage from '../assets/images/caminhao-marca.jpg'
import { whatsappUrl } from '../constants.js'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-lines" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Especialistas em linha média e pesada</p>
          <h1>
            Seu bruto pronto para <em>voltar à estrada.</em>
          </h1>
          <p className="hero-description">
            Manutenção, reparos e autopeças para caminhões, carretas, ônibus e veículos médios,
            com atendimento especializado em Nova Olímpia e região.
          </p>
          <div className="hero-actions">
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Solicitar orçamento
            </a>
            <a className="text-link" href="#servicos">
              Ver serviços <ArrowDownRight size={20} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero-proof" aria-label="Diferenciais">
            <li><strong>4 anos</strong><span>de experiência</span></li>
            <li><strong>Peças + serviço</strong><span>em um só lugar</span></li>
            <li><strong>Diagnóstico</strong><span>computadorizado</span></li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={truckImage}
              alt="Caminhão identificado com a marca Posto de Molas 3 Bandeiras"
              fetchPriority="high"
            />
          </div>
          <div className="hero-location">
            <CheckCircle2 size={21} aria-hidden="true" />
            <span><strong>Nova Olímpia</strong> Mato Grosso</span>
          </div>
          <span className="hero-index" aria-hidden="true">03B</span>
        </div>
      </div>

      <div className="vehicle-strip">
        <div className="container vehicle-strip-inner">
          <span>Atendimento especializado</span>
          <ul>
            <li>Caminhões</li>
            <li>Carretas</li>
            <li>Ônibus</li>
            <li>Veículos médios</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
