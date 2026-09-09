import { ArrowUpRight, Check, Play } from 'lucide-react';
import depot from '../assets/deposito.webp';
import fleet from '../assets/frota.webp';
import neighborhood from '../assets/vista-deposito.webp';
import truckPoster from '../assets/video-frota.webp';
import depotPoster from '../assets/video-deposito.webp';

export const mediaItems = [
  {
    type: 'video',
    src: '/videos/carreta-nova.mp4',
    poster: truckPoster,
    title: 'Nossa frota em movimento',
    label: 'Vídeo da frota da Primavera Gás',
  },
  {
    type: 'video',
    src: '/videos/primavera-gas.mp4',
    poster: depotPoster,
    title: 'Um pouco da Primavera',
    label: 'Vídeo da Primavera Gás',
  },
  {
    type: 'image',
    src: fleet,
    title: 'Nossa casa em Sinop',
    label: 'Vista do depósito da Primavera Gás e dos veículos de entrega',
  },
  {
    type: 'image',
    src: neighborhood,
    title: 'Pertinho de você',
    label: 'Vista da Primavera Gás na Avenida Senador Jonas Pinheiro',
  },
];

export default function Story({ onOpenMedia }) {
  return (
    <section
      className="story-section section-space"
      id="historia"
      aria-labelledby="story-title"
    >
      <div className="container">
        <div className="story-grid">
          <div className="story-photo">
            <img
              src={depot}
              alt="Depósito da Primavera Gás com os veículos de entrega e estoques de gás e água"
              width="1600"
              height="1200"
              loading="lazy"
            />
            <div className="story-photo-note">
              <span className="small-dot" /> RAÍZES EM SINOP. CUIDADO COM VOCÊ.
            </div>
          </div>
          <div className="story-content">
            <span className="eyebrow">
              GENTE DAQUI, CUIDANDO DE QUEM É DAQUI.
            </span>
            <h2 id="story-title">
              30 anos fazendo parte
              <br />
              da vida em Sinop.
            </h2>
            <p>
              A cidade cresce, a rotina muda, mas tem coisa que continua: a
              nossa vontade de atender bem.
            </p>
            <p>
              Há 30 anos, a Primavera Gás atua no segmento de gás e água em
              Sinop. É uma história construída no dia a dia, com rapidez nas
              entregas e qualidade no atendimento.
            </p>
            <div className="story-values">
              <span>
                <Check size={17} aria-hidden="true" /> Experiência de quem
                conhece a cidade
              </span>
              <span>
                <Check size={17} aria-hidden="true" /> Gás e água em um só lugar
              </span>
              <span>
                <Check size={17} aria-hidden="true" /> Atendimento próximo, de
                verdade
              </span>
            </div>
            <a href="#contato" className="text-link">
              Venha conhecer a Primavera{' '}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="gallery-heading">
          <span>Um pouco do nosso dia a dia</span>
          <span>
            PRIMAVERA GÁS, DE PERTO{' '}
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
        <div className="media-grid">
          {mediaItems.slice(0, 3).map((item, index) => (
            <button
              key={item.src}
              className="media-card"
              onClick={() => onOpenMedia(index)}
              aria-label={`${item.type === 'video' ? 'Assistir' : 'Ampliar'}: ${item.label}`}
            >
              <img
                src={item.poster || item.src}
                alt={item.label}
                width="800"
                height="600"
                loading="lazy"
              />
              <span className="media-overlay" />
              <span className="media-type">
                {item.type === 'video'
                  ? 'EM VÍDEO'
                  : 'NOSSO DEPÓSITO · 2 FOTOS'}
              </span>
              <span className="media-title">{item.title}</span>
              <span className="media-play">
                {item.type === 'video' ? (
                  <Play size={20} fill="currentColor" aria-hidden="true" />
                ) : (
                  <ArrowUpRight size={23} aria-hidden="true" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
