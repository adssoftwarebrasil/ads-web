import { Clock, Award, Heart, Users, DollarSign, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MiniStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const miniStats: MiniStat[] = [
  { icon: Clock, value: '45+', label: 'Anos de Experiência' },
  { icon: Award, value: '50+', label: 'Marcas Renomadas' },
  { icon: Heart, value: '100%', label: 'Satisfação' },
];

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Users, title: 'Empresa Familiar', desc: 'Tradição e atendimento personalizado há mais de 4 décadas' },
  { icon: DollarSign, title: 'Preços Justos', desc: 'Melhor custo-benefício da região com qualidade garantida' },
  { icon: Star, title: 'Qualidade Garantida', desc: 'Produtos de marcas renomadas e confiáveis' },
];

export default function About() {
  return (
    <section id="about" className="relative w-screen overflow-hidden" style={{ marginLeft: 'calc(50% - 50vw)' }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/daviesportes%2Fimg%2Fnossa-historia.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#363435]/95 via-[#2C2C2C]/90 to-[#363435]/95"></div>
      </div>
      <div className="w-full px-4 py-20 md:py-32 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-[#FDF341] text-sm md:text-base font-bold uppercase tracking-wider px-4 py-2 bg-[#FDF341]/10 rounded-full border border-[#FDF341]/30">
                Nossa História
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#FDF341] mb-6 leading-tight">Mais de 45 Anos de Tradição</h2>
            <div className="w-24 h-1 bg-[#FDF341] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6 font-light">
              Somos uma empresa com mais de 45 anos, sendo especializada em{' '}
              <span className="text-[#FDF341] font-semibold">materiais esportivos</span>, armas e munições, fogos de
              artifício, troféus e medalhas, roupas de academia, redes esportivas, bolas e camisas oficiais.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Nossa empresa é familiar, procuramos dar o melhor atendimento, preços justos e produtos de marcas famosas
              de qualidade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {miniStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-[#FDF341]/10 backdrop-blur-md rounded-2xl border border-[#FDF341]/20 hover:bg-[#FDF341]/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FDF341] rounded-full mb-4 text-[#363435]">
                    <Icon size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#FDF341] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="group relative overflow-hidden">
                  <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#FDF341]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#FDF341]/20 h-full">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDF341] to-[#E8D93C] rounded-2xl mb-6 text-[#363435] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={40} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#FDF341] transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">{feat.desc}</p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDF341]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-[#FDF341] font-semibold text-lg hover:gap-4 transition-all duration-300"
            >
              Conheça Nossos Produtos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#FDF341]/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#FDF341]/10 rounded-full"></div>
    </section>
  );
}
