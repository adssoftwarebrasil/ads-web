import { Zap, ShoppingCart, Wrench, ClipboardList, ArrowRight, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    icon: Zap,
    title: 'Instalação de Energia Solar',
    desc: 'Instalação profissional e segura de sistemas fotovoltaicos completos. Nossa equipe técnica garante o melhor posicionamento e eficiência máxima para o seu imóvel.',
    popular: true,
  },
  {
    icon: ShoppingCart,
    title: 'Venda de Placas Solares',
    desc: 'Equipamentos de alta performance com tecnologia de ponta e garantia estendida. Trabalhamos com as melhores marcas do mercado fotovoltaico.',
  },
  {
    icon: Wrench,
    title: 'Manutenção de Sistemas',
    desc: 'Serviço preventivo e corretivo para manter seu sistema operando com máxima eficiência. Diagnóstico completo e atendimento ágil.',
  },
  {
    icon: ClipboardList,
    title: 'Projetos Personalizados',
    desc: 'Dimensionamento técnico sob medida para residências, comércios e indústrias. Cada projeto é único e desenvolvido para maximizar o retorno do seu investimento.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-yellow font-semibold text-sm tracking-widest uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
            Soluções Completas em <span className="text-brand-yellow">Energia Solar</span>
          </h2>
          <p className="text-brand-blue/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Da consultoria à instalação, oferecemos tudo que você precisa para gerar sua própria energia e economizar de
            verdade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative group bg-white rounded-2xl p-7 border border-brand-blue/10 hover:border-brand-yellow/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {s.popular && (
                  <span className="absolute -top-3 left-6 bg-brand-yellow text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
                    Mais popular
                  </span>
                )}
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-yellow/20 transition-colors duration-200">
                  <Icon width={24} height={24} className="text-brand-yellow" />
                </div>
                <h3 className="text-brand-blue font-bold text-lg mb-3 leading-snug">{s.title}</h3>
                <p className="text-brand-blue/60 text-sm leading-relaxed flex-1">{s.desc}</p>
                <a
                  href="http://wa.me/5575988443984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-1.5 text-brand-yellow font-semibold text-sm group-hover:gap-2.5 transition-all duration-200"
                >
                  Saiba mais <ArrowRight width={15} height={15} className="lucide lucide-arrow-right " />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
