import { Award, Heart, CheckCircle2, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-7 h-7 text-red-600 group-hover:text-white',
    title: 'Experiência Reconhecida',
    text: 'Desde 1966 sendo referência em tradição em Goiânia, unindo técnica e as tendências globais do mercado óptico.',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart w-7 h-7 text-red-600 group-hover:text-white',
    title: 'Consultoria Estética',
    text: 'Não apenas vendemos óculos; ajudamos você a encontrar a armação que harmoniza com seu rosto e estilo pessoal.',
  },
];

const badges = ['Lentes Digitais', 'Ajuste Gratuito', 'Garantia Premium'];

export default function WhyUs() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative w-full lg:w-1/2 group">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-50/50 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-6 w-40 h-40 bg-gray-50 rounded-full -z-10"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/oticamodernago%2FPor%20que%20contratar.webp"
                alt="Consultoria na Ótica Moderna"
                className="w-full h-[450px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-black text-red-600">50+</div>
                  <div className="text-sm font-bold text-gray-800 leading-tight uppercase tracking-tighter">
                    Anos de <br /> Excelência
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs">
                <span className="w-8 h-[2px] bg-red-600"></span>Diferenciais únicos
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
                Por que a Ótica Moderna é a sua <span className="text-red-600">melhor escolha?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Combinamos precisão laboratorial com um atendimento humanizado para garantir que sua experiência visual seja perfeita.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((f) => {
                const { Icon } = f;
                return (
                  <div
                    key={f.title}
                    className="group flex gap-5 p-4 -ml-4 rounded-3xl transition-colors hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <Icon className={f.iconClass} width={24} height={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {badges.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="lucide lucide-check-circle2 w-4 h-4 text-red-600" width={24} height={24} />
                    {b}
                  </div>
                ))}
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/556293756868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-red-700 transition-all hover:scale-105 shadow-xl shadow-red-600/20"
                >
                  <MessageCircle className="lucide lucide-message-circle w-5 h-5" width={24} height={24} />
                  Falar com Consultor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
