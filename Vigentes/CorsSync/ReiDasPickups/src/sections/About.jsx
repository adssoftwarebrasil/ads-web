import { BadgeCheck, Handshake, Timer, Wrench } from 'lucide-react'

const values = [
  { icon: Wrench, title: 'Mão de obra qualificada', text: 'Serviços executados com técnica e atenção aos detalhes.' },
  { icon: Timer, title: 'Agilidade no atendimento', text: 'Comunicação direta para encontrar a solução adequada.' },
  { icon: Handshake, title: 'Preço justo', text: 'Transparência e atendimento próximo em cada negociação.' },
]

function About() {
  return (
    <section className="section about" id="empresa">
      <div className="container about__grid">
        <div className="about__statement" data-reveal>
          <span className="section-kicker">Padrão Rei</span>
          <h2>Tecnologia, qualidade e confiança que <span>movem seu caminho.</span></h2>
          <div className="about__seal" aria-hidden="true">
            <BadgeCheck />
            <span>Atendimento<br />de Rei</span>
          </div>
        </div>

        <div className="about__content" data-reveal>
          <p className="about__lead">
            A Rei das Pickups Auto Peças oferece soluções completas para o setor automotivo, com motores, peças e serviços especializados em transmissões automáticas.
          </p>
          <p>
            O trabalho une tecnologia, atendimento personalizado e compromisso com a qualidade para entregar soluções confiáveis a cada cliente.
          </p>

          <div className="about__values">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="about__value" key={title}>
                <Icon aria-hidden="true" />
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
