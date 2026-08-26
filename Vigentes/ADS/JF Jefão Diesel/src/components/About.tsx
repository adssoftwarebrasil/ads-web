import { Award, ShieldCheck, Users, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { StarIcon } from './icons';
import { scrollToSection } from '../lib/scroll';

const WHATSAPP_URL = 'https://wa.me/556696045793?text=Vim%20pelo%20site';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Award,
    title: '21 Anos de Expertise',
    description: 'Jeferson lidera a equipe com mais de duas décadas de atuação exclusiva em sistemas diesel.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Peças originais e equipamentos de teste profissionais. Cada serviço entregue com precisão técnica.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais treinados e certificados, prontos para resolver qualquer problema no seu veículo diesel.',
  },
  {
    icon: Clock,
    title: 'Prazo Cumprido',
    description: 'Transparência desde o diagnóstico. Você sabe o que vai ser feito, quanto vai custar e quando vai ficar pronto.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-zinc-950 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[600px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/jf%20jefao%20diesel/img/logo-jefao-diesel-parede-cinza-amarelo_3024x4032.webp"
                alt="Jefão Diesel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[rgb(255,198,45)] rounded-2xl p-5 shadow-2xl max-w-[180px]">
              <div className="text-4xl font-black text-black leading-none">21+</div>
              <div className="text-black/70 text-xs font-semibold mt-1 leading-tight">Anos de Experiência em Diesel</div>
            </div>
            <div className="absolute top-6 -left-4 sm:-left-6 bg-black border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={14} height={14} />
                ))}
              </div>
              <div className="text-white text-xs font-bold">5.0 no Google</div>
              <div className="text-white/40 text-xs">Avaliação média</div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[rgb(255,198,45)] text-xs font-bold uppercase tracking-widest mb-3">Quem somos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Tradição e Técnica<br />
              <span className="text-[rgb(255,198,45)]">a Serviço do Diesel</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              A JF Diesel nasceu com um propósito claro: oferecer soluções de qualidade, confiança e excelência no atendimento. Com sede em Sorriso/MT, atendemos clientes de todo o Mato Grosso — de Cuiabá a Sinop, de Lucas do Rio Verde a Colíder.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              O proprietário Jeferson traz mais de <strong className="text-white">21 anos de experiência</strong> em sistemas diesel, liderando uma equipe de profissionais capacitados que combinam conhecimento técnico com atendimento humano e transparente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgb(255,198,45)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon width={18} height={18} className="text-[rgb(255,198,45)]" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold mb-0.5">{feature.title}</div>
                      <div className="text-white/45 text-xs leading-relaxed">{feature.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(255,198,45)] text-black font-black px-6 py-3.5 rounded-full text-sm hover:bg-yellow-300 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Falar com Especialista
              </a>
              <a
                href="#servicos"
                onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-6 py-3.5 rounded-full text-sm hover:border-[rgb(255,198,45)] hover:text-[rgb(255,198,45)] transition-all duration-200"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
