import type { LucideIcon } from 'lucide-react';
import { Wrench, Square, Settings, CircleDot, Lightbulb, Eye, ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

const SERVICE_IMG = 'https://storage.lucasmendes.dev/site-sp/lojao%20do%20parabrisa/img/instalando-parabrisa-novo.webp';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: 'Instalação de Parabrisas',
    description:
      'Instalação profissional de parabrisas originais e importados com garantia de qualidade e acabamento perfeito.',
    href: 'https://wa.me/557188114690?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20a%20Instala%C3%A7%C3%A3o%20de%20Parabrisas.',
  },
  {
    icon: Square,
    title: 'Vidros Automotivos',
    description:
      'Vidros laterais, traseiros e portas para todos os modelos de veículos. Instalação rápida e segura.',
    href: 'https://wa.me/557188114690?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Vidros%20Automotivos%20(laterais%2Ftraseiros).%20Pode%20me%20passar%20um%20or%C3%A7amento%3F',
  },
  {
    icon: Settings,
    title: 'Reparos Especializados',
    description:
      'Conserto de trincas e pequenos danos em vidros automotivos, evitando a troca completa.',
    href: 'https://wa.me/557188114690?text=Ol%C3%A1!%20Preciso%20de%20um%20Reparo%20Especializado%20em%20uma%20trinca%2Fdano%20no%20vidro.',
  },
  {
    icon: CircleDot,
    title: 'Borrachas e Vedações',
    description:
      'Borrachas de vedação de qualidade superior para garantir isolamento acústico e proteção contra vazamentos.',
    href: 'https://wa.me/557188114690?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20sobre%20Borrachas%20e%20Veda%C3%A7%C3%B5es%20para%20meu%20ve%C3%ADculo.',
  },
  {
    icon: Lightbulb,
    title: 'Faróis e Lanternas',
    description:
      'Venda e instalação de faróis, lanternas e acessórios de iluminação para maior segurança.',
    href: 'https://wa.me/557188114690?text=Ol%C3%A1!%20Estou%20procurando%20Far%C3%B3is%20ou%20Lanternas%20para%20o%20meu%20carro.',
  },
  {
    icon: Eye,
    title: 'Retrovisores',
    description:
      'Retrovisores externos e internos para todos os modelos, com instalação especializada.',
    href: 'https://wa.me/557188114690?text=Ol%C3%A1!%20Gostaria%20de%20saber%20pre%C3%A7os%20e%20modelos%20de%20Retrovisores.',
  },
];

export default function Services() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[rgb(1,160,199)] font-semibold text-sm tracking-widest uppercase mb-3">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções Completas para Seu Veículo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com carros, caminhões e ônibus, oferecendo qualidade e garantia em cada serviço
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(1,160,199)] to-[rgb(1,140,179)] rounded-xl flex items-center justify-center mb-6">
                  <Icon width={32} height={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[rgb(1,160,199)] font-semibold text-sm hover:underline transition-all group w-fit"
                >
                  Saiba Mais
                  <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
        <div
          className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-700 delay-600 ${
            shown ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={SERVICE_IMG}
            alt="Instalação de parabrisa"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Instalação Profissional com Garantia
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa equipe especializada realiza cada instalação com precisão e cuidado, utilizando apenas produtos de qualidade certificada. Todos os serviços incluem garantia para sua total tranquilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
