import { ArrowUpRight, Check, Gauge, ShieldCheck, Wrench } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import repairImage from '../assets/images/manutencao-suspensao.jpg'
import valveImage from '../assets/images/bancada-valvulas.jpg'
import { whatsappUrl } from '../constants.js'

function Expertise() {
  return (
    <section className="expertise section" id="estrutura">
      <div className="container expertise-grid">
        <Reveal className="expertise-media">
          <img src={repairImage} alt="Profissionais executando manutenção na suspensão de um veículo pesado" />
          <span className="photo-label">Trabalho técnico · Linha pesada</span>
        </Reveal>

        <Reveal className="expertise-copy" delay={90}>
          <p className="eyebrow"><span /> Trabalho de verdade</p>
          <h2>Experiência para encarar serviço pesado.</h2>
          <p>
            Há 4 anos, o Posto de Molas 3 Bandeiras atende quem depende do veículo para trabalhar.
            Nossa equipe atua com agilidade e precisão em manutenção, reparos e diagnóstico.
          </p>
          <div className="expertise-points">
            <div><Wrench aria-hidden="true" /><span><strong>Serviço completo</strong>Manutenção e reparos em um só lugar.</span></div>
            <div><ShieldCheck aria-hidden="true" /><span><strong>Compromisso</strong>Foco em segurança e confiança.</span></div>
            <div><Gauge aria-hidden="true" /><span><strong>Precisão</strong>Equipamentos para apoiar o diagnóstico.</span></div>
          </div>
        </Reveal>
      </div>

      <div className="valve-feature container">
        <Reveal className="valve-copy">
          <p className="eyebrow eyebrow-dark"><span /> Sistema pneumático</p>
          <h2>Reparo de válvulas com avaliação cuidadosa.</h2>
          <ul>
            <li><Check aria-hidden="true" /> Bancada dedicada ao serviço</li>
            <li><Check aria-hidden="true" /> Atendimento para veículos de trabalho</li>
            <li><Check aria-hidden="true" /> Diagnóstico com equipamentos adequados</li>
          </ul>
          <a className="text-link text-link-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar atendimento <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="valve-media" delay={100}>
          <img src={valveImage} alt="Bancada com equipamento para diagnóstico e reparo de válvulas pneumáticas" />
        </Reveal>
      </div>
    </section>
  )
}

export default Expertise
