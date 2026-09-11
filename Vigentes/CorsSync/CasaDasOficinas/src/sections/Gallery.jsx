import Reveal from '../components/Reveal'
import storeImage from '../assets/atendimento-loja.jpg'
import counterImage from '../assets/balcao-atendimento.jpg'
import stockImage from '../assets/estoque-pecas-02.jpg'
import entranceImage from '../assets/entrada-loja.jpg'

const galleryItems = [
  {
    image: storeImage,
    alt: 'Movimento e atendimento dentro da loja Casa das Oficinas',
    label: 'Atendimento presencial',
    className: 'gallery-card--wide',
  },
  {
    image: counterImage,
    alt: 'Balcão de atendimento da Casa das Oficinas',
    label: 'Equipe no balcão',
    className: 'gallery-card--tall',
  },
  {
    image: stockImage,
    alt: 'Corredor de estoque de peças automotivas',
    label: 'Estoque organizado',
    className: '',
  },
  {
    image: entranceImage,
    alt: 'Entrada da loja Casa das Oficinas em Feira de Santana',
    label: 'Loja no Centro',
    className: '',
  },
]

export default function Gallery() {
  return (
    <section className="gallery section" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow"><span /> Por dentro da nossa casa</p>
          <div className="section-heading__row">
            <h2 id="gallery-title">Estrutura para atender de perto.</h2>
            <p>
              Loja, balcão e estoque reunidos para facilitar seu pedido e agilizar o atendimento.
            </p>
          </div>
        </Reveal>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <Reveal className={`gallery-card ${item.className}`} delay={index * 70} key={item.image}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span><b>0{index + 1}</b>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
