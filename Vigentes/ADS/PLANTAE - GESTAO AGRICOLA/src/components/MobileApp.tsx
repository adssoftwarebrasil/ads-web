import { WifiOff, RefreshCw, MapPin, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AppFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const appFeatures: AppFeature[] = [
  {
    icon: WifiOff,
    title: 'Trabalhe Off-line',
    description: 'Com o aplicativo você pode trabalhar mesmo sem internet no campo.',
    delay: 200,
  },
  {
    icon: RefreshCw,
    title: 'Sincronização Fácil',
    description: 'Sincronize os dados nunca foi tão fácil. Tudo atualizado quando conectar.',
    delay: 300,
  },
  {
    icon: MapPin,
    title: 'Acesso em Todo o Brasil',
    description: 'Atendemos produtores de todo o Brasil, de qualquer lugar.',
    delay: 400,
  },
  {
    icon: Smartphone,
    title: 'Qualquer Dispositivo',
    description: 'Use no celular, tablet ou computador. Sem necessidade de equipamentos especiais.',
    delay: 500,
  },
];

export default function MobileApp() {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgb(18, 81, 114) 0%, rgb(10, 119, 145) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <span className="inline-block text-plantae-green font-black text-sm tracking-widest uppercase mb-4">
              Aplicativo Móvel
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              APLICATIVO MÓVEL
              <br />
              <span className="text-plantae-teal">TRABALHE OFF-LINE</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Leve o Plantae para onde você for. Com nosso aplicativo, você registra tudo no campo
              mesmo sem conexão e sincroniza quando quiser.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {appFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 transition-all duration-500 opacity-100 translate-x-0"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-plantae-green/20 flex items-center justify-center flex-shrink-0">
                      <Icon width={20} height={20} className="text-plantae-green" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm mb-1">{feature.title}</h4>
                      <p className="text-white/60 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/5566992921858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-plantae-green text-plantae-dark font-black px-8 py-4 rounded-full hover:bg-[#bcd95a] transition-all duration-200 hover:shadow-2xl hover:scale-105 text-sm"
              >
                Solicitar Acesso
              </a>
            </div>
          </div>
          <div className="flex justify-center transition-all duration-700 delay-300 opacity-100 translate-y-0">
            <div className="relative">
              <div className="absolute inset-0 bg-plantae-teal/30 rounded-full blur-3xl scale-75"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/plantae/Plantae_Palma_da_mao.png"
                alt="Plantae App no celular"
                className="relative z-10 max-w-xs md:max-w-sm w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
