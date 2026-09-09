import { BadgeCheck, Heart, MapPin } from 'lucide-react'
import brandLogo from '../assets/brand/criatividade-e-cia.webp'
import storeImage from '../assets/products/presentes-copos-termicos.webp'
import Reveal from '../components/Reveal.jsx'

function About() {
  return (
    <section className="section about" id="historia">
      <div className="container about__grid">
        <Reveal className="about-visual">
          <div className="about-visual__image">
            <img
              src={storeImage}
              alt="Produtos em destaque com o interior da Criatividade & Cia ao fundo"
              loading="lazy"
            />
          </div>
          <div className="about-visual__since">
            <span>desde</span>
            <strong>2004</strong>
          </div>
          <div className="about-visual__brand">
            <img src={brandLogo} alt="Marca Criatividade & Cia" loading="lazy" />
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <span className="eyebrow">Nossa história mora aqui</span>
            <h2>Conhecida pela variedade. Lembrada pelo atendimento.</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="about__lead">
              A Criatividade & Cia faz parte de Anicuns desde 2004. Ao longo dos anos,
              tornou-se uma loja conhecida na cidade por reunir papelaria, presentes,
              informática, brinquedos e utilidades em um só endereço.
            </p>
            <p>
              É o tipo de lugar onde você entra procurando um item e descobre várias boas
              ideias pelo caminho — sempre com preços honestos e uma equipe pronta para ajudar.
            </p>
          </Reveal>

          <Reveal className="about-points" delay={140}>
            <div>
              <BadgeCheck aria-hidden="true" />
              <span>
                <strong>Experiência local</strong>
                Mais de duas décadas atendendo a cidade.
              </span>
            </div>
            <div>
              <Heart aria-hidden="true" />
              <span>
                <strong>Atendimento que aproxima</strong>
                Cuidado e atenção em cada visita.
              </span>
            </div>
            <div>
              <MapPin aria-hidden="true" />
              <span>
                <strong>Presença regional</strong>
                Anicuns e cidades vizinhas.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
