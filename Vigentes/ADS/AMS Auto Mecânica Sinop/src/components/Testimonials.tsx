import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  initials: string;
  avatarColor: string;
  name: string;
  meta: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'MS',
    avatarColor: 'bg-brand-blue',
    name: 'Marcos Silva',
    meta: 'Guia Local · 119 avaliações',
    text: 'Melhor oficina de Sinop. Atendimento super profissional e serviços de confiança. Não levo meu carro em nenhum outro lugar desde que conheci a AMS.',
  },
  {
    initials: 'FC',
    avatarColor: 'bg-brand-red',
    name: 'Francisco das Chagas',
    meta: 'Guia Local · 121 avaliações',
    text: 'Ladi e sua equipe são muito competentes. Padrão de qualidade no serviço muito bom. Recomendo para todos que precisam de uma oficina séria e de confiança.',
  },
  {
    initials: 'AB',
    avatarColor: 'bg-teal-600',
    name: 'André Battisti',
    meta: 'Cliente verificado',
    text: 'Atendimento de excelência. Profissionais capacitados, atenciosos e ótimo custo benefício. Resolveram meu problema rapidamente e com preço justo.',
  },
  {
    initials: 'CE',
    avatarColor: 'bg-amber-600',
    name: 'Carlos Eduardo',
    meta: 'Cliente fidelizado',
    text: 'Levei meu carro com problema na suspensão e saiu funcionando perfeitamente. Explicaram tudo que precisava ser feito e o valor foi exatamente o combinado.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="section-title mb-4">
            O que Nossos Clientes <span className="text-brand-blue">Estão Dizendo</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o maior reconhecimento do nosso trabalho.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.initials}
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${
                i === active ? 'border-brand-red scale-[1.01]' : 'border-transparent'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.avatarColor} text-white font-bold flex items-center justify-center text-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-dark-light">{t.meta}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <Quote size={20} className="lucide-quote ml-auto text-brand-blue/20 shrink-0 mt-1" />
              </div>
              <p className="text-brand-dark-light text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-dark hover:text-brand-blue hover:shadow-lg transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-brand-red' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Depoimento ${i + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={() => setActive((a) => (a + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-dark hover:text-brand-blue hover:shadow-lg transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white rounded-2xl p-6 shadow-md max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-brand-dark-light">Google Meu Negócio</p>
          </div>
          <div className="h-px sm:h-10 sm:w-px w-20 bg-gray-200"></div>
          <p className="text-center text-brand-dark text-sm leading-relaxed">
            Somos altamente avaliados por nossos clientes no Google.
            <br />
            <strong className="text-brand-blue">Venha conferir pessoalmente!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
