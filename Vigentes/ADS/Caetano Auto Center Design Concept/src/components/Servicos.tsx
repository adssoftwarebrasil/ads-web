import type { LucideIcon } from 'lucide-react';
import {
  Wrench,
  CircleDot,
  Gauge,
  Zap,
  Activity,
  Package,
  Sparkles,
  Wind,
  ArrowRight,
} from 'lucide-react';

type Service = {
  title: string;
  desc: string;
  img: string;
  Icon: LucideIcon;
  iconClass: string;
  color: 'blue' | 'red';
};

const services: Service[] = [
  {
    title: 'Mecânica Completa',
    desc: 'Manutenção preventiva e corretiva, motor, câmbio, embreagem e muito mais.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Fmecanico-motor-carro.webp',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-6 h-6 text-white',
    color: 'blue',
  },
  {
    title: 'Pneus & Rodas',
    desc: 'Venda, instalação e reparos de pneus com equipamentos modernos.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Fpneus-checklist-viagem.webp',
    Icon: CircleDot,
    iconClass: 'lucide lucide-circle-dot w-6 h-6 text-white',
    color: 'red',
  },
  {
    title: 'Suspensão & Freios',
    desc: 'Diagnóstico e reparo completo do sistema de suspensão e frenagem.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Ffreios-revisao-auto.webp',
    Icon: Gauge,
    iconClass: 'lucide lucide-gauge w-6 h-6 text-white',
    color: 'blue',
  },
  {
    title: 'Injeção Eletrônica',
    desc: 'Diagnóstico computadorizado e reparo de sistemas eletrônicos.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Fmecanico-carro-oficina.webp',
    Icon: Zap,
    iconClass: 'lucide lucide-zap w-6 h-6 text-white',
    color: 'red',
  },
  {
    title: 'Alinhamento & Balanceamento',
    desc: 'Serviço de precisão para economia e segurança do seu veículo.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Fcarro-elevador-oficina.webp',
    Icon: Activity,
    iconClass: 'lucide lucide-activity w-6 h-6 text-white',
    color: 'blue',
  },
  {
    title: 'Peças de Qualidade',
    desc: 'Peças originais e com garantia para seu carro.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Fbateria-automotiva-propaganda.webp',
    Icon: Package,
    iconClass: 'lucide lucide-package w-6 h-6 text-white',
    color: 'red',
  },
  {
    title: 'Revisões Completas',
    desc: 'Check-up completo do seu veículo com garantia e qualidade.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Frevisao-freios-carro.webp',
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles w-6 h-6 text-white',
    color: 'blue',
  },
  {
    title: 'Troca de Óleo e Filtros',
    desc: 'Manutenção essencial com produtos de primeira linha.',
    img: 'https://storage.lucasmendes.dev/site-sp/caetano%2Fverificacao-oleo-motor.webp',
    Icon: Wind,
    iconClass: 'lucide lucide-wind w-6 h-6 text-white',
    color: 'red',
  },
];

const styles = {
  blue: {
    overlay:
      'absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent',
    topBar:
      'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600',
    iconBox:
      'absolute top-4 right-4 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300',
    title:
      'text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors',
    more: 'flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
    bottomBar:
      'absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left',
  },
  red: {
    overlay:
      'absolute inset-0 bg-gradient-to-t from-red-900/70 via-red-900/20 to-transparent',
    topBar:
      'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700',
    iconBox:
      'absolute top-4 right-4 w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300',
    title:
      'text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors',
    more: 'flex items-center text-sm font-semibold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
    bottomBar:
      'absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left',
  },
};

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas com equipamentos de última geração
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const st = styles[s.color];
            return (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className={st.overlay}></div>
                  <div className={st.topBar}></div>
                  <div className={st.iconBox}>
                    <s.Icon className={s.iconClass} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={st.title}>{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <div className={st.more}>
                    <span>Saiba mais</span>
                    <ArrowRight className="lucide lucide-arrow-right w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className={st.bottomBar}></div>
              </div>
            );
          })}
        </div>
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Precisa de um serviço específico?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para atender você com agilidade e
              qualidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5562992222332"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 flex items-center justify-center space-x-2"
              >
                <span>FALAR NO WHATSAPP</span>
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
              </a>
              <a
                href="tel:+5562992222332"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                LIGAR AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
