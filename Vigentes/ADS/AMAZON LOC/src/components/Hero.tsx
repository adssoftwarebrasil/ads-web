import { MessageCircle, FileCheck, Truck, Shield } from 'lucide-react';
import { scrollToId, waLink } from '../lib/site';

const features = [
  {
    Icon: FileCheck,
    iconClass: 'lucide lucide-file-check',
    title: 'Cadastro Simplificado',
    desc: 'Processo sem burocracia para você começar a trabalhar rápido.',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck',
    title: 'Entrega Ágil',
    desc: 'Levamos o equipamento até sua obra em tempo recorde.',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Manutenção Inclusa',
    desc: 'Suporte técnico completo e troca imediata se necessário.',
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100dvh] flex flex-col justify-start md:justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Fhero.webp"
          alt="Equipamentos de construção civil"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-12 md:py-20 text-center flex flex-col items-center h-full md:justify-center">
        <span className="
          inline-flex items-center justify-center text-center
          py-1.5 px-4 mb-6 rounded-full
          bg-[rgb(13,133,77)]/20 border border-[rgb(13,133,77)] backdrop-blur-sm
          text-white/90 font-medium
          text-xs sm:text-sm
          whitespace-normal max-w-[90%]
        ">
          Amazon Loc - Soluções em Equipamentos
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-5xl">
          Locação de Equipamentos para <br className="hidden md:block" />
          Construção Civil <span className="text-[rgb(34,197,94)]">Sem Burocracia</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Equipamentos de qualidade com entrega rápida, manutenção garantida e atendimento
          personalizado em <strong>Cuiabá e Várzea Grande</strong>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto mb-12 md:mb-16">
          <a
            href={waLink('Olá! Gostaria de solicitar um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-3 bg-[rgb(13,133,77)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(11,110,64)] transition-all duration-300 shadow-lg hover:shadow-[rgb(13,133,77)]/30 text-lg font-bold w-full sm:w-auto"
          >
            <MessageCircle className="lucide lucide-message-circle w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            <span>Solicitar Orçamento</span>
          </a>
          <button
            onClick={() => scrollToId('equipamentos')}
            className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-[rgb(13,133,77)] transition-all duration-300 text-lg font-semibold w-full sm:w-auto"
          >
            Ver Equipamentos
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 group text-left sm:text-center"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-0 sm:mx-auto group-hover:scale-110 transition-transform duration-300 border border-white/5">
                <f.Icon className={`${f.iconClass} w-10 h-10 text-[rgb(34,197,94)]`} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
