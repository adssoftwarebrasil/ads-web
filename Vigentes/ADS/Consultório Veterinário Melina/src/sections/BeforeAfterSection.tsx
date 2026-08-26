import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section id="before-after" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Transformações que Cuidamos
          </h2>
          <p className="text-lg text-secondary-dark/70 max-w-2xl mx-auto">
            Veja os resultados dos nossos tratamentos especializados
          </p>
        </div>

        <div
          className={`max-w-4x1 mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-55'
          }`}
        >
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            style={{ aspectRatio: '4/5' }}
          >
            <div className="absolute inset-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FDepois-Cachorro.jpg"
                alt="Depois do tratamento"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-secondary/90 text-white px-6 py-2 rounded-full font-bold uppercase text-sm backdrop-blur-sm">
                Depois
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FAntes-Cachorro.jpg"
                alt="Antes do tratamento"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-secondary/90 text-white px-6 py-2 rounded-full font-bold uppercase text-sm backdrop-blur-sm">
                Antes
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                  <MoveHorizontal className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-6 text-secondary-dark/70">
            Arraste o controle para comparar antes e depois do tratamento
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
