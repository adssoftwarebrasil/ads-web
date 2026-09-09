import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import solarGreenFront from '../assets/products/solar-green-front.jpg'
import solarGoldSide from '../assets/products/solar-gold-side.jpg'
import solarGoldFront from '../assets/products/solar-gold-front.jpg'
import solarGreenAngle from '../assets/products/solar-green-angle.jpg'
import solarBlackAngle from '../assets/products/solar-black-angle.jpg'
import solarBlackFront from '../assets/products/solar-black-front.jpg'
import solarBlueFront from '../assets/products/solar-blue-front.jpg'
import { contact } from '../data/siteData.js'

const looks = [
  { image: solarGreenFront, label: 'Solar · Verde clássico', alt: 'Óculos de sol aviador dourado com lentes verdes em vista frontal' },
  { image: solarGoldSide, label: 'Solar · Acabamento dourado', alt: 'Detalhe lateral de óculos de sol dourado' },
  { image: solarGoldFront, label: 'Solar · Degradê âmbar', alt: 'Óculos de sol aviador dourado com lentes âmbar em vista frontal' },
  { image: solarGreenAngle, label: 'Solar · Atemporal', alt: 'Óculos de sol aviador dourado com lentes verdes em perspectiva' },
  { image: solarBlackAngle, label: 'Solar · Grafite', alt: 'Óculos de sol aviador grafite em perspectiva' },
  { image: solarBlackFront, label: 'Solar · Essencial', alt: 'Óculos de sol aviador grafite em vista frontal' },
  { image: solarBlueFront, label: 'Solar · Azul degradê', alt: 'Óculos de sol aviador dourado com lentes azuis em vista frontal' },
]

function Lookbook() {
  return (
    <section className="lookbook section" aria-labelledby="lookbook-title">
      <div className="container lookbook__head" data-reveal>
        <SectionHeading
          eyebrow="Renascer lookbook"
          title={<span id="lookbook-title">Seu próximo favorito pode estar aqui.</span>}
          text="Inspire-se em diferentes formas, cores e proporções — depois venha experimentar na loja."
        />
        <a className="text-link" href={contact.instagram} target="_blank" rel="noreferrer">
          Ver novidades no Instagram
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="lookbook__rail" aria-label="Galeria de modelos de óculos">
        {looks.map((look, index) => (
          <figure className={'lookbook__item lookbook__item--' + ((index % 3) + 1)} key={look.image} data-reveal>
            <div className="lookbook__photo">
              <img src={look.image} alt={look.alt} loading="lazy" />
            </div>
            <figcaption>{look.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Lookbook
