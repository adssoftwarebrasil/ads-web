import { Award, Users, Zap, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = { text: string; Icon: LucideIcon; iconClass: string };

const features: Feature[] = [
  {
    text: 'Venda e assistência técnica autorizada MWM',
    Icon: Award,
    iconClass: 'lucide lucide-award text-brand-red',
  },
  {
    text: 'Equipe com mais de 20 anos de experiência',
    Icon: Users,
    iconClass: 'lucide lucide-users text-brand-red',
  },
  {
    text: 'Geradores revisados e testados antes da entrega',
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-brand-red',
  },
  {
    text: 'Atendimento a normas NBR 14039, NBR 5410 e NR10',
    Icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-brand-red',
  },
  {
    text: 'Operação manual e automática disponível',
    Icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-brand-red',
  },
  {
    text: 'Atendimento em todo o estado de Santa Catarina',
    Icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-brand-red',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/sobre-equipe-sulltec.webp"
                alt="Equipe Sulltec Geradores com frota de geradores"
                className="w-full h-80 md:h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red text-white rounded-2xl p-6 shadow-2xl hidden md:block">
              <div className="text-4xl font-extrabold leading-none">19</div>
              <div className="text-sm font-medium text-white/80 mt-1">
                anos de
                <br />
                experiência
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-brand-blue text-white rounded-2xl p-5 shadow-2xl hidden md:block">
              <div className="text-3xl font-extrabold leading-none">MWM</div>
              <div className="text-xs font-medium text-white/70 mt-1">
                Autorizada
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Nossa História
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue mb-6 leading-tight">
              19 Anos Gerando{' '}
              <span className="text-brand-red">Energia e Confiança</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Fundada em 10/07/2007, a Sulltec Geradores nasceu para atender a
              demanda crescente do mercado de geradores em Santa Catarina. Com
              sede em Palhoça, somos uma empresa autorizada MWM e referência em
              manutenção de grupos geradores.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Possuímos uma frota própria de geradores para locação, com
              potências que variam de 8 kVA a 750 kVA — todos revisados e
              testados por nossa equipe técnica, garantindo máxima
              confiabilidade para sua empresa, evento ou obra.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center mt-0.5">
                    <feature.Icon
                      width={14}
                      height={14}
                      className={feature.iconClass}
                    />
                  </div>
                  <span className="text-gray-600 text-sm leading-snug">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5548991372058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
