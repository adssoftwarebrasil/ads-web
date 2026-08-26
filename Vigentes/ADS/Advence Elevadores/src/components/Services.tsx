import { Settings, Wrench, RefreshCw, AlertTriangle, Accessibility, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href: string;
  delay: number;
}

const services: Service[] = [
  {
    Icon: Settings,
    title: 'Instalação de Elevadores',
    description:
      'Fornecimento e instalação de elevadores novos para residências, edifícios comerciais e industriais. Projeto personalizado, com materiais de alta qualidade e conformidade com as normas ABNT.',
    cta: 'Solicitar Instalação',
    href: 'https://wa.me/5562998152991?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Instala%C3%A7%C3%A3o%20de%20Elevadores',
    delay: 0,
  },
  {
    Icon: Wrench,
    title: 'Manutenção Preventiva',
    description:
      'Contratos de manutenção preventiva com visitas periódicas programadas. Identificamos e corrigimos problemas antes que se tornem falhas, garantindo segurança e longevidade ao seu equipamento.',
    cta: 'Solicitar Manutenção',
    href: 'https://wa.me/5562998152991?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Manuten%C3%A7%C3%A3o%20Preventiva',
    delay: 80,
  },
  {
    Icon: RefreshCw,
    title: 'Modernização',
    description:
      'Revitalize seu elevador antigo com tecnologia moderna. Substituímos componentes obsoletos por soluções atuais, melhorando desempenho, economia de energia e estética do equipamento.',
    cta: 'Modernizar Agora',
    href: 'https://wa.me/5562998152991?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Moderniza%C3%A7%C3%A3o',
    delay: 160,
  },
  {
    Icon: AlertTriangle,
    title: 'Reparos e Corretiva',
    description:
      'Atendimento emergencial 24 horas para reparos e manutenção corretiva. Nossa equipe técnica especializada resolve qualquer problema com agilidade, minimizando o tempo de parada.',
    cta: 'Solicitar Reparo',
    href: 'https://wa.me/5562998152991?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Reparos%20e%20Corretiva',
    delay: 240,
  },
  {
    Icon: Accessibility,
    title: 'Plataformas de Acessibilidade',
    description:
      'Soluções completas em plataformas PNE para garantir acessibilidade em edifícios, residências e estabelecimentos comerciais. Atendemos as normas de acessibilidade vigentes.',
    cta: 'Saber Mais',
    href: 'https://wa.me/5562998152991?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Plataformas%20de%20Acessibilidade',
    delay: 320,
  },
  {
    Icon: Settings,
    title: 'Escadas e Esteiras Rolantes',
    description:
      'Manutenção especializada em escadas e esteiras rolantes para shoppings, supermercados e ambientes de grande circulação. Equipe treinada pelos fabricantes.',
    cta: 'Solicitar Serviço',
    href: 'https://wa.me/5562998152991?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Escadas%20e%20Esteiras%20Rolantes',
    delay: 400,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(219,38,27)] text-sm font-bold tracking-widest uppercase">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(42,30,75)] mt-3 mb-5">
            Soluções Completas em Elevadores
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Atendemos desde a venda e instalação até a manutenção e modernização de elevadores e
            escadas/esteiras rolantes, com equipe técnica altamente qualificada
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ Icon, title, description, cta, href, delay }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-100 translate-y-0"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgb(42,30,75)]/10 group-hover:bg-[rgb(219,38,27)] rounded-2xl mb-6 transition-colors duration-300">
                <Icon
                  width={26}
                  height={26}
                  className="text-[rgb(42,30,75)] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[rgb(42,30,75)] mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">{description}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[rgb(219,38,27)] font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                {cta}{' '}
                <ChevronRight width={16} height={16} className="lucide lucide-chevron-right " />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
