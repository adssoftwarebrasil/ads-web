import { BadgeCheck, Handshake, Layers3 } from 'lucide-react'
import { photo } from '../data/storeData.js'

const values = [
  {
    Icon: Layers3,
    title: 'Variedade de verdade',
    text: 'De tudo um pouco para a casa, o trabalho e as necessidades do dia a dia.',
  },
  {
    Icon: Handshake,
    title: 'Atendimento próximo',
    text: 'Dedicação e vontade de ajudar cada cliente a encontrar o que procura.',
  },
  {
    Icon: BadgeCheck,
    title: 'Praticidade e confiança',
    text: 'Comodidade, compromisso e preços justos reunidos em um só lugar.',
  },
]

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__layout">
        <div className="about__visual reveal">
          <div className="about__image-wrap">
            <img src={photo('interior-loja-01.jpeg')} alt="Interior da Fera em Tudo com corredores de produtos" />
          </div>
          <div className="about__label">
            <strong>Um pouco</strong>
            <span>de tudo</span>
          </div>
        </div>

        <div className="about__copy reveal">
          <span className="eyebrow">Nossa história</span>
          <h2>Nascemos para facilitar a vida da nossa comunidade.</h2>
          <p>
            A Ferragista Fera em Tudo nasceu com um propósito simples e grandioso: reunir em um só
            lugar tudo o que nossos clientes precisam.
          </p>
          <p>
            Buscamos oferecer praticidade, variedade e atendimento de qualidade para que você
            encontre o item certo para a casa, o trabalho, a construção, a manutenção e a rotina.
          </p>
          <blockquote>“Tudo o que você precisa, em um só lugar.”</blockquote>
        </div>
      </div>

      <div className="container value-grid reveal">
        {values.map(({ Icon, title, text }, index) => (
          <article key={title}>
            <span className="value-grid__index">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
