import { Play } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import tourApartamento from "../assets/videos/tour-apartamento.mp4";
import tourAcomodacao from "../assets/videos/tour-acomodacao.mp4";
import sala from "../assets/images/apartamento-sala-detalhe.webp";
import quarto from "../assets/images/suite-casal.webp";

const videos = [
  {
    src: tourApartamento,
    poster: sala,
    title: "Conheça um dos apartamentos",
    orientation: "landscape",
  },
  {
    src: tourAcomodacao,
    poster: quarto,
    title: "Passeio por uma das acomodações",
    orientation: "portrait",
  },
];

function VideoTour() {
  return (
    <section className="section video-section" aria-labelledby="video-title">
      <div className="container video-layout">
        <Reveal className="video-copy">
          <SectionHeading
            eyebrow="Veja em movimento"
            title={<><span id="video-title">Um passeio</span> antes da chegada.</>}
            text="Assista aos vídeos e conheça melhor alguns dos espaços disponíveis."
          />
          <div className="video-tip">
            <Play aria-hidden="true" />
            <p>Use os controles do vídeo para reproduzir, pausar ou assistir em tela cheia.</p>
          </div>
        </Reveal>

        <div className="video-cards">
          {videos.map((video) => (
            <Reveal className={`video-card video-${video.orientation}`} key={video.src}>
              <video controls preload="metadata" poster={video.poster} aria-label={video.title}>
                <source src={video.src} type="video/mp4" />
                Seu navegador não oferece suporte à reprodução de vídeo.
              </video>
              <span>{video.title}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoTour;
