import { Quote } from 'lucide-react';
import StarIcon from './StarIcon';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
  delay: number;
}

const testimonials: Testimonial[] = [
  {
    text: '"Atendimento de excelência, serviço de qualidade. Recomendo com empenho."',
    initials: 'RZ',
    name: 'Ronam Zacarias',
    role: 'Cliente',
    delay: 0,
  },
  {
    text: '"Ótima loja, atendimento diferenciado, muito atenciosa aos detalhes e com um pós serviço de primeira!"',
    initials: 'AA',
    name: 'Alessandro Arcos',
    role: 'Cliente',
    delay: 120,
  },
  {
    text: '"Local com melhor valor que encontrei e gostei do atendimento. Obrigado!"',
    initials: 'ES',
    name: 'Edmar Soares',
    role: 'Cliente',
    delay: 240,
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#034087] text-sm font-bold uppercase tracking-widest mb-3">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Avaliações Reais
          </h2>
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-100 mt-4">
            <div>
              <div className="text-5xl font-extrabold text-[#034087] leading-none">4.9</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Avaliação Média</div>
            </div>
            <div className="w-px h-14 bg-gray-200"></div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1.5">Google Avaliações</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 hover:border-[#034087]/15 hover:-translate-y-1 opacity-100 translate-y-0"
              style={{ transitionDelay: `${t.delay}ms` }}
            >
              <Quote className="w-8 h-8 text-[#034087]/20 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">{t.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#034087] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
