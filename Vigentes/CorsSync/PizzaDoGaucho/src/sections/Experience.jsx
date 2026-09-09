import { ArrowDownRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import pizzaMix from '../assets/pizza-mix.jpeg'
import pizzaClassic from '../assets/pizza-classica.jpeg'
import pizzaBasil from '../assets/pizza-manjericao.jpeg'
import pizzaBanana from '../assets/pizza-doce-banana.jpeg'
import pizzaChocolate from '../assets/pizza-doce-chocolate.jpeg'
import pizzaJuicy from '../assets/pizza-suculenta.jpeg'

const gallery = [
  {
    image: pizzaMix,
    alt: 'Duas pizzas salgadas servidas em formas',
    label: 'Para compartilhar',
    className: 'gallery-wide',
  },
  {
    image: pizzaClassic,
    alt: 'Pizza salgada com queijo e azeitonas',
    label: 'Muito recheio',
    className: 'gallery-tall',
  },
  {
    image: pizzaBasil,
    alt: 'Pizza com tomate e folhas de manjericão',
    label: 'Sabor em cada detalhe',
    className: '',
  },
  {
    image: pizzaJuicy,
    alt: 'Pizza dourada pronta para servir',
    label: 'De dar água na boca',
    className: '',
  },
  {
    image: pizzaBanana,
    alt: 'Pizza doce com banana e cobertura',
    label: 'Um final doce',
    className: '',
  },
  {
    image: pizzaChocolate,
    alt: 'Pizza doce com chocolate e confeitos coloridos',
    label: 'Para todos os gostos',
    className: 'gallery-wide gallery-sweet',
  },
]

function Experience() {
  return (
    <section className="experience section-pad" id="experiencia">
      <div className="container">
        <div className="experience-heading" data-reveal>
          <SectionTitle
            eyebrow="Uma mesa bem servida"
            title="Do salgado ao doce, tem pizza para prolongar a conversa."
            text="Escolha, compartilhe e aproveite a noite no seu ritmo." 
          />
          <ArrowDownRight size={42} strokeWidth={1.5} aria-hidden="true" />
        </div>

        <div className="pizza-gallery">
          {gallery.map((item) => (
            <figure className={`gallery-card ${item.className}`} key={item.label} data-reveal>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

