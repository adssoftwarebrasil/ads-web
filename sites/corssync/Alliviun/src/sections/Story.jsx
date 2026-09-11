import { ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo-alliviun-cropped.png'

function Story() {
  return (
    <section className="section story" id="historia" aria-labelledby="story-title">
      <div className="container story-grid">
        <div className="story-visual" data-reveal>
          <div className="story-logo-card">
            <img src={logo} alt="Logo da Alliviun Massoterapia" />
            <div className="story-orbit story-orbit--one" aria-hidden="true" />
            <div className="story-orbit story-orbit--two" aria-hidden="true" />
          </div>
          <div className="story-caption">
            <span>Uma experiência pessoal</span>
            <strong>que virou propósito.</strong>
          </div>
        </div>

        <div className="story-copy" data-reveal>
          <span className="eyebrow">Nossa história</span>
          <h2 id="story-title">Márcio conheceu a dor de perto. E decidiu ajudar quem passa por ela.</h2>
          <p>
            Antes de ser massoterapeuta e proprietário da Alliviun, Márcio Gabriel conviveu com dores causadas por
            desajustes na coluna e inflamações musculares.
          </p>
          <p>
            Foi ao encontrar alívio em técnicas de massoterapia e quiropraxia que nasceu uma nova direção: aprender,
            aperfeiçoar e colocar esse conhecimento a serviço de outras pessoas.
          </p>
          <p>
            Há cerca de oito anos, essa vivência inspira um atendimento humano, atento e focado no que cada cliente
            realmente precisa.
          </p>
          <a className="text-link text-link--dark" href="#contato">
            Fale com a Alliviun
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Story

