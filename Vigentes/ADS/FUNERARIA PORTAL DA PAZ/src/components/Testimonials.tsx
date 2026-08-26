import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Raoni Carneiro',
    role: '11 avaliações · 1 foto',
    stars: 5,
    text: 'Fiquei muito satisfeito com o serviço do Jorge. Profissional capacitado e bem equipado, realizou um serviço impecável por um bom preço e foram muito pontuais. Recomendo a todos!',
  },
  {
    name: 'Alana Castro',
    role: 'Guia Local · 7 avaliações · 6 fotos',
    stars: 5,
    text: 'Excelente, muito satisfeita com o profissionalismo da equipe que fizeram um trabalho de excelência — superaram as minhas expectativas. SUPER INDICO!',
  },
  {
    name: 'Clenio Rodrigues de Arruda',
    role: 'Guia Local · 146 avaliações · 120 fotos',
    stars: 5,
    text: 'Foi ótima, ótimo preço e excelente atendimento. Recomendo.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-[rgb(156,133,92)] text-[rgb(156,133,92)]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[rgb(11,28,15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(156,133,92)] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            A Confiança de Quem{' '}
            <span className="text-[rgb(202,183,144)]">já nos Escolheu</span>
          </h2>

          <div className="inline-flex items-center gap-3 bg-[rgb(23,56,32)] bg-opacity-50 border border-[rgb(55,104,68)] border-opacity-40 rounded-full px-6 py-3 mt-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-[rgb(156,133,92)] text-[rgb(156,133,92)]" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-[rgb(146,171,185)] text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[rgb(23,56,32)] bg-opacity-30 border border-[rgb(55,104,68)] border-opacity-20 rounded-2xl p-7 flex flex-col gap-5 hover:border-[rgb(110,92,59)] hover:bg-[rgb(23,56,32)] hover:bg-opacity-50 transition-all duration-300"
            >
              <StarRating count={t.stars} />

              <p className="text-[rgb(211,212,205)] text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[rgb(55,104,68)] border-opacity-30">
                <div className="w-10 h-10 rounded-full bg-[rgb(55,104,68)] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[rgb(146,171,185)] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[rgb(146,171,185)] text-sm mt-10">
          Avaliações verificadas no Google Maps · Portal da Paz — Ananindeua, PA
        </p>
      </div>
    </section>
  );
}
