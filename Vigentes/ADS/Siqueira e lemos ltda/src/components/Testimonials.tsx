import { Star, Quote } from 'lucide-react';

interface Testimonial {
  initials: string;
  avatarClass: string;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'MG',
    avatarClass: 'bg-brand',
    name: 'Maísa Graziela',
    text: 'Excelente trabalho, agilidade e confiança. Ótimo preço. Superou minhas expectativas na instalação das câmeras de segurança!',
  },
  {
    initials: 'AO',
    avatarClass: 'bg-brand-dark',
    name: 'Amanda Oliveira',
    text: 'Ótimo serviço, sempre prestativo, super satisfeita! A equipe é muito profissional e o resultado ficou perfeito.',
  },
  {
    initials: 'CM',
    avatarClass: 'bg-blue-600',
    name: 'Christiane Moreira',
    text: 'Rapidez e competência! Vieram no mesmo dia, resolveram tudo rapidinho. Com certeza recomendo para toda família e amigos.',
  },
  {
    initials: 'RA',
    avatarClass: 'bg-brand',
    name: 'Roberto Almeida',
    text: 'Instalaram o sistema de alarme e câmeras no meu comércio. Trabalho impecável, preço justo e atendimento de primeira.',
  },
  {
    initials: 'FC',
    avatarClass: 'bg-brand-dark',
    name: 'Fernanda Costa',
    text: 'Fechei com a Assistec para instalação de portão eletrônico e interfone. Ficou tudo muito bem feito. Super recomendo!',
  },
  {
    initials: 'CE',
    avatarClass: 'bg-blue-600',
    name: 'Carlos Eduardo',
    text: 'Atendimento diferenciado, explicaram tudo sobre os equipamentos e me ajudaram a escolher a melhor solução para minha casa.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge bg-brand-50 text-brand mb-4">Depoimentos</div>
          <h2 className="section-title mb-4">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="section-subtitle max-w-xl mx-auto">
            Mais de duas décadas construindo confiança com cada instalação, manutenção e venda.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="lucide lucide-star h-6 w-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-neutral-700 font-semibold text-lg">5.0</span>
            <span className="text-neutral-500 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="lucide lucide-quote absolute top-5 right-5 h-8 w-8 text-brand/10" />
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${t.avatarClass} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="lucide lucide-star h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://g.co/kgs/assistec"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
