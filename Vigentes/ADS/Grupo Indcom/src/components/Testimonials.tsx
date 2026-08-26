import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
  delay: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"A experiência com o Grupo Indcom foi excepcional. A equipe demonstrou profissionalismo e compromisso ambiental em cada etapa. Sempre entregando serviços de alta qualidade com pontualidade impecável."',
    initials: 'CA',
    name: 'Carlos Andrade',
    role: 'Diretor de Logística',
    delay: 0,
  },
  {
    quote: '"Confiei a gestão dos nossos resíduos ao Grupo Indcom e o resultado superou todas as expectativas. A consultoria especializada e o atendimento personalizado fazem toda a diferença. Recomendo fortemente!"',
    initials: 'MF',
    name: 'Maria Fernanda',
    role: 'Gerente de Compras',
    delay: 150,
  },
  {
    quote: '"O atendimento personalizado e a atenção aos detalhes do Grupo Indcom são impressionantes. Eles realmente se preocupam em entender as necessidades específicas do cliente e entregar soluções eficientes."',
    initials: 'JL',
    name: 'José Lima',
    role: 'Empresário',
    delay: 300,
  },
  {
    quote: '"Trabalhar com o Grupo Indcom é ter a certeza de estar alinhado com as melhores práticas ambientais do mercado. Profissionalismo, competência técnica e compromisso com a sustentabilidade em cada projeto."',
    initials: 'AP',
    name: 'Ana Paula',
    role: 'Coordenadora Ambiental',
    delay: 450,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[rgb(245,247,250)] py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 transition-all duration-700 opacity-0 translate-y-8">
          <div className="text-sm font-semibold uppercase tracking-wider text-[rgb(130,196,92)] mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,120,80)] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">Experiências reais de quem confia no Grupo Indcom</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all opacity-0 translate-y-8"
              style={{ transitionDelay: `${t.delay}ms` }}
            >
              <Quote className="lucide lucide-quote absolute top-6 right-6 w-12 h-12 text-[rgba(130,196,92,0.2)]" />
              <div className="relative z-10">
                <p className="text-base text-[rgb(45,55,65)] leading-relaxed italic mb-6 min-h-[120px]">
                  {t.quote}
                </p>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star w-[18px] h-[18px] fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="w-[60px] h-[3px] bg-[rgb(130,196,92)] mb-5"></div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(40,120,80)] to-[rgb(130,196,92)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{t.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[rgb(40,120,80)]">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
