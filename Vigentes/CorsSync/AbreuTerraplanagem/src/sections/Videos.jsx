import { PlayCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import excavatorVideo from "../assets/videos/escavadeira-frota.mp4";
import maintenanceVideo from "../assets/videos/manutencao-d61.mp4";
import tractorVideo from "../assets/videos/trator-oficina.mp4";
import excavatorPoster from "../assets/images/video-escavadeira.webp";
import maintenancePoster from "../assets/images/video-manutencao.webp";
import tractorPoster from "../assets/images/video-trator.webp";

const videos = [
  { title: "Escavadeira hidráulica", label: "Frota", src: excavatorVideo, poster: excavatorPoster },
  { title: "Preparação em oficina", label: "Estrutura", src: maintenanceVideo, poster: maintenancePoster },
  { title: "Trator de esteira", label: "Equipamento", src: tractorVideo, poster: tractorPoster },
];

function Videos() {
  return (
    <section className="section videos" aria-labelledby="videos-title">
      <div className="container">
        <Reveal>
          <SectionIntro
            eyebrow="Veja de perto"
            title="Equipamentos preparados para encarar serviço pesado."
            text="Conheça alguns detalhes da frota e da estrutura da Abreu Terraplenagem."
            align="center"
            titleId="videos-title"
          />
        </Reveal>
        <div className="video-grid">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={index * 70}>
              <article className="video-card">
                <div className="video-card__media">
                  <video controls preload="metadata" poster={video.poster} aria-label={`Vídeo: ${video.title}`}>
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta vídeo em HTML5.
                  </video>
                  <PlayCircle size={34} aria-hidden="true" />
                </div>
                <div>
                  <span>{video.label}</span>
                  <h3>{video.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;
