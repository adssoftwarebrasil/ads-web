import { CheckCircle, Shield, MapPin, Award, type LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; iconClass: string; text: string }[] = [
  { icon: CheckCircle, iconClass: 'lucide lucide-check-circle text-[#6ab534]', text: 'Operadores certificados pela ANAC' },
  { icon: Shield, iconClass: 'lucide lucide-shield text-[#6ab534]', text: 'Seguro de responsabilidade civil incluso' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin text-[#6ab534]', text: 'Atendimento em todo o território nacional' },
  { icon: Award, iconClass: 'lucide lucide-award text-[#6ab534]', text: 'Equipamentos de última geração' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[#6ab534] text-sm font-bold tracking-widest uppercase mb-3">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Inovação que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8427] to-[#8fd44e]">
                transforma
              </span>{' '}
              o agronegócio
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-6">
              A <strong className="text-white">JA Agro Drones</strong> nasceu da visão de unir tecnologia aeroespacial
              com as demandas reais do campo brasileiro. Sediados em Goiânia — no coração do agronegócio nacional —
              operamos com drones agrícolas de alto desempenho para entregar precisão onde ela mais importa.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-10">
              Nossa missão é simples: ajudar produtores rurais a aumentar sua produtividade, reduzir custos com insumos e
              preservar o meio ambiente, utilizando pulverização aérea inteligente, mapeamento avançado e adubação de
              precisão.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon className={f.iconClass} width={18} height={18} />
                    </div>
                    <span className="text-white/75 text-sm leading-snug">{f.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="http://wa.me/556295016058?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20JA%20Agro%20Drones."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#4a8427] hover:bg-[#3d6d20] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#4a8427]/30"
              >
                Fale Conosco
              </a>
              <div className="text-white/50 text-sm">
                <span className="block text-white font-semibold">(62) 99501-6058</span>
                Seg–Sáb, 8h–18h
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/drone-agricola-pulverizando-lavoura-milho-economia_1079x1440.webp"
                alt="Drone agrícola em operação"
                className="w-full h-[400px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1a3a0a] border border-[#4a8427]/40 rounded-2xl p-5 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#4a8427]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="lucide lucide-map-pin text-[#6ab534]" width={18} height={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Goiânia, GO</div>
                  <div className="text-white/50 text-xs">Sede operacional</div>
                </div>
              </div>
              <div className="text-[#8fd44e] text-xs font-semibold">Atendemos o Brasil inteiro</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-black border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="text-3xl font-black text-[#6ab534] mb-1">2024</div>
              <div className="text-white/60 text-xs">Fundada com propósito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
