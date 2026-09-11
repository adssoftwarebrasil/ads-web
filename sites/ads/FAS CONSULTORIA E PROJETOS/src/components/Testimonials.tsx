import { Star, Quote } from 'lucide-react';

interface Testimonial {
  initial: string;
  name: string;
  meta: string;
  text: string;
  highlight?: boolean;
}

const testimonials: Testimonial[] = [
  {
    initial: 'J',
    name: 'Julio César Sólis Paulista dos Santos',
    meta: 'Local Guide · 97 avaliações',
    text: '"Excelente atendimento de qualidade, funcionários atenciosos e responsáveis. Além de comercializar Rastreador Para Veículos a empresa agora também vende e entrega baterias de carros e motos! Super Indico!"',
  },
  {
    initial: 'V',
    name: 'Vagner De Brito Brito',
    meta: 'Cliente verificado',
    text: '"Eu recomendo pois quando eu precisei acionar a empresa na hora me prestaram toda assistência necessária. Ta de parabéns, muito bom o serviço!"',
  },
  {
    initial: 'N',
    name: 'Naezio Alves Santos',
    meta: 'Cliente verificado',
    text: '"Instalei o equipamento em dezembro. Em janeiro fui assaltado na porta da casa da minha namorada. Graças a Deus o carro foi achado em 5 minutos! Serviço incrível."',
    highlight: true,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="lucide lucide-star" width={16} height={16} fill="#f59e0b" stroke="#f59e0b" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(222, 231, 232)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 intersection-animate">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'rgb(203, 219, 233)', color: 'rgb(27, 53, 74)' }}
          >
            Depoimentos
          </span>
          <h2 className="section-title mb-4">
            O que Nossos Clientes <span style={{ color: 'rgb(70, 96, 117)' }}>Dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stars />
            <span className="text-2xl font-bold" style={{ color: 'rgb(5, 31, 52)' }}>
              4.4
            </span>
            <span className="text-sm" style={{ color: 'rgb(112, 136, 160)' }}>
              Avaliação média no Google
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="intersection-animate card-hover bg-white rounded-2xl p-6 relative"
              style={{
                transitionDelay: `${i * 120}ms`,
                boxShadow: t.highlight ? 'rgba(70, 96, 117, 0.2) 0px 4px 24px' : 'rgba(5, 31, 52, 0.06) 0px 4px 20px',
                border: t.highlight ? '2px solid rgb(70, 96, 117)' : '1px solid rgb(222, 231, 232)',
              }}
            >
              {t.highlight && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'rgb(70, 96, 117)', color: 'white' }}
                >
                  Destaque
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: 'rgb(70, 96, 117)' }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'rgb(5, 31, 52)' }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: 'rgb(112, 136, 160)' }}>
                      {t.meta}
                    </p>
                  </div>
                </div>
                <Quote
                  className="lucide lucide-quote"
                  width={20}
                  height={20}
                  style={{ color: 'rgb(203, 219, 233)', flexShrink: 0 }}
                />
              </div>
              <Stars />
              <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgb(70, 96, 117)' }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 intersection-animate">
          <p className="text-sm mb-4" style={{ color: 'rgb(112, 136, 160)' }}>
            Junte-se a centenas de clientes protegidos em Mato Grosso e Mato Grosso do Sul
          </p>
          <a
            href="http://wa.me/556592264219?text=Olá!%20Vi%20os%20depoimentos%20e%20quero%20proteger%20meu%20veículo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 20px' }}
          >
            Quero Proteger Meu Veículo
          </a>
        </div>
      </div>
    </section>
  );
}
