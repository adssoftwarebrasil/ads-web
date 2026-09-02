import { ArrowRight, Target, Award, Users, TrendingUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/whatsapp';
import { scrollToSection } from '../utils/scroll';

const features = [
  {
    icon: Target,
    iconName: 'lucide-target',
    bg: 'from-[#4CAF50] to-[#2E7D32]',
    title: 'Missão',
    desc: 'Desenvolvimento sustentável do agronegócio',
  },
  {
    icon: Award,
    iconName: 'lucide-award',
    bg: 'from-[#F8D617] to-[#e6c615]',
    title: 'Qualidade',
    desc: 'Peças e implementos de alta performance',
  },
  {
    icon: Users,
    iconName: 'lucide-users',
    bg: 'from-[#001F7A] to-[#1A385C]',
    title: 'Equipe',
    desc: 'Profissionais especializados e dedicados',
  },
  {
    icon: TrendingUp,
    iconName: 'lucide-trending-up',
    bg: 'from-[#1A385C] to-[#001F7A]',
    title: 'Inovação',
    desc: 'Soluções modernas para o campo',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8D617]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4CAF50] font-semibold text-sm md:text-base uppercase tracking-wider bg-[#4CAF50]/10 px-4 py-2 rounded-full">
              Sobre Nós
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A385C] mb-4">
            Quem Somos
          </h2>
          <div className="w-20 h-1 bg-[#F8D617] mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-[#4CAF50] via-[#F8D617] to-[#001F7A] rounded-full"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/novocampo%2Fquemsomos.jpg"
                alt="Novo Campo - Peças e Implementos Agrícolas"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A385C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#F8D617] to-[#e6c615] rounded-2xl p-6 shadow-2xl hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1A385C] mb-1">15+</div>
                <div className="text-sm font-semibold text-[#1A385C]/80">
                  Anos de<br />Experiência
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#001F7A] mb-4">
                NOVO CAMPO PEÇAS E IMPLEMENTOS AGRÍCOLAS
              </h3>
              <div className="w-16 h-1 bg-[#4CAF50]"></div>
            </div>
            <div className="space-y-4 md:space-y-5 text-[#424242] text-base md:text-lg leading-relaxed">
              <p>
                A{' '}
                <strong className="text-[#1A385C]">
                  NOVO CAMPO PEÇAS E IMPLEMENTOS AGRÍCOLAS LTDA
                </strong>{' '}
                é uma empresa que nasceu para atender as crescentes demandas do
                setor agrícola em{' '}
                <strong className="text-[#1A385C]">
                  Dourados, São Gabriel do Oeste, Rio Brilhante, Chapadão do Sul
                  e região
                </strong>
                . Com uma equipe especializada e um portfólio diversificado,
                somos dedicados a oferecer peças e implementos de alta qualidade,
                visando a eficiência no trabalho do produtor rural.
              </p>
              <p>
                Nossa missão é{' '}
                <strong className="text-[#4CAF50]">
                  contribuir para o desenvolvimento sustentável do agronegócio
                </strong>
                , proporcionando soluções confiáveis e um atendimento de
                excelência. Estamos prontos para ser seu parceiro ideal no campo.
              </p>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#1fb855] transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                Falar com Especialista
                <ArrowRight
                  width={20}
                  height={20}
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                />
              </a>
              <button
                onClick={() => scrollToSection('servicos')}
                className="group inline-flex items-center justify-center gap-3 border-2 border-[#001F7A] text-[#001F7A] px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#001F7A] hover:text-white transition-all duration-300"
              >
                Nossos Serviços
                <ArrowRight
                  width={20}
                  height={20}
                  className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4CAF50]/30 hover:-translate-y-2"
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${f.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon
                    width={24}
                    height={24}
                    className={`lucide ${f.iconName} text-white`}
                  />
                </div>
                <h4 className="text-[#1A385C] font-bold text-base md:text-lg mb-2">
                  {f.title}
                </h4>
                <p className="text-[#424242] text-sm md:text-base leading-snug">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
