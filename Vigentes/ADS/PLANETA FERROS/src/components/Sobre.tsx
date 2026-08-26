import { BadgeCheck, Truck, Award, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BadgeCheck,
    title: 'Preço Competitivo',
    description: 'Compra direta de fábrica para garantir o melhor custo-benefício.',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Atendemos Palmas, Paraíso, Porto Nacional e toda a região.',
  },
  {
    icon: Award,
    title: 'Experiência no Setor',
    description: 'Mais de 6 anos fornecendo material metálico para a construção civil.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              alt="Quem Somos"
              className="w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/3]"
              src="/images/sobre.jpg"
            />
            <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-2xl px-5 py-4 shadow-xl shadow-accent/20">
              <div className="font-display text-2xl font-bold leading-none">6+</div>
              <div className="text-xs text-white/80 mt-0.5">anos no mercado</div>
            </div>
          </div>
          <div>
            <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Quem Somos
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line">
              A Planeta Ferros foi fundada em 2018 no Distrito de Luzimangues, Tocantins, com o
              objetivo de suprir a demanda por material metálico de qualidade na região. Trabalhamos
              com telhas galvalume, vergalhões, perfis, metalon e chapas de aço — tudo que sua obra
              precisa em um só lugar. Atendemos construtoras, serralheiros, calheiros e clientes
              finais com preços competitivos e agilidade na entrega.
            </p>
            <div className="space-y-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Icon width={19} height={19} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">{feature.title}</h4>
                      <p className="text-secondary text-sm mt-0.5 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
