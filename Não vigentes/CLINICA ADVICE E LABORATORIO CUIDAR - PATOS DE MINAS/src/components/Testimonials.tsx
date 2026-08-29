import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Atendimento rápido, empatia com o cliente. Local de espera agradável e higiênico.',
    initials: 'JP',
    name: 'João Pedro Oliveira Pereira',
    time: '5 meses atrás',
  },
  {
    text: 'Atendimento nota 10. Profissionais bem qualificados nas suas áreas.',
    initials: 'LF',
    name: 'Leandro Ferreira',
    time: '5 meses atrás',
  },
  {
    text: 'Agradável, atendimento rápido bem direcionado e funcionários educados.',
    initials: 'RA',
    name: 'Reginaldo A. Amaral',
    time: '4 meses atrás',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Avaliações reais de quem já conhece a qualidade dos nossos serviços.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <p className="text-neutral-600 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-neutral-400 text-xs">{t.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
