import type { LucideIcon } from 'lucide-react';
import { Shield, Clock, Truck, Wrench, ThumbsUp, MapPin } from 'lucide-react';

interface Diferencial {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  delay: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Qualidade Garantida',
    desc: 'Todas as peças são produzidas com concreto de alta resistência, seguindo padrões rigorosos de qualidade para longa durabilidade.',
    delay: 'animate-on-scroll-delay-1',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: '30 Anos de Tradição',
    desc: 'Mais de três décadas atendendo clientes com excelência. Nossa experiência garante a solução certa para cada necessidade.',
    delay: 'animate-on-scroll-delay-2',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck',
    title: 'Pronta Entrega',
    desc: 'Estoque amplo e diversificado para atender suas demandas com rapidez. Entregamos em Primavera do Leste e região.',
    delay: 'animate-on-scroll-delay-3',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Atendimento Técnico',
    desc: 'Nossa equipe especializada orienta você na escolha dos produtos ideais para sua obra, fossa, drenagem ou cercamento.',
    delay: 'animate-on-scroll-delay-1',
  },
  {
    icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up',
    title: 'Preços Competitivos',
    desc: 'Trabalhamos com preços justos e competitivos, sem abrir mão da qualidade que é nossa marca há décadas.',
    delay: 'animate-on-scroll-delay-2',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    title: 'Referência Regional',
    desc: 'Reconhecidos como referência em pré-moldados no Mato Grosso, atendemos toda a cidade e municípios vizinhos.',
    delay: 'animate-on-scroll-delay-3',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{
              borderColor: 'rgb(120, 53, 35)',
              color: 'rgb(120, 53, 35)',
              backgroundColor: 'rgba(120, 53, 35, 0.06)',
            }}
          >
            Por que nos escolher
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-5">
            Nossos Diferenciais
          </h2>
          <div className="animate-on-scroll section-divider mx-auto mb-5"></div>
          <p className="animate-on-scroll text-brand-gray2 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Escolher a Tibola é escolher décadas de experiência, confiança e produtos que duram. Veja
            o que nos diferencia da concorrência.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {diferenciais.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`animate-on-scroll ${d.delay} group flex gap-5 p-6 rounded-2xl border border-brand-light hover:border-transparent hover:shadow-xl transition-all duration-300`}
                style={{ ['--tw-shadow-color' as string]: 'rgba(120, 53, 35, 0.1)' }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(120, 53, 35, 0.1)' }}
                >
                  <Icon
                    width={22}
                    height={22}
                    className={d.iconClass}
                    style={{ color: 'rgb(120, 53, 35)' }}
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-2">{d.title}</h3>
                  <p className="text-sm text-brand-gray1 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="animate-on-scroll mt-16 rounded-3xl overflow-hidden relative">
          <div
            className="py-12 px-8 sm:px-12 text-center relative z-10"
            style={{ backgroundColor: 'rgb(120, 53, 35)' }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 11px)',
              }}
            ></div>
            <h3 className="relative text-2xl sm:text-3xl font-black text-white mb-3">
              Precisa de um orçamento rápido?
            </h3>
            <p className="relative text-white/80 text-base mb-8 max-w-xl mx-auto">
              Entre em contato agora pelo WhatsApp e receba uma proposta personalizada para o seu
              projeto. Atendimento de segunda a sábado.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/5566996428111?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20pré-moldados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-white hover:bg-brand-light transition-all duration-300 active:scale-95"
                style={{ color: 'rgb(120, 53, 35)' }}
              >
                Chamar no WhatsApp
              </a>
              <a
                href="tel:+5566996428111"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                (66) 9 9642-8111
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
