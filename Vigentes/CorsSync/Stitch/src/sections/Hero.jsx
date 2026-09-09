import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import { company, heroSlides } from "../data/siteData";

const AUTOPLAY_DELAY = 5500;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || manualPaused || interactionPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [interactionPaused, manualPaused]);

  const goToSlide = (index) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setInteractionPaused(false);
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;

    if (Math.abs(distance) > 50) {
      goToSlide(activeIndex + (distance < 0 ? 1 : -1));
    }

    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Principais serviços da Kadima"
      aria-roledescription="carrossel"
      className="hero"
      id="inicio"
      onBlurCapture={handleBlur}
      onFocusCapture={() => setInteractionPaused(true)}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      <div className="hero__circuit hero__circuit--one" aria-hidden="true" />
      <div className="hero__circuit hero__circuit--two" aria-hidden="true" />

      <div className="hero__viewport">
        <div
          className="hero__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === activeIndex;
            const Heading = index === 0 ? "h1" : "h2";

            return (
              <article
                aria-hidden={!isActive}
                aria-label={`${index + 1} de ${heroSlides.length}`}
                aria-roledescription="slide"
                className="hero__slide"
                key={slide.title}
              >
                <div className="container hero__grid">
                  <div className="hero__content">
                    <div className="eyebrow">
                      <span className="eyebrow__dot" />
                      {slide.eyebrow}
                    </div>

                    <Heading className="hero__title">
                      {slide.title} <span>{slide.accent}</span>
                    </Heading>

                    <p className="hero__lead">{slide.description}</p>

                    <div className="hero__actions">
                      <a
                        className="button button--yellow"
                        href={slide.ctaHref}
                        rel="noreferrer"
                        tabIndex={isActive ? 0 : -1}
                        target="_blank"
                      >
                        {slide.ctaLabel}
                        <Icon name="arrowRight" size={20} />
                      </a>
                      <a
                        className="button button--outline-light"
                        href={slide.secondaryHref}
                        tabIndex={isActive ? 0 : -1}
                      >
                        {slide.secondaryLabel}
                      </a>
                    </div>

                    <div className="hero__meta">
                      <div>
                        <Icon name="mapPin" size={19} />
                        <span>Locação em Seropédica e região</span>
                      </div>
                      <div>
                        <Icon name="wrench" size={19} />
                        <span>Manutenção somente na loja</span>
                      </div>
                    </div>
                  </div>

                  <div className="hero-visual">
                    <div className="hero-visual__frame">
                      <img src={slide.image} alt={slide.imageAlt} />
                      <div className="hero-visual__shade" aria-hidden="true" />
                      <div className="hero-visual__label">
                        <span>{slide.imageKicker}</span>
                        <strong>{slide.imageLabel}</strong>
                      </div>
                    </div>
                    <div
                      className="hero-visual__stat"
                      aria-label={`${slide.statValue} ${slide.statLabel}`}
                    >
                      <strong>{slide.statValue}</strong>
                      <span>{slide.statLabel}</span>
                    </div>
                    <div className="hero-visual__badge" aria-hidden="true">
                      <Icon name={slide.badgeIcon} size={21} />
                      {slide.badgeText}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="hero__controls">
        <div className="container hero__controls-inner">
          <button
            aria-label="Slide anterior"
            className="hero__arrow hero__arrow--previous"
            onClick={() => goToSlide(activeIndex - 1)}
            type="button"
          >
            <Icon name="arrowRight" size={18} />
          </button>

          <div className="hero__dots" aria-label="Escolher slide">
            {heroSlides.map((slide, index) => (
              <button
                aria-current={index === activeIndex ? "true" : undefined}
                aria-label={`Mostrar slide ${index + 1}: ${slide.title}`}
                className={`hero__dot ${index === activeIndex ? "is-active" : ""}`}
                key={slide.title}
                onClick={() => goToSlide(index)}
                type="button"
              />
            ))}
          </div>

          <button
            aria-label={manualPaused ? "Retomar carrossel" : "Pausar carrossel"}
            className="hero__pause"
            onClick={() => setManualPaused((current) => !current)}
            type="button"
          >
            <Icon name={manualPaused ? "play" : "pause"} size={17} />
          </button>

          <button
            aria-label="Próximo slide"
            className="hero__arrow"
            onClick={() => goToSlide(activeIndex + 1)}
            type="button"
          >
            <Icon name="arrowRight" size={18} />
          </button>
        </div>
      </div>

      <div className="container hero__bottom-line">
        <span>Manutenção na loja</span>
        <strong>{company.address}</strong>
      </div>
    </section>
  );
}

export default Hero;
