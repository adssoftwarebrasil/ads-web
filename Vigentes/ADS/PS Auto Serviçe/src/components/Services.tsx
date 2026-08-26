import type { LucideIcon } from 'lucide-react';
import { Package, Wrench, Zap, Settings, Disc, Paintbrush, Cog, Wind, Gauge } from 'lucide-react';
import { WHATSAPP, WhatsAppIcon, ArrowIcon, waLink } from './icons';

type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconClass: string;
  highlight?: boolean;
};

const SERVICES: Service[] = [
  { title: 'Peças para Caminhão', desc: 'Estoque completo de peças originais e de qualidade para todas as marcas e modelos de caminhões.', icon: Package, iconClass: 'lucide-package' },
  { title: 'Mecânica Geral', desc: 'Revisões completas, manutenção preventiva e corretiva com diagnóstico preciso e ágil.', icon: Wrench, iconClass: 'lucide-wrench' },
  { title: 'Elétrica e Eletrônica', desc: 'Diagnóstico e reparo de sistemas elétricos e eletrônicos com equipamentos de última geração.', icon: Zap, iconClass: 'lucide-zap' },
  { title: 'Injeção Eletrônica', desc: 'Calibração, limpeza e reparo de sistemas de injeção eletrônica com scanners especializados.', icon: Settings, iconClass: 'lucide-settings', highlight: true },
  { title: 'Freio e Suspensão', desc: 'Revisão completa do sistema de freios e suspensão, garantindo segurança máxima na estrada.', icon: Disc, iconClass: 'lucide-disc' },
  { title: 'Funilaria e Pintura', desc: 'Reparos de lataria, funilaria e pintura com acabamento profissional e cor exata.', icon: Paintbrush, iconClass: 'lucide-paintbrush' },
  { title: 'Motor e Câmbio', desc: 'Retífica, reforma e troca de motores e câmbios com garantia de serviço e peças.', icon: Cog, iconClass: 'lucide-cog' },
  { title: 'Serviço Pneumático', desc: 'Manutenção completa dos sistemas pneumáticos: freios, suspensão a ar e válvulas.', icon: Wind, iconClass: 'lucide-wind' },
  { title: 'Sistema ARLA 32', desc: 'Diagnóstico e reparo completo do sistema de pós-tratamento ARLA 32 / SCR para emissões Euro 5/6.', icon: Gauge, iconClass: 'lucide-gauge' },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-brand-dark py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border border-brand-red/30">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Soluções Completas para <span className="text-brand-red">Seu Caminhão</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Do diagnóstico à entrega, oferecemos tudo que seu caminhão precisa em um só lugar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`animate-on-scroll group relative rounded-2xl p-7 border transition-all duration-400 card-hover cursor-default ${
                  s.highlight
                    ? 'bg-gradient-to-br from-brand-red/20 to-brand-darkred/10 border-brand-red/40'
                    : 'bg-white/5 border-white/10 hover:border-brand-blue/50 hover:bg-white/8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {s.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full">Destaque</span>
                  </div>
                )}
                <div
                  className={`inline-flex p-3 rounded-xl mb-5 transition-all duration-300 ${
                    s.highlight ? 'bg-brand-red/20 group-hover:bg-brand-red/30' : 'bg-brand-blue/20 group-hover:bg-brand-blue/30'
                  }`}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className={`lucide ${s.iconClass} ${s.highlight ? 'text-brand-red' : 'text-brand-blue'}`}
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <a
                  href={waLink(`Olá! Gostaria de um orçamento para: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand-blue hover:text-white transition-colors group/link"
                >
                  Solicitar Orçamento
                  <ArrowIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href={`${WHATSAPP}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20PS%20Auto%20Service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-darkred text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}
