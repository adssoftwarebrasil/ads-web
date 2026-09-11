import { Shield, Clock, MapPin, Headphones, Award, Leaf } from 'lucide-react';

const REASONS = [
  {
    icon: Shield,
    title: 'Produtos com Garantia',
    description: 'Todos os drones e peças comercializados possuem garantia e certificação de qualidade.',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description: 'Diagnóstico rápido e prazos de entrega que respeitem o cronograma da sua safra.',
  },
  {
    icon: MapPin,
    title: 'Atendimento Regional',
    description: 'Especialistas em Primavera do Leste e toda a região do Mato Grosso.',
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Equipe técnica treinada e disponível para tirar dúvidas e resolver problemas rapidamente.',
  },
  {
    icon: Award,
    title: 'Experiência no Agro',
    description: 'Focados exclusivamente no agronegócio, entendemos as necessidades reais do produtor rural.',
  },
  {
    icon: Leaf,
    title: 'Tecnologia Sustentável',
    description: 'Drones reduzem o uso de defensivos e combustível, trazendo mais eficiência com menor impacto.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-accent font-bold text-sm tracking-widest uppercase mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Por que escolher a{' '}
            <span className="text-brand-accent">Agro MT Drones?</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Somos mais que uma loja de drones. Somos um parceiro tecnológico do
            produtor rural comprometido com seus resultados no campo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white/5 hover:bg-brand-primary/20 border border-white/10 hover:border-brand-accent/40 rounded-3xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 group-hover:bg-brand-accent flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-brand-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Pronto para modernizar sua fazenda?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Fale com nossos especialistas e encontre a solução ideal para você.
            </p>
          </div>
          <a
            href="http://wa.me/556599004844"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-brand-light text-brand-dark font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg hover:shadow-white/20 hover:scale-105"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
