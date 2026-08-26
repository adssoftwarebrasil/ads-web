import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading font-black text-dark-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-dark-400 font-body text-base max-w-lg mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className={`bg-white rounded-2xl p-7 border transition-all duration-300 ${
                i === 0 ? 'border-primary/40 shadow-lg shadow-primary/10' : 'border-dark-100'
              }`}
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <Quote size={20} className="text-primary/30" />
              </div>
              <p className="text-dark-600 font-body text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-dark-50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-primary text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-dark-900 text-sm">{t.name}</p>
                  <p className="text-dark-400 font-body text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-dark-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-dark-200 hover:bg-dark-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-dark-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
