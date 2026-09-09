import { CheckCircle2, HeartHandshake, Sparkles, Zap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import profileImage from '../assets/images/apresentacao-wanessa.jpg'

const highlights = [
  {
    icon: HeartHandshake,
    title: 'Acolhimento de verdade',
    text: 'Escuta cuidadosa para a pessoa e para a família durante todo o processo.',
  },
  {
    icon: Sparkles,
    title: 'Seriedade com leveza',
    text: 'Objetivos terapêuticos trabalhados de maneira divertida e significativa.',
  },
  {
    icon: Zap,
    title: 'Recursos complementares',
    text: 'Laser de baixa intensidade pode integrar a sessão quando houver indicação clínica.',
  },
]

function Approach() {
  return (
    <section className="approach section" id="wanessa" aria-labelledby="approach-title">
      <div className="container approach-grid">
        <div className="approach-photo">
          <div className="profile-frame">
            <img
              src={profileImage}
              alt="Fonoaudióloga Wanessa Ferreira, especialista em fala e linguagem"
              loading="lazy"
            />
          </div>
          <div className="qualification-card">
            <CheckCircle2 aria-hidden="true" />
            <div>
              <strong>Fala, linguagem e aprendizagem</strong>
              <span>Atuação especializada</span>
            </div>
          </div>
        </div>

        <div className="approach-content">
          <SectionHeading
            eyebrow="Conheça a Wanessa"
            title="Ciência e afeto podem caminhar juntos"
          />
          <p className="approach-lead">
            Sou Wanessa Ferreira, fonoaudióloga especialista em fala, linguagem e transtornos
            de aprendizagem. Meu objetivo é favorecer a qualidade de vida por meio de uma
            comunicação mais funcional e confiante.
          </p>
          <p>
            Em cada sessão, o cuidado é planejado de forma individual. A proposta é trabalhar
            coisas sérias de um jeito acolhedor e divertido, respeitando o ritmo e celebrando
            cada avanço do paciente.
          </p>

          <div className="highlight-list">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div className="highlight-item" key={title}>
                <span>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
