import {
  Home,
  Building2,
  Layers,
  Paintbrush,
  Palette,
  Droplets,
  Shield,
  ShoppingBag,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from './icons';

interface ServiceCard {
  Icon: LucideIcon;
  lucideClass: string;
  title: string;
  description: string;
  color: string;
}

const paintingServices: ServiceCard[] = [
  {
    Icon: Home,
    lucideClass: 'lucide lucide-home',
    title: 'Pintura Residencial',
    description:
      'Transformamos sua casa com acabamento impecável, usando tintas de alta qualidade para interiores e exteriores.',
    color: 'rgb(164, 209, 58)',
  },
  {
    Icon: Building2,
    lucideClass: 'lucide lucide-building2',
    title: 'Pintura Comercial',
    description:
      'Soluções profissionais para empresas, lojas e espaços comerciais, com agilidade e mínimo impacto na rotina.',
    color: 'rgb(124, 205, 223)',
  },
  {
    Icon: Layers,
    lucideClass: 'lucide lucide-layers',
    title: 'Revestimentos Texturados',
    description:
      'Texturas e revestimentos decorativos que agregam valor estético e proteção durável às superfícies.',
    color: 'rgb(252, 224, 15)',
  },
  {
    Icon: Paintbrush,
    lucideClass: 'lucide lucide-paintbrush',
    title: 'Pintura Industrial',
    description:
      'Aplicação especializada em ambientes industriais com tintas anticorrosivas e de alto desempenho.',
    color: 'rgb(217, 164, 0)',
  },
];

const storeServices: ServiceCard[] = [
  {
    Icon: Palette,
    lucideClass: 'lucide lucide-palette',
    title: 'Tintas Acrílicas',
    description:
      'Grande variedade de cores e acabamentos. Lavável, durável e de fácil aplicação para toda a família.',
    color: 'rgb(164, 209, 58)',
  },
  {
    Icon: Droplets,
    lucideClass: 'lucide lucide-droplets',
    title: 'Esmalte Sintético',
    description:
      'Para madeiras, metais e superfícies que exigem resistência superior e brilho prolongado.',
    color: 'rgb(124, 205, 223)',
  },
  {
    Icon: Shield,
    lucideClass: 'lucide lucide-shield',
    title: 'Impermeabilizantes',
    description:
      'Proteção eficiente contra umidade e infiltrações para lajes, telhados e fachadas.',
    color: 'rgb(244, 60, 42)',
  },
  {
    Icon: ShoppingBag,
    lucideClass: 'lucide lucide-shopping-bag',
    title: 'Acessórios e Ferramentas',
    description:
      'Rolos, pincéis, fitas, massas e tudo o que você precisa para um serviço de pintura perfeito.',
    color: 'rgb(217, 164, 0)',
  },
];

function ServiceCards({ cards }: { cards: ServiceCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 opacity-100 translate-y-0"
          style={{ transition: 'opacity 0.6s, transform 0.6s, box-shadow 0.3s' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <card.Icon
              className={card.lucideClass}
              width={22}
              height={22}
              style={{ color: card.color }}
            />
          </div>
          <h3 className="text-base font-bold mb-2" style={{ color: 'rgb(2, 2, 2)' }}>
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgb(63, 63, 63)' }}>
            {card.description}
          </p>
          <div
            className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
            style={{ backgroundColor: card.color }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(253, 253, 253)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 text-brand-dark"
            style={{ backgroundColor: 'rgb(164, 209, 58)' }}
          >
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(2, 2, 2)' }}>
            Tudo em <span style={{ color: 'rgb(164, 209, 58)' }}>Material</span> e{' '}
            <span style={{ color: 'rgb(124, 205, 223)' }}>Mão de Obra</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgb(63, 63, 63)' }}>
            Da venda de tintas à execução do serviço, somos seu parceiro completo para projetos de
            pintura residencial, comercial e industrial.
          </p>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to right, rgb(164, 209, 58), transparent)' }}
            ></div>
            <h3 className="text-lg font-bold whitespace-nowrap px-3" style={{ color: 'rgb(2, 2, 2)' }}>
              Serviços de Pintura
            </h3>
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to left, rgb(164, 209, 58), transparent)' }}
            ></div>
          </div>
          <ServiceCards cards={paintingServices} />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to right, rgb(124, 205, 223), transparent)' }}
            ></div>
            <h3 className="text-lg font-bold whitespace-nowrap px-3" style={{ color: 'rgb(2, 2, 2)' }}>
              Loja de Tintas
            </h3>
            <div
              className="h-px flex-1"
              style={{ background: 'linear-gradient(to left, rgb(124, 205, 223), transparent)' }}
            ></div>
          </div>
          <ServiceCards cards={storeServices} />
        </div>
        <div className="mt-16 text-center">
          <p className="text-base mb-6 font-medium" style={{ color: 'rgb(63, 63, 63)' }}>
            Precisa de uma solução personalizada? Fale com nossos especialistas.
          </p>
          <a
            href="http://wa.me/5566996839888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'rgb(164, 209, 58)',
              boxShadow: 'rgba(164, 209, 58, 0.3) 0px 4px 20px',
            }}
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
