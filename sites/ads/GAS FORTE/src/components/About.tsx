import { Award, Star, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Award, iconClass: 'lucide lucide-award', value: '+20', label: 'Anos de Tradição' },
  { Icon: Star, iconClass: 'lucide lucide-star', value: '5.0', label: 'Nota no Google' },
  { Icon: Award, iconClass: 'lucide lucide-award', value: '100%', label: 'Supergasbras' },
  { Icon: MapPin, iconClass: 'lucide lucide-map-pin', value: 'GYN', label: 'e Região' },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
          <div className="relative flex items-center gap-4 sm:gap-6">
            <div className="w-3/5 relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/gas%20forte/img/anuncio-supergasbras-homem-e-botijoes-gas_509x510.webp"
                alt="Gás Forte - Equipe e botijões"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-brand-orange rounded-2xl p-4 sm:p-5 shadow-2xl shadow-brand-orange/40 hidden sm:block z-20">
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-white">+20</span>
                  <span className="block text-[10px] sm:text-xs font-semibold text-white/80 mt-1">
                    Anos servindo
                    <br />
                    Goiânia
                  </span>
                </div>
              </div>
            </div>
            <div className="w-2/5 relative -mt-16 sm:-mt-24">
              <img
                src="https://storage.lucasmendes.dev/site-sp/gas%20forte/publi/feliz-dia-da-mulher-gas-forte_720x1280.webp"
                alt="Feliz Dia da Mulher - Gás Forte"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/5 transition-transform duration-500 hover:-translate-y-2"
              />
              <div className="absolute -top-6 -right-2 sm:-right-6 bg-brand-navy border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl hidden sm:flex items-center gap-2 sm:gap-3 z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users text-brand-orange shrink-0"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white whitespace-nowrap">Mesmo dono</span>
                  <span className="block text-[10px] sm:text-xs text-brand-light/50 whitespace-nowrap">
                    desde o início
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Nossa História</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6">
              Tradição, confiança e <span className="text-gradient">compromisso com você</span>
            </h2>
            <div className="space-y-4 text-brand-light/65 leading-relaxed text-[15px]">
              <p>
                A <strong className="text-brand-amber font-semibold">Gás Forte</strong> é uma distribuidora de gás GLP
                localizada no bairro Tropical Verde, em Goiânia, Goiás. Com mais de 20 anos de história — sempre com o
                mesmo dono — somos referência em confiança e solidez no setor.
              </p>
              <p>
                Especializados no fornecimento de gás butano e GLP, nos destacamos pela entrega ágil e pelo atendimento
                humanizado, atendendo tanto residências quanto estabelecimentos comerciais como restaurantes,
                lanchonetes e padarias.
              </p>
              <p>
                Trabalhamos exclusivamente com botijões{' '}
                <strong className="text-brand-amber font-semibold">Supergasbras</strong>, seguindo todas as normas da
                ANP para garantir a sua segurança. Porque para a Gás Forte, confiança não é só uma palavra — é a nossa
                essência.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-brand-navy border border-white/5 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <stat.Icon width={18} height={18} className={`${stat.iconClass} text-brand-orange`} />
                  </div>
                  <div>
                    <span className="block text-white font-black text-lg leading-none">{stat.value}</span>
                    <span className="block text-brand-light/50 text-xs mt-1">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
