import { Star, Quote } from 'lucide-react';

interface Testimonial {
  tag: string;
  text: string;
  name: string;
  guide?: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    tag: 'Regularização de Imóvel',
    text: '"Contratei serviços para regularizar minha casa na escritura e tive uma experiência excepcional. As profissionais demonstraram competência, responsabilidade e total dedicação em cada etapa do processo. Além disso, consegui um excelente desconto, o que tornou tudo ainda melhor. O serviço foi entregue com excelência, superando minhas expectativas. Recomendo com total confiança!"',
    name: 'Elza Borges',
    time: '4 meses atrás',
  },
  {
    tag: 'Venda de Imóvel',
    text: '"Procurei a empresa para vender minha casa e tive uma experiência extremamente positiva. Os profissionais demonstraram agilidade e competência, utilizando sua ampla carteira de clientes para concretizar a venda rapidamente. Todo o processo foi realizado com transparência, segurança e ótimo atendimento. Fiz excelentes negócios e estou totalmente satisfeito com o resultado. Recomendo com confiança!"',
    name: 'Elvio Rodrigues',
    time: '4 meses atrás',
  },
  {
    tag: 'Atendimento Geral',
    text: '"Ótimo atendimento. Profissionais capacitados e comprometidos. Indico para qualquer serviço de engenharia e arquitetura na região."',
    name: 'Marco Aurélio Balieiro',
    guide: 'Local Guide · 36 avaliações',
    time: '7 meses atrás',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={13}
          height={13}
          strokeWidth={2}
          className="lucide lucide-star fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-pr-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="divider-line mx-auto"></div>
          <h2 className="section-heading mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Stars />
            <span className="text-pr-dark font-semibold text-sm">5.0</span>
            <span className="text-pr-grey text-sm">· Média geral Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-pr-taupe p-7 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <Quote
                width={28}
                height={28}
                strokeWidth={2}
                className="lucide lucide-quote text-pr-rose mb-4 flex-shrink-0"
              />
              <div className="flex items-center justify-between mb-3">
                <Stars />
                <span className="text-xs text-pr-muted bg-pr-cream px-2 py-1">{t.tag}</span>
              </div>
              <p className="text-pr-grey text-sm leading-relaxed flex-1 mb-5">{t.text}</p>
              <div className="pt-4 border-t border-pr-cream">
                <p className="font-medium text-pr-dark text-sm">{t.name}</p>
                {t.guide && <p className="text-pr-muted text-xs mt-0.5">{t.guide}</p>}
                <p className="text-pr-grey text-xs mt-0.5">{t.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-pr-grey text-sm mb-4">
            Satisfação garantida em cada projeto. Venha fazer parte da nossa carteira de clientes.
          </p>
          <a href="http://wa.me/556284826969" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
