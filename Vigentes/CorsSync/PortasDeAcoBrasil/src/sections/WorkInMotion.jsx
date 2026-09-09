import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { videos } from "../data/siteData";

function WorkInMotion() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="section work" id="trabalho" aria-label="O trabalho em movimento">
      <div className="container">
        <Reveal className="work__heading">
          <SectionIntro
            eyebrow="O trabalho em movimento"
            title="Da fabricação ao teste final."
            description="Registros reais mostram etapas e resultados do trabalho realizado pela equipe."
          />
          <p className="work__counter" aria-hidden="true">
            <strong>{activeVideo.number}</strong>
            <span>/ 04</span>
          </p>
        </Reveal>

        <Reveal className="work__stage">
          <div className="work__player">
            <video
              key={activeVideo.id}
              controls
              playsInline
              preload="metadata"
              poster={activeVideo.poster}
              aria-label={activeVideo.title}
            >
              <source src={activeVideo.src} type="video/mp4" />
              Seu navegador não oferece suporte à reprodução deste vídeo.
            </video>
            <div className="work__player-caption">
              <span>{activeVideo.duration}</span>
              <div>
                <strong>{activeVideo.title}</strong>
                <p>{activeVideo.description}</p>
              </div>
            </div>
          </div>

          <div className="work__playlist" role="tablist" aria-label="Vídeos do trabalho">
            {videos.map((video) => {
              const isActive = video.id === activeVideo.id;

              return (
                <button
                  className={isActive ? "is-active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveVideo(video)}
                  key={video.id}
                >
                  <img src={video.poster} alt="" />
                  <span className="work__playlist-number">{video.number}</span>
                  <span className="work__playlist-title">{video.title}</span>
                  <span className="work__playlist-duration">{video.duration}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WorkInMotion;
