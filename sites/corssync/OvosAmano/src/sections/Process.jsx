import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import frame01 from "../assets/posters/video-01.jpg";
import frame02 from "../assets/posters/video-02.jpg";
import frame03 from "../assets/posters/video-03.jpg";
import frame04 from "../assets/posters/video-04.jpg";
import frame05 from "../assets/posters/video-05.jpg";
import frame06 from "../assets/posters/video-06.jpg";
import frame07 from "../assets/posters/video-07.jpg";
import video01 from "../assets/videos/process-01.mp4";
import video02 from "../assets/videos/process-02.mp4";
import video03 from "../assets/videos/process-03.mp4";
import video04 from "../assets/videos/process-04.mp4";
import video05 from "../assets/videos/process-05.mp4";
import video06 from "../assets/videos/process-06.mp4";
import video07 from "../assets/videos/process-07.mp4";

const steps = [
  {
    title: "Movimentação cuidadosa",
    short: "Fluxo",
    text: "O processo é organizado para manter o produto protegido em cada etapa.",
    video: video01,
    poster: frame01,
    label: "Cartelas passando pela linha de produção",
  },
  {
    title: "Inspeção por luz",
    short: "Inspeção",
    text: "A ovoscopia ajuda a observar o interior do ovo e reforça o padrão de seleção.",
    video: video02,
    poster: frame02,
    label: "Ovos iluminados durante a etapa de inspeção",
  },
  {
    title: "Classificação",
    short: "Seleção",
    text: "Os ovos percorrem linhas que auxiliam a organização e a classificação dos tamanhos.",
    video: video03,
    poster: frame03,
    label: "Ovos sendo distribuídos em esteiras de classificação",
  },
  {
    title: "Acondicionamento",
    short: "Cartelas",
    text: "Ovos selecionados são acomodados nas cartelas para seguir protegidos até o destino.",
    video: video04,
    poster: frame04,
    label: "Ovos vermelhos sendo acomodados em cartelas verdes",
  },
  {
    title: "Controle no percurso",
    short: "Controle",
    text: "Equipamentos e acompanhamento em linha apoiam a consistência do processo.",
    video: video05,
    poster: frame05,
    label: "Detalhe de ovos percorrendo o equipamento de seleção",
  },
  {
    title: "Proteção da embalagem",
    short: "Proteção",
    text: "A embalagem recebe acabamento para preservar o conjunto durante manuseio e transporte.",
    video: video06,
    poster: frame06,
    label: "Equipamento aplicando proteção à embalagem",
  },
  {
    title: "Finalização da linha",
    short: "Finalização",
    text: "Sensores e mecanismos acompanham a última etapa antes da distribuição.",
    video: video07,
    poster: frame07,
    label: "Detalhe de sensor na etapa final da linha produtiva",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const current = steps[activeStep];

  useEffect(() => {
    const video = videoRef.current;
    setVideoError(false);
    setIsPlaying(false);

    if (!video) return;

    const playback = video.play();
    if (playback) {
      playback.catch(() => setIsPlaying(false));
    }
  }, [activeStep]);

  const selectRelative = (direction) => {
    setActiveStep((active) => (active + direction + steps.length) % steps.length);
  };

  return (
    <section className="process section" id="qualidade">
      <div className="container">
        <div className="process__heading" data-reveal>
          <div>
            <p className="eyebrow eyebrow--orange">Por dentro do cuidado</p>
            <h2>Qualidade que você pode acompanhar.</h2>
          </div>
          <p>
            Da seleção à embalagem, cada etapa reforça a procedência e a segurança
            que chegam com a marca Amano.
          </p>
        </div>

        <div className="process-viewer" data-reveal>
          <div className="process-viewer__media">
            <video
              ref={videoRef}
              key={current.video}
              src={current.video}
              poster={current.poster}
              aria-label={current.label}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setVideoError(true)}
            />
            <div className="process-viewer__counter">
              <span>{String(activeStep + 1).padStart(2, "0")}</span>
              <i />
              <span>{String(steps.length).padStart(2, "0")}</span>
            </div>
            <div className={`process-viewer__live ${videoError ? "is-error" : ""}`}>
              <i />
              {videoError ? "Vídeo indisponível" : isPlaying ? "Em reprodução" : "Pronto para reproduzir"}
            </div>
            <div className="process-viewer__arrows">
              <button type="button" onClick={() => selectRelative(-1)} aria-label="Etapa anterior">
                <Icon name="arrow" size={22} />
              </button>
              <button type="button" onClick={() => selectRelative(1)} aria-label="Próxima etapa">
                <Icon name="arrow" size={22} />
              </button>
            </div>
          </div>

          <div className="process-viewer__content">
            <span className="control-label">Etapa {String(activeStep + 1).padStart(2, "0")}</span>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <div className="process-tabs" role="tablist" aria-label="Etapas do processo">
              {steps.map((step, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={index === activeStep}
                  className={index === activeStep ? "is-active" : ""}
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
