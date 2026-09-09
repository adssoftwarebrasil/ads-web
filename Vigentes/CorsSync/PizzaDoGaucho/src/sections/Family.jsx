import { useEffect, useRef, useState } from 'react'
import { Baby, Heart, Sparkles } from 'lucide-react'
import pizzaVideo from '../assets/pizza-em-video.mp4'
import videoPoster from '../assets/pizza-sabor-puro.jpeg'
import playgroundImage from '../assets/brinquedoteca-projeto.jpg'

function Family() {
  const [reduceMotion, setReduceMotion] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(media.matches)
    updatePreference()
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reduceMotion && videoRef.current) videoRef.current.pause()
  }, [reduceMotion])

  return (
    <section className="family-section">
      <div className="container family-grid">
        <div className="family-card" data-reveal>
          <figure className="family-playground">
            <img
              src={playgroundImage}
              alt="Brinquedoteca da Pizza do Gaúcho com escorregadores, piscina de bolinhas e área de atividades"
              loading="lazy"
            />
            <figcaption>Espaço para brincar</figcaption>
          </figure>
          <div className="family-content">
            <div className="play-shapes" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="eyebrow">Pizza + família</p>
            <Baby className="family-icon" size={42} strokeWidth={1.7} aria-hidden="true" />
            <h2>Pizzaria com brinquedoteca em Trindade.</h2>
            <p>
              Os pequenos têm espaço para brincar enquanto a família aproveita a mesa com mais tranquilidade.
            </p>
            <div className="family-points">
              <span><Heart aria-hidden="true" /> Noite em família</span>
              <span><Sparkles aria-hidden="true" /> Diversão para os pequenos</span>
            </div>
          </div>
        </div>

        <figure className="video-card" data-reveal>
          <video
            ref={videoRef}
            src={pizzaVideo}
            poster={videoPoster}
            muted
            autoPlay={!reduceMotion}
            loop={!reduceMotion}
            playsInline
            controls={reduceMotion}
            preload="metadata"
            aria-label="Vídeo da Pizza do Gaúcho"
          />
          <figcaption>
            <span>Da nossa cozinha</span>
            <strong>para a sua mesa.</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Family
