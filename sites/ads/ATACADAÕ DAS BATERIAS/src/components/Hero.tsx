import { ArrowRight, Clock, Award, Shield } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const HERO_BG =
  'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Fhero-background-paralax.webp';

const stats = [
  { Icon: Clock, iconClass: 'lucide-clock', title: '24 Horas', subtitle: 'Atendimento disponível' },
  { Icon: Award, iconClass: 'lucide-award', title: '40+ Anos', subtitle: 'De experiência' },
  { Icon: Shield, iconClass: 'lucide-shield', title: 'Garantia', subtitle: 'Em todos produtos' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block bg-[rgb(251,35,51)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Mais de 40 anos de experiência
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Atacadão das Baterias em <span className="text-[rgb(251,35,51)]">Ribeirão Preto</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
              Baterias com qualidade e assistência técnica especializada. Atendimento 24 horas para
              garantir que você nunca fique na mão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(251,35,51)] text-white px-8 py-4 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 gap-2"
              >
                Solicitar Orçamento
                <ArrowRight size={20} className="lucide lucide-arrow-right " />
              </a>
              <a
                href="tel:1636187557"
                className="inline-flex items-center justify-center bg-white text-[rgb(41,97,169)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Ligar Agora
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <div className="bg-[rgb(251,35,51)] p-3 rounded-lg">
                    <s.Icon size={24} className={`lucide ${s.iconClass} text-white`} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{s.title}</div>
                    <div className="text-gray-300 text-sm">{s.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
