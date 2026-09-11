import { Play } from 'lucide-react'
import aerialImage from '../assets/gra-unidade-aerea.jpeg'
import facadeImage from '../assets/gra-fachada.jpeg'

function Structure() {
  return (
    <section className="structure section" id="estrutura">
      <div className="container">
        <div className="structure-intro" data-reveal>
          <p className="eyebrow"><span /> Estrutura real</p>
          <h2>Espaço para cuidar de quem trabalha todos os dias.</h2>
          <p>
            Conheça de perto a unidade da GRA em Trindade, preparada para receber veículos de diferentes portes.
          </p>
        </div>

        <div className="media-grid">
          <div className="video-card video-wide" data-reveal>
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster={aerialImage}
              aria-label="Vídeo horizontal da estrutura da GRA Distribuidora"
            >
              <source src="/videos/gra-video-horizontal.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
            <div className="media-label"><Play size={15} aria-hidden="true" /> Por dentro da GRA</div>
          </div>

          <div className="media-side">
            <figure className="photo-card" data-reveal>
              <img src={facadeImage} alt="Entrada da oficina GRA em Trindade" />
              <figcaption>Nossa unidade em Trindade</figcaption>
            </figure>
            <div className="video-card video-portrait" data-reveal>
              <video
                controls
                muted
                playsInline
                preload="metadata"
                poster={facadeImage}
                aria-label="Vídeo vertical da estrutura da GRA Distribuidora"
              >
                <source src="/videos/gra-video-vertical.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Structure
