import { MapPin, UtensilsCrossed, Instagram as InstagramIcon, Clock, Award, LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/scroll';
import { useIfoodPicker } from '../lib/ifood';

interface Badge {
  Icon: LucideIcon;
  iconClass: string;
  label: string;
  delay: string;
}

const badges: Badge[] = [
  { Icon: MapPin, iconClass: 'lucide lucide-map-pin', label: 'Localização Privilegiada', delay: '300ms' },
  { Icon: Clock, iconClass: 'lucide lucide-clock', label: 'Aberto Todos os Dias', delay: '450ms' },
  { Icon: Award, iconClass: 'lucide lucide-award', label: 'Qualidade Garantida', delay: '600ms' },
];

export default function CTA() {
  const abrirIfood = useIfoodPicker();

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_10_473069010_122131967930426027_2147807271604572917_n.jpg")',
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-6">Venha Nos Conhecer!</h2>
          <p className="text-xl md:text-2xl text-[#FFD700] text-shadow-sm mb-12">
            Te esperamos no Setor Bueno ou no Jardim Atlântico para uma experiência única
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToId('localizacao')}
              className="bg-[#F93131] hover:bg-[#C41E3A] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3 shadow-2xl animate-pulse-slow"
            >
              <MapPin className="lucide lucide-map-pin w-7 h-7" />
              VER LOCALIZAÇÃO
            </button>
            <button
              onClick={abrirIfood}
              className="bg-[#EA1D2C] hover:bg-[#D01826] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3 shadow-2xl"
            >
              <UtensilsCrossed className="lucide lucide-utensils-crossed w-7 h-7" />
              PEÇA PELO IFOOD
            </button>
            <a
              href="https://www.instagram.com/latokabueno"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#FFD700] text-[#F93131] px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3 shadow-2xl"
            >
              <InstagramIcon className="lucide lucide-instagram w-7 h-7" />
              SIGA NO INSTAGRAM
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {badges.map(({ Icon, iconClass, label, delay }) => (
              <div
                key={label}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-700 hover:bg-opacity-20 translate-y-0 opacity-100"
                style={{ transitionDelay: delay }}
              >
                <Icon className={`${iconClass} w-12 h-12 text-[#FFD700] mx-auto mb-3`} />
                <p className="text-white font-semibold text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
