import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente atendimento, ótimos profissionais, já fiz 6 motores diesel com eles aí tem experiência em máquinas pesadas."',
    initials: 'JM',
    name: 'Junior Mendes',
  },
  {
    text: '"A empresa tem um ótimo atendimento, preço justo e realiza os serviços com agilidade e excelente qualidade."',
    initials: 'RP',
    name: 'Raiane Nunes Pinheiro',
  },
  {
    text: '"Bom atendimento, ótimo serviço, eficiência no trabalho executado. Indico e aprovo o serviço da retifica."',
    initials: 'BL',
    name: 'Beto Lovezutte',
  },
];

function StarRow({ size, count = 5 }: { size: number; count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="lucide lucide-star text-primary fill-primary"
          width={size}
          height={size}
        />
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-14 visible">
          <span className="inline-block bg-primary/15 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-5">
            O que nossos clientes
            <span className="block" style={{ color: 'rgb(76, 181, 73)' }}>
              dizem sobre nós
            </span>
          </h2>
          <p className="text-brand-slate text-lg max-w-xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>
        <div className="animate-on-scroll flex justify-center mb-10 visible">
          <div className="inline-flex items-center gap-4 bg-brand-dark text-brand-white px-7 py-4 rounded-2xl shadow-xl">
            <div className="flex items-center gap-1">
              <StarRow size={20} />
            </div>
            <div>
              <div className="text-2xl font-black text-primary">5.0</div>
              <div className="text-brand-white/60 text-xs">Avaliação Google</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="animate-on-scroll bg-brand-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 relative visible"
            >
              <Quote
                className="lucide lucide-quote text-primary/20 absolute top-6 right-6"
                width={32}
                height={32}
              />
              <div className="flex items-center gap-1 mb-5">
                <StarRow size={17} />
              </div>
              <p className="text-brand-slate leading-relaxed text-base mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-brand-white"
                  style={{ background: 'linear-gradient(135deg, rgb(145, 200, 68), rgb(76, 181, 73))' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                  <div className="text-brand-slate text-xs">Cliente verificado</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
