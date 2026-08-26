import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, AVATAR_IMAGES } from '../data';

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars />
            <span className="text-gray-500 text-sm font-medium">
              Avaliação 5.0 — Google Reviews
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`relative bg-neutral-light rounded-2xl p-7 border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-on-scroll ${t.delay}`}
            >
              <Quote size={36} className="text-primary/20 absolute top-5 right-5" />
              <Stars />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'rgb(77, 29, 88)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 animate-on-scroll">
          <div className="flex">
            {AVATAR_IMAGES.map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-neutral overflow-hidden -ml-2 first:ml-0"
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-800">+200 clientes</span> confiam na Meta
            Contabilidade
          </p>
        </div>
      </div>
    </section>
  );
}
