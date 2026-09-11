import { ArrowUpRight, CookingPot, Gift, Monitor, PencilLine } from 'lucide-react'
import stationeryImage from '../assets/products/papelaria-caderno-disney-classicos.webp'
import techImage from '../assets/products/informatica-headset-gamer-preto.webp'
import giftsImage from '../assets/products/presentes-canecas-de-vidro.webp'
import utilitiesImage from '../assets/products/utilidades-liquidificador-oster-vermelho.webp'
import Reveal from '../components/Reveal.jsx'
import SectionIntro from '../components/SectionIntro.jsx'

const categories = [
  {
    number: '01',
    title: 'Papelaria',
    text: 'Materiais para escola, trabalho e projetos criativos.',
    image: stationeryImage,
    alt: 'Caderno Disney Clássicos disponível na loja',
    icon: PencilLine,
    color: 'yellow',
  },
  {
    number: '02',
    title: 'Informática',
    text: 'Acessórios para conectar, ouvir, trabalhar e jogar.',
    image: techImage,
    alt: 'Headset gamer disponível na loja',
    icon: Monitor,
    color: 'green',
  },
  {
    number: '03',
    title: 'Presentes',
    text: 'Escolhas bonitas para surpreender em qualquer ocasião.',
    image: giftsImage,
    alt: 'Canecas e potes de vidro para presentear',
    icon: Gift,
    color: 'blue',
  },
  {
    number: '04',
    title: 'Utilidades',
    text: 'Praticidade e bons achados para a casa e a rotina.',
    image: utilitiesImage,
    alt: 'Liquidificador vermelho na seção de utilidades',
    icon: CookingPot,
    color: 'red',
  },
]

function Categories() {
  return (
    <section className="section categories" id="departamentos">
      <div className="container">
        <Reveal>
          <SectionIntro
            eyebrow="Uma loja, muitos achados"
            title="Passe por quatro mundos sem sair do mesmo endereço."
            text="Do item que faltou na mochila ao presente de última hora, a variedade da Criatividade & Cia acompanha a vida como ela acontece."
          />
        </Reveal>

        <div className="category-grid">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Reveal key={category.title} delay={index * 75}>
                <article className={`category-card category-card--${category.color}`}>
                  <div className="category-card__top">
                    <span className="category-card__number">{category.number}</span>
                    <span className="category-card__icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <div className="category-card__image">
                    <img src={category.image} alt={category.alt} loading="lazy" />
                  </div>
                  <div className="category-card__body">
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                    <a href="#vitrine" aria-label={`Ver produtos de ${category.title} na vitrine`}>
                      Ver na vitrine <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
