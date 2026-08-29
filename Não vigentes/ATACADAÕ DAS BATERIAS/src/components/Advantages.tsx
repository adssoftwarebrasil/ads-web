import { Clock, Package, Zap, Users, Shield, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Advantage {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    Icon: Clock,
    iconClass: 'lucide-clock',
    title: 'Atendimento 24 horas',
    description: 'Estamos disponíveis a qualquer hora do dia ou da noite para atender você quando precisar.',
  },
  {
    Icon: Package,
    iconClass: 'lucide-package',
    title: 'Variedade de Marcas',
    description: 'Trabalhamos com as melhores marcas do mercado, incluindo Moura e outras referências em qualidade.',
  },
  {
    Icon: Zap,
    iconClass: 'lucide-zap',
    title: 'Baterias de Alta Performance',
    description: 'Contamos com baterias que garantem desempenho duradouro e confiável para seu veículo.',
  },
  {
    Icon: Users,
    iconClass: 'lucide-users',
    title: 'Profissionais Qualificados',
    description: 'Equipe treinada e pronta para ajudar na escolha ideal e prestar todo suporte necessário.',
  },
  {
    Icon: Shield,
    iconClass: 'lucide-shield',
    title: 'Garantia Assegurada',
    description: 'Todos os nossos produtos contam com garantia completa, proporcionando segurança na sua compra.',
  },
  {
    Icon: Star,
    iconClass: 'lucide-star',
    title: 'Entrega Rápida',
    description: 'Serviço de entrega ágil na região de Ribeirão Preto e arredores para sua comodidade.',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(251,35,51)] font-semibold text-sm uppercase tracking-wider">
            Vantagens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Por que escolher o Atacadão das Baterias?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optar pelo Atacadão das Baterias é escolher qualidade, confiabilidade e um atendimento
            diferenciado.
          </p>
          <div className="w-24 h-1 bg-[rgb(251,35,51)] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[rgb(251,35,51)] to-[rgb(231,15,31)] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <adv.Icon size={28} className={`lucide ${adv.iconClass} text-white`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(41,97,169)] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{adv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(41,97,169)] to-[rgb(31,77,149)] rounded-3xl p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para ter a melhor experiência em baterias?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e descubra por que somos a escolha número 1 em Ribeirão Preto!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[rgb(251,35,51)] text-white px-10 py-5 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
