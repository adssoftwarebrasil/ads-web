import { Headset, DollarSign, Award, Grid3x3, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    Icon: Headset,
    iconClass: 'lucide lucide-headset w-6 h-6 md:w-7 md:h-7 text-white',
    title: 'Atendimento Especializado',
    text: 'Consultoria personalizada para escolher a lente e armação ideal para seu rosto e grau.',
  },
  {
    Icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign w-6 h-6 md:w-7 md:h-7 text-white',
    title: 'Preços Competitivos',
    text: 'As melhores condições de Goiânia com opções de parcelamento que cabem no seu bolso.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-6 h-6 md:w-7 md:h-7 text-white',
    title: 'Qualidade Superior',
    text: 'Trabalhamos com laboratórios de ponta e as marcas mais renomadas do mundo.',
  },
  {
    Icon: Grid3x3,
    iconClass: 'lucide lucide-grid3x3 w-6 h-6 md:w-7 md:h-7 text-white',
    title: 'Variedade de Opções',
    text: 'Um catálogo completo de armações de grau e solares, do clássico ao moderno.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm block mb-3">
            Por que nós?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Vantagens de Escolher a <span className="text-red-600">Ótica Moderna</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Mais que óculos, entregamos saúde visual com tecnologia e o estilo que você merece.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16">
          {advantages.map((adv) => {
            const { Icon } = adv;
            return (
              <div
                key={adv.title}
                className="group p-6 md:p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  <div className="bg-red-600 p-4 rounded-2xl shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={adv.iconClass} width={24} height={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{adv.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative rounded-[2rem] overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>
          <img
            src="https://storage.lucasmendes.dev/site-sp/oticamodernago%2FVantagens.webp"
            alt="Nossa Loja"
            className="w-full h-[450px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <div className="max-w-2xl space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Sua visão merece <br className="hidden md:block" /> o melhor cuidado.
              </h3>
              <p className="text-gray-200 text-base md:text-xl font-light">
                Venha nos visitar em Goiânia e experimente o conforto de enxergar bem com estilo.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/556293756868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all hover:scale-105 shadow-xl shadow-red-600/30 active:scale-95"
                >
                  <MessageCircle className="lucide lucide-message-circle w-5 h-5" width={24} height={24} />
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
