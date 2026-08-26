import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInViewport } from '../../hooks/useInViewport';
import { useIsMobile, useReducedMotion } from '../../hooks/useMediaQuery';

type Props = {
  items: ReactNode[];
  name: string;
  perView?: number;
  interval?: number;
  gap?: number;
};

export default function Carousel({ items, name, perView = 3, interval = 4800, gap = 18 }: Props) {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const { ref: rootRef, inView } = useInViewport<HTMLDivElement>({ threshold: 0.3 });
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number; type: string } | null>(null);
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const visibleCount = isMobile ? 1 : perView;
  const positions = Math.max(1, items.length - visibleCount + 1);
  const isStatic = items.length <= visibleCount;

  const goTo = useCallback(
    (next: number) => setIndex(((next % positions) + positions) % positions),
    [positions]
  );

  // Recalcula o deslocamento em pixels a partir da largura real do slide.
  useEffect(() => {
    const measure = () => {
      const slide = slideRef.current;
      if (!slide) return;
      setOffset(index * (slide.getBoundingClientRect().width + gap));
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, [gap, index, visibleCount]);

  useEffect(() => {
    if (index > positions - 1) setIndex(positions - 1);
  }, [index, positions]);

  useEffect(() => {
    if (isStatic || reducedMotion || paused || !inView) return;
    const timer = window.setTimeout(() => goTo(index + 1), interval);
    return () => window.clearTimeout(timer);
  }, [goTo, index, interval, inView, isStatic, paused, reducedMotion]);

  if (isStatic) {
    return (
      <div className="flex flex-wrap" style={{ gap: `${gap}px` }}>
        {items.map((item, i) => (
          <div key={i} className="min-w-0 flex-1">
            {item}
          </div>
        ))}
      </div>
    );
  }

  const basis = `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`;

  return (
    <div
      ref={rootRef}
      className="touch-pan-y"
      aria-roledescription="carrossel"
      aria-label={name}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={(event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY, type: event.pointerType };
        setPaused(true);
      }}
      onPointerUp={(event) => {
        const start = pointerStart.current;
        if (
          start &&
          start.type !== 'mouse' &&
          Math.abs(event.clientX - start.x) > 32 &&
          Math.abs(event.clientY - start.y) < 72
        ) {
          goTo(event.clientX < start.x ? index + 1 : index - 1);
        }
        pointerStart.current = null;
        setPaused(false);
      }}
      onPointerCancel={() => {
        pointerStart.current = null;
        setPaused(false);
      }}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{
            gap: `${gap}px`,
            transform: `translate3d(${-offset}px, 0, 0)`,
            transition: reducedMotion ? 'none' : 'transform .7s cubic-bezier(.2,.8,.2,1)',
          }}
        >
          {items.map((item, i) => {
            const active = i >= index && i < index + visibleCount;
            return (
              <div
                key={i}
                ref={i === 0 ? slideRef : undefined}
                className="min-w-0 flex-none"
                style={{ flexBasis: basis }}
                aria-hidden={!active}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[1.35rem] flex items-center justify-center gap-[.9rem]">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Item anterior"
          className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-cyan-brand hover:bg-white/10"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <div className="flex min-h-[42px] items-center justify-center gap-[.42rem]">
          {Array.from({ length: positions }, (_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => goTo(dot)}
              aria-label={`Ir para o item ${dot + 1}`}
              aria-pressed={dot === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                dot === index ? 'w-6 bg-cyan-brand' : 'w-2 bg-white/45'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Próximo item"
          className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-cyan-brand hover:bg-white/10"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">{`${name}: item ${index + 1} de ${positions}`}</p>
    </div>
  );
}
