import { CheckCircle, Award, Users, Wrench } from 'lucide-react';
import { WHATSAPP } from './icons';

const FEATURES = [
  'Formados em rede de concessionárias de grandes fabricantes',
  'Ferramental completo e específico para cada tipo de serviço',
  'Equipamentos modernos de diagnóstico eletrônico',
  'Diagnóstico preciso, sem achismo ou desperdício',
  'Transparência total no orçamento e no serviço realizado',
  'Atendimento personalizado para frotas e autônomos',
];

const LOGO = 'https://storage.lucasmendes.dev/site-sp/forte%20autoservice%20-%20ps%20auto%20service/img/logo-sem-fundo.webp';
const SHOP = 'https://storage.lucasmendes.dev/site-sp/forte%20autoservice%20-%20ps%20auto%20service/img/hero-background.webp';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/60 clip-diagonal"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll-left">
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-brand-blue/20">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-6 leading-tight">
              Mais de <span className="text-brand-red">30 Anos</span> Cuidando do Seu Caminhão
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Somos uma empresa com mais de 30 anos de experiência, contando com uma equipe técnica altamente treinada e qualificada. Ao longo da nossa trajetória, atuamos em rede de concessionárias de grandes fabricantes de caminhões, o que nos proporcionou amplo conhecimento técnico e padrão elevado de qualidade.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dispomos de ferramental completo e equipamentos modernos de diagnóstico eletrônico, garantindo precisão, agilidade e segurança em todos os serviços realizados. Atendemos caminhoneiros autônomos e frotas em toda a região de Pernambuco.
            </p>
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    fill="currentColor"
                    fillOpacity={0.15}
                    className="lucide lucide-check-circle text-brand-red flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={`${WHATSAPP}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20PS%20Auto%20Service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-dark hover:bg-brand-blue text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Conheça Nosso Time
              </a>
            </div>
          </div>
          <div className="animate-on-scroll-right relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={SHOP} alt="Oficina PS Auto Service" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-4">
                    <img src={LOGO} alt="Logo PS Auto Service" className="h-14 w-auto object-contain" />
                    <div>
                      <p className="font-bold text-lg">PS Auto Service</p>
                      <p className="text-white/70 text-sm">Recife — Pernambuco</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red rounded-2xl flex flex-col items-center justify-center shadow-xl text-white rotate-6">
              <span className="text-2xl font-black leading-none">30+</span>
              <span className="text-xs font-medium opacity-80 leading-tight text-center">anos de exp.</span>
            </div>
          </div>
        </div>
        <div className="animate-on-scroll grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-2xl p-7 text-center text-white card-hover shadow-lg">
            <Award size={28} className="lucide lucide-award mx-auto mb-3 text-brand-red" />
            <div className="text-4xl font-black text-brand-red mb-1">30+</div>
            <div className="text-white/70 text-sm font-medium">Anos de Experiência</div>
          </div>
          <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-2xl p-7 text-center text-white card-hover shadow-lg">
            <Users size={28} className="lucide lucide-users mx-auto mb-3 text-brand-red" />
            <div className="text-4xl font-black text-brand-red mb-1">100%</div>
            <div className="text-white/70 text-sm font-medium">Equipe Especializada</div>
          </div>
          <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-2xl p-7 text-center text-white card-hover shadow-lg">
            <Award size={28} className="lucide lucide-award mx-auto mb-3 text-brand-red" />
            <div className="text-4xl font-black text-brand-red mb-1">5★</div>
            <div className="text-white/70 text-sm font-medium">Avaliação no Google</div>
          </div>
          <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-2xl p-7 text-center text-white card-hover shadow-lg">
            <Wrench size={28} className="lucide lucide-wrench mx-auto mb-3 text-brand-red" />
            <div className="text-4xl font-black text-brand-red mb-1">9+</div>
            <div className="text-white/70 text-sm font-medium">Tipos de Serviço</div>
          </div>
        </div>
      </div>
    </section>
  );
}
