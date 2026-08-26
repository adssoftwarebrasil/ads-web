import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_IMAGES = 60;
const PER_SLIDE = 12;
const TOTAL_SLIDES = Math.ceil(TOTAL_IMAGES / PER_SLIDE);

const productImages = Array.from({ length: TOTAL_IMAGES }, (_, i) =>
  String(i + 1).padStart(2, '0')
);

export default function Products() {
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => (s === 0 ? TOTAL_SLIDES - 1 : s - 1));
  const next = () => setSlide((s) => (s === TOTAL_SLIDES - 1 ? 0 : s + 1));

  const visible = productImages.slice(slide * PER_SLIDE, slide * PER_SLIDE + PER_SLIDE);

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-[rgb(245,241,220)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(84,10,1)] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            NOSSOS PRODUTOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(84,10,1)] mb-6">
            Cutelaria de Alta Qualidade
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore nossa coleção exclusiva de facas artesanais, katanas, canivetes e muito mais.
            Cada peça é selecionada com cuidado para garantir qualidade e beleza incomparáveis.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {visible.map((id, i) => (
              <div
                key={id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[3/4] bg-[rgb(245,241,220)]"
              >
                <img
                  src={`/produtos/${id}-640.webp`}
                  srcSet={`/produtos/${id}-320.webp 320w, /produtos/${id}-640.webp 640w`}
                  sizes="(min-width: 1024px) 292px, (min-width: 768px) 33vw, 50vw"
                  width={640}
                  height={853}
                  loading={slide === 0 && i < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  alt={`Produto Cutelaria Bielliz ${slide * PER_SLIDE + i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="bg-[rgb(84,10,1)] text-white p-3 rounded-full hover:bg-[rgb(120,30,20)] transition-colors shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    slide === i ? 'bg-[rgb(84,10,1)] w-8' : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={next}
              className="bg-[rgb(84,10,1)] text-white p-3 rounded-full hover:bg-[rgb(120,30,20)] transition-colors shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5519992079201?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(84,10,1)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(120,30,20)] transition-colors shadow-xl"
          >
            Consulte Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
