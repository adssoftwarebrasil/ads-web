import { useRef, useState } from 'react';
import { MoveHorizontal, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Fcolchao-01.webp',
    tag: 'Showroom',
    title: 'Colchões Prontos na Loja',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Fcolchao-02.webp',
    tag: 'Showroom',
    title: 'Variedade de Densidades',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Fconforto-certificado.webp',
    tag: 'Qualidade',
    title: 'Qualidade e Conforto Certificados',
  },
];

export default function Gallery() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div className="animate-slideUp delay-600">
      <section id="galeria" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase">
              Portfólio Real
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Transformações que Surpreendem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Não é apenas espuma, é a renovação do seu conforto. Veja o nível de detalhe e
              qualidade do nosso trabalho.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <MoveHorizontal
                  className="lucide lucide-move-horizontal text-blue-600"
                  width={24}
                  height={24}
                />
                Arraste para ver a reforma
              </h3>
            </div>
            <div
              ref={containerRef}
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 select-none group border-4 border-white"
              onMouseMove={(e) => draggingRef.current && updatePosition(e.clientX)}
              onMouseUp={() => (draggingRef.current = false)}
              onMouseLeave={() => (draggingRef.current = false)}
              onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
            >
              <img
                src="https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Fcolchao-depois.webp"
                alt="Depois da reforma"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm z-10">
                DEPOIS
              </div>
              <div
                className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white"
                style={{ width: `${position}%` }}
              >
                <img
                  src="https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Fcolchao-antes.webp"
                  alt="Antes da reforma"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                />
                <div className="absolute top-4 left-4 bg-gray-800/90 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                  ANTES
                </div>
              </div>
              <div
                className="absolute inset-y-0 w-1 bg-transparent cursor-ew-resize"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-900 hover:scale-110 transition-transform z-30">
                  <MoveHorizontal className="lucide lucide-move-horizontal " width={20} height={20} />
                </div>
              </div>
              <div
                className="absolute inset-0 cursor-ew-resize z-20"
                onMouseDown={(e) => {
                  draggingRef.current = true;
                  updatePosition(e.clientX);
                }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-300 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.tag}
                  </span>
                  <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </p>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                    <ZoomIn className="lucide lucide-zoom-in " width={20} height={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
