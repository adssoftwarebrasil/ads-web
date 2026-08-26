import { Building2, Award } from 'lucide-react';

interface Testimonial {
  name: string;
  subtitle: string;
  quote: string;
  animClass: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'VALE',
    subtitle: 'Mais de 30 anos de parceria',
    quote: '"Fornecedor de confiança para nossas demandas de sinalização visual"',
    animClass: 'opacity-100 translate-x-0',
  },
  {
    name: 'JUSTIÇA FEDERAL',
    subtitle: 'Atendimento contínuo',
    quote: '"Qualidade e pontualidade em todos os projetos institucionais"',
    animClass: 'opacity-100 translate-x-0',
  },
];

export default function Trust() {
  return (
    <section className="py-20 md:py-24 px-5 md:px-10 bg-[rgb(240,240,240)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(3,0,0)] mb-4 transition-all duration-1000 opacity-100 translate-y-0">
            Confiança de Grandes Nomes
          </h2>
          <p className="text-gray-700 text-lg md:text-xl transition-all duration-1000 delay-200 opacity-100 translate-y-0">
            Empresas e instituições de referência escolhem a Marco Placas há décadas
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-white p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${t.animClass}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <Building2
                  className="lucide lucide-building2 w-12 h-12 text-[rgb(167,28,31)]"
                  width={24}
                  height={24}
                />
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(3,0,0)]">{t.name}</h3>
                  <p className="text-gray-600 font-medium">{t.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg italic leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>
        <div className="bg-[rgb(167,28,31)] text-white py-8 px-6 rounded-lg text-center shadow-xl transition-all duration-1000 delay-400 opacity-100 scale-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <Award className="lucide lucide-award w-10 h-10" width={24} height={24} />
              <span className="text-xl md:text-2xl font-bold">41 anos no mercado</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30" />
            <div className="flex items-center gap-3">
              <Award className="lucide lucide-award w-10 h-10" width={24} height={24} />
              <span className="text-xl md:text-2xl font-bold">Garantia em todos os produtos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
