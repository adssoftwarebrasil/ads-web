import { Star, Quote } from 'lucide-react';

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="fill-yellow-400 text-yellow-400" width={16} height={16} />
      ))}
    </div>
  );
}

const summary = [
  { label: 'iFood', score: '4.9' },
  { label: 'Google', score: '5.0' },
];

interface Testimonial {
  initial: string;
  name: string;
  role: string;
  text: string;
  time: string;
  delay: number;
}

const testimonials: Testimonial[] = [
  {
    initial: 'C',
    name: 'Claudia Brasil',
    role: 'Guia Local',
    text: 'Participamos do rodízio na quinta-feira. Pessoal super educado. A pizza é diferente de todos os rodízios que já fomos, apesar de ser rodízio é bem recheada, saborosa, nós gostamos muito. Super recomendo. Atendimento nota 10.',
    time: '3 semanas atrás',
    delay: 0,
  },
  {
    initial: 'V',
    name: 'Vera Brisolla',
    role: 'Avaliadora',
    text: 'Adoro essas pizzas feitas pela equipe. São as verdadeiras pizzas italianas. Queijo verdadeiro, bem recheadas, recheios deliciosos, massa caseira perfeita e crocante por fora e macio por dentro. Assada no forno a lenha. Minha nota é 10 ou mil, mas o máximo é 5. Dou a melhor nota.',
    time: '4 meses atrás',
    delay: 120,
  },
  {
    initial: 'R',
    name: 'Rafael Brasil',
    role: 'Guia Local · 125 avaliações',
    text: 'Ótima experiência. Pizzas saborosas, bem recheadas. Um lugar que você definitivamente precisa visitar em Goiânia.',
    time: 'uma semana atrás',
    delay: 240,
  },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-cream text-sm font-semibold tracking-[0.25em] uppercase">
            O que dizem nossos clientes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3">
            Aprovados por Quem Come
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {summary.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 rounded-2xl px-8 py-5 border border-white/10 text-center"
              >
                <div className="text-white font-semibold text-sm mb-2">{s.label}</div>
                <div className="font-serif font-bold text-4xl text-brand-cream">{s.score}</div>
                <Stars />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-brand-red/30 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 relative opacity-100 translate-y-0"
              style={{ transitionDelay: `${t.delay}ms` }}
            >
              <Quote
                className="text-brand-red/30 absolute top-6 right-6"
                width={36}
                height={36}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
              <Stars />
              <p className="text-white/70 text-sm leading-relaxed mt-4">{t.text}</p>
              <p className="text-white/30 text-xs mt-4">{t.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
