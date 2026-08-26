import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  avatarClass: string;
  name: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    text:
      '"Contratei meu seguro de carro pela DN Seguros e fui muito bem atendido. A cotação veio rapidinho e o preço ficou bem abaixo do que eu esperava. Recomendo!"',
    initials: 'CA',
    avatarClass: 'bg-gradient-to-br from-brand-blue to-brand-blue-dark',
    name: 'Carlos Alberto M.',
    city: 'São Paulo',
  },
  {
    text:
      '"Procurava um seguro residencial há algum tempo e a DN Seguros me ajudou a encontrar exatamente o que precisava. Atendimento excelente e muito profissional."',
    initials: 'FR',
    avatarClass: 'bg-gradient-to-br from-brand-red to-brand-red-dark',
    name: 'Fernanda R.',
    city: 'Rio de Janeiro',
  },
  {
    text:
      '"Minha empresa precisava de um seguro empresarial completo. A equipe da DN fez uma análise detalhada e encontrou a melhor opção. Processo sem complicação nenhuma."',
    initials: 'RS',
    avatarClass: 'bg-gradient-to-br from-brand-blue-light to-brand-blue',
    name: 'Roberto S.',
    city: 'Porto Alegre',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="section-title mt-2">O que nossos clientes dizem</h2>
          <p className="section-subtitle">A satisfação dos nossos clientes é o nosso maior diferencial.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-brand-blue/10 transition-colors duration-300">
                <Quote size={48} className="lucide lucide-quote fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarClass} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-blue text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-red rounded-full"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para proteger o que é seu?</h3>
            <p className="text-white/75 max-w-xl mx-auto mb-8">
              Solicite uma cotação gratuita agora e descubra quanto você pode economizar sem abrir mão da
              proteção que merece.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contato" className="btn-primary px-8 py-4 rounded-xl text-base">
                Solicitar Cotação Grátis
              </a>
              <a
                href="http://wa.me/5584991089072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
