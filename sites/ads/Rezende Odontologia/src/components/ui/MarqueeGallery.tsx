import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useMediaQuery';

type Props = {
  images: string[];
  /** Segundos para percorrer uma volta completa da faixa. */
  duration?: number;
  label: string;
  cardClassName?: string;
  imgClassName?: string;
  gap?: number;
};

/**
 * Faixa de imagens em rolagem contínua. O loop de animação só roda enquanto a
 * faixa está visível na tela — fora dela o rAF é cancelado para não consumir
 * CPU/bateria em segundo plano.
 */
export default function MarqueeGallery({
  images,
  duration = 30,
  label,
  cardClassName = '',
  imgClassName = '',
  gap = 14,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!root || !viewport || !track || reducedMotion || images.length < 2) return;

    let setWidth = track.scrollWidth / 2;
    let position = 0;
    let paused = false;
    let dragging = false;
    let inView = false;
    let dragStartX = 0;
    let dragStartPosition = 0;
    let lastFrame: number | null = null;
    let frame = 0;
    let resumeTimer = 0;

    const measure = () => {
      setWidth = track.scrollWidth / 2;
    };

    const wrap = () => {
      if (setWidth <= 0) return;
      position %= setWidth;
      if (position > 0) position -= setWidth;
    };

    const apply = () => {
      track.style.transform = `translate3d(${position}px,0,0)`;
    };

    const step = (timestamp: number) => {
      if (lastFrame === null) lastFrame = timestamp;
      const delta = (timestamp - lastFrame) / 1000;
      lastFrame = timestamp;
      if (!paused && !dragging && setWidth > 0) {
        position -= (setWidth / duration) * delta;
        wrap();
        apply();
      }
      frame = requestAnimationFrame(step);
    };

    const startLoop = () => {
      if (frame) return;
      lastFrame = null;
      frame = requestAnimationFrame(step);
    };

    const stopLoop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        inView = Boolean(entries[0]?.isIntersecting);
        if (inView) startLoop();
        else stopLoop();
      },
      { threshold: 0 }
    );
    observer.observe(root);

    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else if (inView) startLoop();
    };

    const onPause = () => {
      paused = true;
    };
    const onResume = () => {
      paused = false;
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      paused = true;
      dragStartX = event.clientX;
      dragStartPosition = position;
      viewport.classList.add('cursor-grabbing');
      viewport.setPointerCapture?.(event.pointerId);
      window.clearTimeout(resumeTimer);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      position = dragStartPosition + (event.clientX - dragStartX);
      wrap();
      apply();
    };

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove('cursor-grabbing');
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        paused = false;
      }, 1200);
    };

    measure();
    window.addEventListener('resize', measure, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    root.addEventListener('mouseenter', onPause);
    root.addEventListener('mouseleave', onResume);
    root.addEventListener('focusin', onPause);
    root.addEventListener('focusout', onResume);
    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);

    return () => {
      stopLoop();
      observer.disconnect();
      window.clearTimeout(resumeTimer);
      window.removeEventListener('resize', measure);
      document.removeEventListener('visibilitychange', onVisibility);
      root.removeEventListener('mouseenter', onPause);
      root.removeEventListener('mouseleave', onResume);
      root.removeEventListener('focusin', onPause);
      root.removeEventListener('focusout', onResume);
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', endDrag);
      viewport.removeEventListener('pointercancel', endDrag);
    };
  }, [duration, images.length, reducedMotion]);

  // Com reduced motion a faixa vira um carrossel de rolagem manual.
  const staticMode = reducedMotion || images.length < 2;
  const loop = staticMode ? images : [...images, ...images];

  return (
    <div ref={rootRef} className="min-w-0" role="region" aria-label={label}>
      <div
        ref={viewportRef}
        className={`overflow-hidden ${staticMode ? 'overflow-x-auto' : 'cursor-grab touch-pan-y'}`}
      >
        <div
          ref={trackRef}
          className="flex w-max items-stretch will-change-transform"
          style={{ gap: `${gap}px` }}
          aria-hidden="true"
        >
          {loop.map((image, index) => (
            <figure
              key={`${image}-${index}`}
              className={`m-0 flex-none overflow-hidden rounded-card bg-[#dce9eb] ${cardClassName}`}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
                className={`h-full w-full select-none object-cover ${imgClassName}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
