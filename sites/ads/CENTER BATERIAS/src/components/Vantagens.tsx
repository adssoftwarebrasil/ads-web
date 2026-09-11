import { Truck, AlertCircle, Award, Headset, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

interface Vantagem {
  Icon: LucideIcon;
  title: string;
  description?: string;
}

const vantagens: Vantagem[] = [
  { Icon: Truck, title: 'Entrega Rápida e Segura' },
  { Icon: AlertCircle, title: 'Suporte em Emergências' },
  {
    Icon: Award,
    title: 'Experiência Reconhecida',
    description: 'Mais de 11 anos oferecendo serviços de qualidade.',
  },
  {
    Icon: Headset,
    title: 'Atendimento Virtual e Presencial',
    description: 'Estamos disponíveis para atender você onde estiver.',
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 fade-in">
            Vantagens de Escolher a Center Baterias
          </h2>
          <p className="text-lg md:text-xl text-[#666] max-w-3xl mx-auto fade-in">
            Conheça os benefícios de contar com nossa expertise e produtos de
            qualidade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {vantagens.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F8F8F8] rounded-xl p-8 md:p-10 text-center hover:bg-white hover:shadow-lg transition-all duration-300 fade-in"
            >
              <div className="flex justify-center mb-6">
                <Icon className="lucide w-16 h-16 text-[rgb(250,204,21)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                {title}
              </h3>
              {description && (
                <p className="text-base text-[#666] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-3 bg-[rgb(250,204,21)] text-black px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
            Enviar WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
