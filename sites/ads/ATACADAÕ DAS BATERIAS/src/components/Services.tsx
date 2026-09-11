import { Wrench, TestTube2, Zap, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Wrench,
    iconClass: 'lucide-wrench',
    title: 'Suporte Técnico',
    image:
      'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Fnossos-servi%C3%A7os-suporte-t%C3%A9cnico.webp',
    description:
      'Equipe especializada pronta para diagnosticar e resolver qualquer problema com sua bateria. Atendimento rápido e eficiente para que você volte à estrada o mais rápido possível.',
  },
  {
    Icon: TestTube2,
    iconClass: 'lucide-test-tube2',
    title: 'Testes de Baterias',
    image:
      'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Fnossos-servicos-testes-de-baterias.webp',
    description:
      'Realizamos testes completos e precisos para avaliar o estado da sua bateria. Identificamos problemas antes que eles aconteçam, garantindo sua segurança e tranquilidade.',
  },
  {
    Icon: Zap,
    iconClass: 'lucide-zap',
    title: 'Instalação de Baterias',
    image:
      'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Fnossos-servicos-instala%C3%A7%C3%A3o-de-baterias.webp',
    description:
      'Instalação profissional e segura de baterias para todos os tipos de veículos. Nossa equipe garante que tudo funcione perfeitamente, com rapidez e qualidade.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(251,35,51)] font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Conheça nossos serviços especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No Atacadão das Baterias, oferecemos uma ampla gama de serviços, desde a venda até a
            instalação de baterias, sempre com qualidade e segurança.
          </p>
          <div className="w-24 h-1 bg-[rgb(251,35,51)] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[rgb(251,35,51)] p-3 rounded-lg">
                      <service.Icon size={24} className={`lucide ${service.iconClass} text-white`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[rgb(41,97,169)] font-semibold hover:text-[rgb(251,35,51)] transition-colors group"
                >
                  Saiba Mais
                  <ArrowRight
                    size={18}
                    className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[rgb(251,35,51)] text-white px-10 py-5 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Solicite um Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
