import { Star, Quote } from 'lucide-react';
import { reviews } from '../data';

function Stars({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} fill="currentColor" className="text-amber-400" />
      ))}
    </>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Avaliações
          </span>
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle mx-auto">
            Avaliação média de <span className="text-amber-500 font-bold">5.0 estrelas</span> no
            Google. Confira o que quem já comprou acha da Limponop.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 px-7 py-4 rounded-2xl">
            <div className="flex gap-1">
              <Stars size={22} />
            </div>
            <div>
              <p className="font-extrabold text-2xl text-brand-dark leading-none">5.0</p>
              <p className="text-xs text-brand-gray mt-0.5">Nota no Google</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 card-hover relative"
            >
              <Quote
                width={32}
                height={32}
                fill="currentColor"
                className="text-brand-pink/20 absolute top-5 right-5"
              />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full gradient-pink-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{r.initial}</span>
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm leading-snug">{r.name}</p>
                  <p className="text-brand-gray text-xs mt-0.5">{r.meta}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                <Stars size={14} />
              </div>
              <p className="text-brand-gray text-sm leading-relaxed mt-4 italic">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Limponop+Solu%C3%A7%C3%B5es+em+Limpeza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-gray text-sm font-medium hover:text-brand-pink transition-colors underline underline-offset-4"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
