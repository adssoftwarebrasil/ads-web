import { Wrench, Gauge, Wind, Zap, Droplets, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const WHATSAPP_URL = 'https://wa.me/556696045793?text=Vim%20pelo%20site';

interface Service {
  icon: LucideIcon;
  image: string;
  tag: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Wrench,
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/maquina-teste-bomba-diesel-sala-mecanica_3024x4032.webp',
    tag: 'Alta Demanda',
    title: 'Bombas Injetoras',
    description: 'Reparo, calibração e substituição de bombas injetoras com equipamentos de última geração. Diagnóstico preciso para todos os modelos.',
  },
  {
    icon: Gauge,
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/common-rail.webp',
    tag: 'Especialidade',
    title: 'Sistema Common Rail',
    description: 'Limpeza, revisão e troca de bicos injetores para restaurar o desempenho e a economia de combustível do seu veículo.',
  },
  {
    icon: Wind,
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/turbina.webp',
    tag: 'Completo',
    title: 'Turbinas',
    description: 'Manutenção preventiva e corretiva de turbinas. Recuperamos a potência e prolongamos a vida útil do seu turbocompressor.',
  },
  {
    icon: Zap,
    image: '/images/remap.png',
    tag: 'Performance',
    title: 'Reprogramação (Remap)',
    description: 'Otimização da central eletrônica para melhorar potência, torque e consumo. Performance real com segurança técnica.',
  },
  {
    icon: Droplets,
    image: 'https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/troca-de-oleo.webp',
    tag: 'Preventivo',
    title: 'Troca de Óleo',
    description: 'Troca de óleo com produtos de qualidade certificada. Mantemos seu motor protegido e funcionando no ponto ideal.',
  },
  {
    icon: Search,
    image: '/images/diagnostico.png',
    tag: 'Tecnologia',
    title: 'Diagnóstico Eletrônico',
    description: 'Scanner profissional para diesel. Identificamos falhas com precisão antes que se tornem problemas maiores e mais custosos.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[rgb(255,198,45)] text-xs font-bold uppercase tracking-widest mb-3">O que fazemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Serviços Especializados<br />
            <span className="text-[rgb(255,198,45)]">em Diesel</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base">
            Do diagnóstico ao reparo completo — atendemos carros, caminhões, máquinas agrícolas e toda frota a diesel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[rgb(255,198,45)]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgb(255,198,45)]/5"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgb(255,198,45)]/10 border border-[rgb(255,198,45)]/20 flex items-center justify-center group-hover:bg-[rgb(255,198,45)]/20 transition-colors">
                      <Icon width={22} height={22} className="text-[rgb(255,198,45)]" />
                    </div>
                    <span className="text-xs font-semibold text-[rgb(255,198,45)] bg-[rgb(255,198,45)]/10 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[rgb(255,198,45)] text-black font-black px-8 py-4 rounded-full text-base hover:bg-yellow-300 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20"
          >
            <WhatsAppIcon width={20} height={20} />
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
}
