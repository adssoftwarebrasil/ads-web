import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Ótimo atendimento, entrega mais rápida da cidade e ótimos preços!"',
    initial: 'L',
    name: 'Lavinia Chavez Mello',
    when: '2 meses atrás',
    delay: '0ms',
  },
  {
    text: '"Ótimo atendimento, equipamentos de qualidade. Agilidade na entrega e ótimos preços."',
    initial: 'P',
    name: 'Pedro Cordeiro',
    when: '5 meses atrás',
    delay: '150ms',
  },
  {
    text: '"Excelente atendimento, e são muito rápidos na hora de entregar os equipamentos, equipamentos de qualidade."',
    initial: 'M',
    name: 'Márcia Carla',
    when: '11 meses atrás',
    delay: '300ms',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            O Que Nossos<span className="text-brand-orange"> Clientes Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-500">no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 relative hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: t.delay }}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-brand-blue/20" />
              </div>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.when}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
