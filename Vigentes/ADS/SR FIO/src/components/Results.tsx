import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/antes-e-depois-tratamento-capilar-feminino_1440x1440.webp',
    alt: 'Antes e depois — tratamento capilar feminino',
    label: 'Tratamento Feminino',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/antes-depois-tratamento-capilar-masculino_1440x1440.webp',
    alt: 'Antes e depois — tratamento capilar masculino',
    label: 'Tratamento Masculino',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/antes-e-depois-tratamento-capilar-homem_1440x1440.webp',
    alt: 'Antes e depois — tratamento capilar homem',
    label: 'Tratamento Masculino',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/homem-antes-depois-tratamento-alopecia_1440x1440.webp',
    alt: 'Antes e depois — tratamento de alopecia masculino',
    label: 'Tratamento de Alopecia',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/terapia-capilar-antes-depois-cabelo-danificado_1079x1316.webp',
    alt: 'Antes e depois — cabelo danificado',
    label: 'Cabelo Danificado',
  },
];

export default function Results() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setCurrent((v) => (v + 1) % slides.length);

  return (
    <section id="resultados" className="py-12 md:py-16 bg-brand-slate-dark px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-brand-gold font-body text-[10px] font-bold tracking-[0.3em] uppercase">
            Transformações
          </span>
          <h2 className="font-heading text-2xl md:text-4xl text-white mt-1">Resultados Reais</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
          <div className="w-full lg:w-[500px] relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl bg-black/20">
              {slides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 bg-brand-gold/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded">
                {slides[current].label}
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="flex flex-row lg:flex-col gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => setCurrent(i)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  i === current ? 'ring-2 ring-brand-gold scale-105' : 'opacity-40'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-14 h-14 md:w-16 md:h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-brand-gold' : 'w-2 bg-white/10'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
