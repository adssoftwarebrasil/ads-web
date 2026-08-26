import { useCallback, useRef, useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function BeforeAfter() {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="py-24 bg-[rgb(42,30,75)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={revealRef}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[rgb(219,38,27)] text-sm font-bold tracking-widest uppercase">
            Resultados reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5">
            Antes e Depois da Manutenção Preventiva
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Veja a diferença que uma manutenção preventiva bem feita faz. Arraste o controle para
            comparar o antes e o depois.
          </p>
        </div>
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] cursor-col-resize select-none shadow-2xl"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/Depois%20de%20uma%20manuten%C3%A7%C3%A3o%20preventiva%202026-04-01%20at%2013.42.28.webp"
              alt="Depois da manutenção preventiva"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src="https://storage.lucasmendes.dev/site-sp/advence-elevadores/servicos-produtos/Antes%20de%20uma%20manuten%C3%A7%C3%A3o%20preventiva%202026-04-01%20at%2013.42.27.webp"
                alt="Antes da manutenção preventiva"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${pos > 0 ? (100 / pos) * 100 : 200}%`, maxWidth: 'none' }}
                draggable={false}
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl border-2 border-gray-200">
                <ArrowLeftRight width={20} height={20} className="text-[rgb(42,30,75)]" />
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-[rgb(219,38,27)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
              Antes
            </div>
            <div className="absolute top-4 right-4 bg-[rgb(42,30,75)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
              Depois
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Arraste para comparar</p>
        </div>
      </div>
    </section>
  );
}
