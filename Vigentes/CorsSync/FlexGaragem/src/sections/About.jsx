import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import facadeImage from '../assets/media/fachada-flex-garagem.webp'

function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__layout">
        <Reveal className="about__visual">
          <div className="about__image-wrap">
            <img src={facadeImage} alt="Fachada da unidade Flex Garagem na Barra Funda" loading="lazy" />
            <span className="about__since">Desde <strong>2020</strong></span>
          </div>
          <p>Uma garagem criada para quem não abre mão de ver o carro bem cuidado.</p>
        </Reveal>

        <Reveal className="about__content" delay={100}>
          <p className="eyebrow"><span /> A Flex Garagem</p>
          <h2>Experiência, técnica e uma relação direta com quem confia o carro à gente.</h2>
          <div className="about__copy">
            <p>
              A Flex Garagem nasceu em 2020 para transformar a estética automotiva em São Paulo, oferecendo soluções de limpeza, renovação e proteção com padrão de acabamento premium.
            </p>
            <p>
              Mais do que entregar um carro limpo, buscamos conservar materiais, valorizar o veículo e garantir uma experiência de atendimento à altura do resultado.
            </p>
          </div>
          <div className="about__facts">
            <div><strong>5+</strong><span>anos de experiência</span></div>
            <div><strong>SP</strong><span>Barra Funda</span></div>
            <div><strong>3M</strong><span>representante autorizado</span></div>
          </div>
          <a
            className="button button--dark"
            href="https://www.instagram.com/flexgaragem/"
            target="_blank"
            rel="noreferrer"
          >
            Acompanhar no Instagram <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default About
