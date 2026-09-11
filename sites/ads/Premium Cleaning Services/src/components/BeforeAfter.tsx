import { useRef, useState } from 'react';

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updateFromClientX(e.touches[0].clientX);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-4">See The Difference</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the transformative power of professional cleaning
          </p>
        </div>
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-2xl select-none cursor-ew-resize"
          onMouseDown={(e) => {
            dragging.current = true;
            updateFromClientX(e.clientX);
          }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onMouseMove={handleMove}
          onTouchMove={handleTouchMove}
        >
          <img
            src="https://iili.io/KwXUkLQ.jpg"
            alt="Kitchen cleaning transformation - After"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0px ${100 - position}% 0px 0px)` }}
          >
            <img
              src="https://iili.io/KwXUUrP.jpg"
              alt="Kitchen cleaning transformation - Before"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${position}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-6 bg-gray-400"></div>
                <div className="w-0.5 h-6 bg-gray-400"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-[#1C2A39] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-[#D4AF78] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
