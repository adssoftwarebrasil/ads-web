import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "../components/Reveal";
import { brand, experienceImages, whatsappUrl } from "../data/siteData";

function Experience() {
  return (
    <section className="experience section section--blue">
      <div className="container experience-layout">
        <div className="experience-copy">
          <Reveal>
            <p className="eyebrow eyebrow--light">
              <span aria-hidden="true" />
              Conheça a nossa casa
            </p>
            <h2>Três anos conectando pessoas a novos caminhos.</h2>
            <p>
              A FRT Veículos nasceu para tornar a compra, a venda e a troca de veículos mais próximas e transparentes.
              Em cada atendimento, a equipe une experiência de mercado e atenção ao que realmente importa para você.
            </p>
            <div className="experience-stats">
              <div>
                <strong>3</strong>
                <span>anos de mercado</span>
              </div>
              <div>
                <strong>3</strong>
                <span>formas de negociar</span>
              </div>
              <div>
                <strong>1</strong>
                <span>atendimento próximo</span>
              </div>
            </div>
            <a className="text-link text-link--light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Fale com a nossa equipe <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="experience-media" delay={100}>
          <div className="video-frame">
            <video
              src={brand.showroomTour}
              poster={brand.videoPoster}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Vídeo do espaço e dos veículos da FRT Veículos"
            />
            <div className="video-label">
              <Play size={16} fill="currentColor" aria-hidden="true" />
              Um giro pela FRT
            </div>
          </div>
          <img
            className="experience-photo experience-photo--top"
            src={experienceImages.primary}
            alt="Fachada principal da FRT Veículos"
            width="1280"
            height="960"
            loading="lazy"
          />
          <img
            className="experience-photo experience-photo--bottom"
            src={experienceImages.secondary}
            alt="Veículos selecionados no showroom"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
