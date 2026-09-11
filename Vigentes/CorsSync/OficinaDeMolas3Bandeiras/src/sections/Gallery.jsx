import Reveal from '../components/Reveal.jsx'
import facilityImage from '../assets/images/oficina-fachada.jpg'
import frontImage from '../assets/images/oficina-frente.jpg'
import truckImage from '../assets/images/caminhao-marca.jpg'

function Gallery() {
  return (
    <section className="gallery section" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="gallery-heading">
          <p className="eyebrow"><span /> Nossa estrutura</p>
          <h2 id="gallery-title">Espaço para receber quem move a região.</h2>
        </Reveal>
        <div className="gallery-grid">
          <Reveal className="gallery-item gallery-wide">
            <img src={facilityImage} alt="Fachada e área de atendimento do Posto de Molas 3 Bandeiras" />
            <span>Estrutura para linha média e pesada</span>
          </Reveal>
          <Reveal className="gallery-item" delay={80}>
            <img src={frontImage} alt="Vista externa da oficina em Nova Olímpia" />
            <span>Nova Olímpia · MT</span>
          </Reveal>
          <Reveal className="gallery-item" delay={140}>
            <img src={truckImage} alt="Caminhão atendido pelo Posto de Molas 3 Bandeiras" />
            <span>Trabalho que segue viagem</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Gallery
