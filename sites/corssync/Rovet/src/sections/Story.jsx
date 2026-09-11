import { Heart, PawPrint } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import felineCare from '../assets/atendimento-felino.jpg'
import inpatientCare from '../assets/cuidado-internacao.jpg'

const values = ['Integridade', 'Respeito', 'Inovação', 'Trabalho em equipe', 'Excelência', 'Responsabilidade social', 'Diversidade e inclusão']

function Story() {
  return (
    <section className="section story-section" id="historia">
      <div className="container story-grid">
        <div className="story-visual" data-reveal>
          <div className="story-image story-image--main">
            <img src={felineCare} alt="Profissional da Rovet cuidando de um gato" loading="lazy" />
          </div>
          <div className="story-image story-image--small">
            <img src={inpatientCare} alt="Paciente recebendo cuidado durante internação" loading="lazy" />
          </div>
          <div className="story-note">
            <PawPrint aria-hidden="true" />
            <span>
              <strong>Rodolfo vive no nome Rovet.</strong>
              Uma homenagem que transformou amor em propósito.
            </span>
          </div>
        </div>

        <div className="story-content">
          <SectionHeading eyebrow="Nossa história" title="Um hospital que nasceu do amor." />
          <div data-reveal>
            <p className="story-lead">
              A história da Rovet começou em novembro de 2022, ao final de uma residência em medicina e
              cirurgia de pequenos animais no Hospital Veterinário da ULBRA.
            </p>
            <p>
              Depois da perda de Rodolfo, um companheiro de quatro patas muito amado, nasceu o desejo
              de construir um lugar onde conhecimento, presença e acolhimento caminhassem juntos. As
              portas foram abertas em julho de 2023 e, desde então, esse propósito orienta cada
              atendimento.
            </p>
          </div>

          <blockquote data-reveal>
            <Heart aria-hidden="true" />
            <p>
              “Oferecer cuidado ético, clínico e cirúrgico, sempre prezando pelo bem-estar e pela
              qualidade de vida dos pacientes.”
            </p>
            <cite>Missão Rovet</cite>
          </blockquote>

          <div className="values" data-reveal aria-label="Valores da Rovet">
            {values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
