import { Quote, Star } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

const testimonials = [
  'Tem de tudo, ótimo atendimento.',
  'Loja completa e com muita variedade.',
  'Preços honestos e atendimento nota 10.',
]

function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="depoimentos-titulo">
      <span className="testimonials__pattern" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div id="depoimentos-titulo">
            <SectionIntro
              eyebrow="Quem conhece, recomenda"
              title="O melhor elogio é virar referência na cidade."
              text="Comentários que resumem o jeito Criatividade & Cia de receber."
              light
            />
          </div>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial} delay={index * 90}>
              <blockquote className="testimonial-card">
                <Quote aria-hidden="true" />
                <p>“{testimonial}”</p>
                <footer>
                  <span className="stars" aria-label="Avaliação positiva">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} aria-hidden="true" fill="currentColor" />
                    ))}
                  </span>
                  <span>Opinião de cliente</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
