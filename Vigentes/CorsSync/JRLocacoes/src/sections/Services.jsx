import { ArrowUpRight, Check, Truck, Warehouse } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import containerImage from '../assets/container-almoxarifado.jpeg'
import munckImage from '../assets/icamento-laje-horizontal.jpeg'

const services = [
  {
    number: '01',
    icon: Truck,
    title: 'Caminhão munck',
    text: 'Solução para içamento, movimentação, posicionamento e transporte de cargas em obras, indústrias e diferentes frentes de serviço.',
    image: munckImage,
    alt: 'Caminhão munck da JR Locações posicionando uma laje em uma obra',
    items: ['Içamento de cargas', 'Transporte com apoio do munck', 'Movimentação no local'],
  },
  {
    number: '02',
    icon: Warehouse,
    title: 'Contêineres',
    text: 'Locação de contêineres para apoio operacional, canteiros, armazenamento e organização do espaço conforme a necessidade do serviço.',
    image: containerImage,
    alt: 'Contêiner de almoxarifado disponibilizado pela JR Locações',
    items: ['Apoio a obras e operações', 'Opção para almoxarifado', 'Entrega e posicionamento'],
  },
]

function Services() {
  return (
    <section className="services section" id="solucoes">
      <div className="container">
        <SectionTitle
          eyebrow="Soluções em campo"
          title="Equipamento certo para o desafio do seu dia"
          text="Atendimento direto para entender a demanda e orientar a solução adequada para cada operação."
        />

        <div className="services-grid">
          {services.map(({ number, icon: Icon, title, text, image, alt, items }) => (
            <article className="service-card reveal" key={title}>
              <div className="service-card-media">
                <img src={image} alt={alt} loading="lazy" />
                <span className="service-number">{number}</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="service-link">
                  Consultar disponibilidade
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
