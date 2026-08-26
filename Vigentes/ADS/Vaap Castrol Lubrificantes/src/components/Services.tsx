import { Droplets, Settings, Thermometer, Filter, Package, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WA_BASE = 'https://wa.me/556584438839?text=';

const services = [
  {
    icon: Droplets,
    title: 'Troca de Óleo e Filtros',
    description: 'Troca completa de óleo do motor com filtros originais de alta qualidade. Utilizamos óleo Castrol para máxima proteção do seu motor.',
    cta: 'Agendar Troca de Óleo',
    waMsg: 'Olá! Gostaria de agendar uma troca de óleo e filtros.',
    color: 'bg-brand-green',
  },
  {
    icon: Settings,
    title: 'Câmbio Automático',
    description: 'Troca do fluido de câmbio automático com produtos específicos para cada veículo, prolongando a vida útil da transmissão.',
    cta: 'Agendar Câmbio',
    waMsg: 'Olá! Gostaria de agendar a troca do fluido de câmbio automático.',
    color: 'bg-brand-green',
  },
  {
    icon: Thermometer,
    title: 'Fluido de Radiador',
    description: 'Substituição do fluido de arrefecimento para garantir a temperatura ideal do motor e evitar superaquecimentos.',
    cta: 'Agendar Radiador',
    waMsg: 'Olá! Gostaria de agendar a troca do fluido de radiador.',
    color: 'bg-brand-green',
  },
  {
    icon: Filter,
    title: 'Filtros Automotivos',
    description: 'Linha completa de filtros de óleo, ar, combustível e cabine das marcas Mann, Tecfil e Wega para todos os veículos.',
    cta: 'Consultar Filtros',
    waMsg: 'Olá! Gostaria de informações sobre filtros automotivos.',
    color: 'bg-brand-green',
  },
  {
    icon: Wrench,
    title: 'Óleo de Câmbio e Diferencial',
    description: 'Troca de óleo de câmbio manual e diferencial para veículos leves, garantindo transmissão suave e durável.',
    cta: 'Agendar Serviço',
    waMsg: 'Olá! Gostaria de agendar a troca de óleo de câmbio/diferencial.',
    color: 'bg-brand-green',
  },
  {
    icon: Package,
    title: 'Lubrificantes Premium',
    description: 'Linha completa de lubrificantes Castrol, Repsol, Mopar, AC Delco, Motul e Shell para carros, SUVs e picapes.',
    cta: 'Ver Catálogo',
    waMsg: 'Olá! Gostaria de informações sobre os lubrificantes disponíveis.',
    color: 'bg-brand-green',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isInView } = useInView();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`service-card group transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green transition-colors duration-300">
        <Icon size={26} className="text-brand-green group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
      <a
        href={`${WA_BASE}${encodeURIComponent(service.waMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm hover:text-brand-green-dark transition-colors group"
      >
        {service.cta}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

export default function Services() {
  const { ref: titleRef, isInView: titleInView } = useInView();

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-600 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            O que fazemos
          </span>
          <h2 className="section-title">Nossos Serviços Especializados</h2>
          <p className="section-subtitle mx-auto">
            Do motor à transmissão, cuidamos de cada detalhe do seu veículo com produtos
            originais e mão de obra qualificada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
