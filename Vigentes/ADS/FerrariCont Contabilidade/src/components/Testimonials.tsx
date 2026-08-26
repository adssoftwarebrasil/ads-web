import { Quote } from 'lucide-react';
import Star from './Star';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
  delay: number;
}

const testimonials: Testimonial[] = [
  {
    text: '"Empresa comprometida com os interesses dos seus clientes e com seus colaboradores. Atendimento nota 10!"',
    initials: 'MM',
    name: 'Metalúrgica Maria Fumaça',
    role: 'Setor Metalúrgico',
    delay: 0,
  },
  {
    text: '"Ótimo atendimento, profissionais muito atenciosos. Ajudaram minha empresa a economizar muito em impostos. Aprovados!!!"',
    initials: 'MK',
    name: 'Miquéias Kaiper',
    role: 'Empresário',
    delay: 150,
  },
  {
    text: '"Faço a contabilidade de todas as minhas empresas com eles. Sempre comprometidos, atendimento humanizado. A Denise e o José sempre respondem de forma rápida. Não importa o momento, sempre encontram a melhor estratégia. Super indico!"',
    initials: 'NB',
    name: 'Nathan Beltrame',
    role: 'Empresário com múltiplas empresas',
    delay: 300,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="section-title mt-2">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Mais de 90 empresas confiam na FerrariCont. Veja o que elas falam sobre nossa atuação.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="#18E66E" />
              ))}
            </div>
            <span className="text-primary font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">no Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.initials} className="animate-on-scroll" style={{ transitionDelay: `${t.delay}ms` }}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <Quote size={28} className="text-accent/40 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-primary font-bold text-sm leading-tight truncate">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5 truncate">{t.role}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="#18E66E" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-on-scroll" style={{ transitionDelay: '600ms' }}>
          <a
            href="http://wa.me/556596828492?text=Ol%C3%A1!%20Vi%20os%20depoimentos%20e%20quero%20conhecer%20a%20FerrariCont."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Quero Ser o Próximo Cliente Satisfeito
          </a>
        </div>
      </div>
    </section>
  );
}
