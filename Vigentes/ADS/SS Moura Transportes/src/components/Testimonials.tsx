import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  meta: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Precisei de um guincho e foram super rápidos para me atender, além do preço super em conta. Recomendo!"',
    name: 'Maria Angélica Rodrigues',
    meta: '8 avaliações · 1 foto · 2 meses atrás',
  },
  {
    text: '"Quero agradecer a equipe Transporte SS MOURA pelo excelente trabalho realizado! Profissionalismo, dedicação e qualidade em cada detalhe. É sempre um prazer contar com uma equipe tão competente."',
    name: 'Ana Clara',
    meta: '1 avaliação · 4 meses atrás',
  },
  {
    text: '"Ótima prestação de serviço, pessoal muito atencioso, recomendo muito!"',
    name: 'Samuel Giordano',
    meta: '1 avaliação · 3 meses atrás',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={15}
          height={15}
          fill="#f59e0b"
          strokeWidth={0}
          className="lucide lucide-star text-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">O que dizem sobre nós</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Avaliações <span className="gradient-text">Reais</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-3 shadow-sm mt-2">
            <div>
              <span className="text-4xl font-extrabold text-gray-900">5.0</span>
            </div>
            <div className="text-left">
              <Stars />
              <p className="text-xs text-gray-500 mt-1">Avaliação média no Google</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col section-reveal"
              style={{ transitionDelay: '0ms' }}
            >
              <Quote
                width={32}
                height={32}
                fill="currentColor"
                strokeWidth={0}
                className="lucide lucide-quote text-brand-blue-100 mb-4 flex-shrink-0"
              />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="border-t border-gray-100 pt-5">
                <Stars />
                <p className="font-bold text-gray-900 mt-2 text-sm">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.meta}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/553799568191"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-blue-dark transition-colors underline underline-offset-4"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
