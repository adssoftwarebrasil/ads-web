import { Play } from "lucide-react";
import { videoTours } from "../data/content";

function VideoTour() {
  return (
    <section className="section video-section">
      <div className="container">
        <div className="section-heading section-heading--center reveal" data-reveal>
          <div>
            <p className="section-eyebrow">Veja antes de chegar</p>
            <h2 className="section-title">Um tour pelo Paris Apart Hotel.</h2>
          </div>
          <p>Conheça um pouco dos ambientes preparados para receber você em Barreiras.</p>
        </div>

        <div className="video-grid">
          {videoTours.map((video, index) => (
            <article className="video-card reveal" data-reveal key={video.src}>
              <div className="video-card__media">
                <video
                  controls
                  preload="metadata"
                  poster={video.poster}
                  playsInline
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>
                <span className="video-card__play" aria-hidden="true"><Play fill="currentColor" /></span>
              </div>
              <div className="video-card__caption">
                <span>0{index + 1}</span>
                <h3>{video.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoTour;
