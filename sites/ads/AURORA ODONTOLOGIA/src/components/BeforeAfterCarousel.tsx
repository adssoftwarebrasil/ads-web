import { useEffect, useState } from 'react';

const CASOS = [
  {
    src: '/antes-e-depois-1.jpg',
    alt: 'Antes e depois de uma prótese dentária fixa feita na Aurora Odontologia',
  },
  {
    src: '/antes-e-depois-2.jpg',
    alt: 'Antes e depois de uma restauração dos dentes da frente feita na Aurora Odontologia',
  },
  {
    src: '/antes-e-depois-3.jpg',
    alt: 'Antes e depois de facetas nos dentes da frente feitas na Aurora Odontologia',
  },
  {
    src: '/antes-e-depois-4.jpg',
    alt: 'Antes e depois de lentes nos dentes da frente feitas na Aurora Odontologia',
  },
  {
    src: '/antes-e-depois-5.jpg',
    alt: 'Antes e depois de um tratamento facial na região dos olhos feito na Aurora Odontologia',
  },
  {
    src: '/antes-e-depois-6.jpg',
    alt: 'Antes e depois de um preenchimento labial feito na Aurora Odontologia',
  },
];

const INTERVALO = 5000;

export default function BeforeAfterCarousel() {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setInterval(() => setAtual((i) => (i + 1) % CASOS.length), INTERVALO);
    return () => clearInterval(timer);
  }, [pausado]);

  const ir = (i: number) => setAtual((i + CASOS.length) % CASOS.length);

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carrossel"
      aria-label="Antes e depois de casos reais"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <div className="carousel__stage">
        {CASOS.map((caso, i) => (
          <img
            key={caso.src}
            src={caso.src}
            alt={caso.alt}
            className={`carousel__slide${i === atual ? ' is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            aria-hidden={i !== atual}
          />
        ))}

        <button
          type="button"
          className="carousel__nav carousel__nav--prev"
          onClick={() => ir(atual - 1)}
          aria-label="Caso anterior"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="carousel__nav carousel__nav--next"
          onClick={() => ir(atual + 1)}
          aria-label="Próximo caso"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="carousel__dots">
        {CASOS.map((caso, i) => (
          <button
            key={caso.src}
            type="button"
            className={`carousel__dot${i === atual ? ' is-active' : ''}`}
            onClick={() => ir(i)}
            aria-label={`Ver caso ${i + 1} de ${CASOS.length}`}
            aria-current={i === atual}
          />
        ))}
      </div>
    </div>
  );
}
