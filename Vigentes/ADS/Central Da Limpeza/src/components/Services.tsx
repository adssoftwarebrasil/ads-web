import { Droplets, Sparkles, Package, Truck, Star, Building2 } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Tratamento de Piscinas',
    description:
      'Cloro, algicidas, clarificantes e kit completo para manutenção. Trabalhamos com a Genco, líder de mercado em tratamento de piscinas.',
    color: 'blue',
    badge: 'Especialidade',
  },
  {
    icon: Package,
    title: 'Limpeza Doméstica',
    description:
      'Amplo estoque de produtos para limpeza da sua casa: desengordurantes, detergentes, limpadores multiuso da Linha RENCO e muito mais.',
    color: 'orange',
    badge: null,
  },
  {
    icon: Building2,
    title: 'Limpeza Profissional',
    description:
      'Soluções completas para empresas, condomínios e estabelecimentos comerciais. Variedade de marcas com qualidade comprovada.',
    color: 'blue',
    badge: null,
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description:
      'Realizamos entrega em Pinhais, Curitiba e região metropolitana. Praticidade na sua rotina.',
    color: 'green',
    badge: null,
  },
  {
    icon: Star,
    title: 'Atendimento Personalizado',
    description:
      'Nossa equipe entende a necessidade de cada cliente e indica a melhor solução, seja para uso doméstico ou empresarial.',
    color: 'orange',
    badge: 'Diferencial',
  },
];

const colorMap = {
  blue: {
    icon: 'bg-brand-blue-light text-brand-blue',
    badge: 'bg-brand-blue text-white',
    hover: 'hover:border-brand-blue/30',
  },
  green: {
    icon: 'bg-brand-green-light text-brand-green',
    badge: 'bg-brand-green text-white',
    hover: 'hover:border-brand-green/30',
  },
  orange: {
    icon: 'bg-brand-orange-light text-brand-orange',
    badge: 'bg-brand-orange text-white',
    hover: 'hover:border-brand-orange/30',
  },
};

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-brand-blue-light text-brand-blue text-sm font-semibold rounded-full mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Produtos
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Loja ampla com variedade de marcas, respeitando sempre a qualidade.
            Encontre tudo para limpeza da sua casa, empresa ou piscina.
          </p>
        </div>

        {/* Layout Flexbox para permitir centralização da última linha */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorMap[service.color as keyof typeof colorMap];
            
            return (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${colors.hover} group 
                flex-grow-0 flex-shrink-0 basis-full md:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-2rem)]`}
              >
                {service.badge && (
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full ${colors.badge}`}>
                    {service.badge}
                  </span>
                )}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${colors.icon}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5541999150216?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold text-base rounded-full hover:bg-brand-blue-dark transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}