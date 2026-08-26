import { Home, Ruler, Package, HardHat, type LucideIcon } from 'lucide-react';

interface Servico {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const servicos: Servico[] = [
  {
    icon: Home,
    title: 'Telhas Galvalume',
    description:
      'Telhas de alta resistência para coberturas industriais, comerciais e residenciais. Durabilidade superior ao aço galvanizado comum.',
    href: 'https://wa.me/5563992531326?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%3A%20Telhas%20Galvalume',
  },
  {
    icon: Ruler,
    title: 'Perfis e Metalon',
    description:
      'Perfis estruturais, cantoneiras, metalon quadrado e retangular para estruturas metálicas de todo tipo de obra.',
    href: 'https://wa.me/5563992531326?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%3A%20Perfis%20e%20Metalon',
  },
  {
    icon: Package,
    title: 'Chapas de Aço',
    description:
      'Chapas lisas e xadrez para revestimento, pisos, equipamentos e estruturas. Disponíveis em diversas espessuras.',
    href: 'https://wa.me/5563992531326?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%3A%20Chapas%20de%20A%C3%A7o',
  },
  {
    icon: HardHat,
    title: 'Vergalhões e Zinco',
    description:
      'Vergalhões CA-50 e CA-60 para armação de concreto, além de chapas e bobinas de zinco para canalhas e calhas.',
    href: 'https://wa.me/5563992531326?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%3A%20Vergalh%C3%B5es%20e%20Zinco',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
            Soluções sob medida para o que você precisa.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <div
                key={servico.title}
                className="w-full sm:w-[calc(50%-12px)] max-w-lg bg-white rounded-2xl border-t-4 border-accent shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1 text-center items-center">
                  <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                    <Icon width={26} height={26} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3">{servico.title}</h3>
                  <p className="text-secondary leading-relaxed flex-1 text-sm">{servico.description}</p>
                  <a
                    href={servico.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-accent/10 text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-colors duration-200"
                  >
                    Saiba mais →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
