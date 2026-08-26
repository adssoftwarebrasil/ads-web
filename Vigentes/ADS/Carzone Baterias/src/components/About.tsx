import { Star, Users, Truck, Award } from 'lucide-react';

const bullets = [
  'Entrega e instalação no local sem custo adicional',
  'Atendimento de 7h30 às 21h, inclusive sábados',
  'Equipe técnica especializada em baterias automotivas',
  'Preços competitivos com margem reduzida para o cliente',
  'Pronta entrega para Cuiabá e Várzea Grande – MT',
  'Atendimento ágil em situações de emergência',
];

const stats = [
  {
    icon: <Star className="lucide lucide-star text-[#F7EE30] mx-auto mb-2" width={18} height={18} />,
    value: '5.0',
    label: 'Avaliação Google',
  },
  {
    icon: <Users className="lucide lucide-users text-[#F7EE30] mx-auto mb-2" width={18} height={18} />,
    value: '100%',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: <Truck className="lucide lucide-truck text-[#F7EE30] mx-auto mb-2" width={18} height={18} />,
    value: 'Grátis',
    label: 'Entrega & Instalação',
  },
  {
    icon: <Award className="lucide lucide-award text-[#F7EE30] mx-auto mb-2" width={18} height={18} />,
    value: 'Top',
    label: 'Marcas Nacionais',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#000E27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="section-enter order-2 lg:order-1">
            <span className="inline-block text-[#F7EE30] font-bold text-sm uppercase tracking-widest mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Quem é a <span className="text-[#F7EE30]">Carzone?</span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              <p>
                A <strong className="text-white">Carzone Baterias</strong> nasceu com um propósito claro: resolver de
                forma rápida, acessível e eficiente a demanda por baterias automotivas em{' '}
                <strong className="text-white">Cuiabá e Várzea Grande – MT</strong>.
              </p>
              <p>
                Sabemos que a bateria morrendo é sempre uma situação de estresse. Por isso, nossa missão é chegar
                antes da sua paciência acabar — com{' '}
                <strong className="text-white">entrega e instalação imediata, sem nenhum custo extra</strong>.
              </p>
              <p>
                Nossa equipe é formada por profissionais especializados, prontos para atender com agilidade e
                competência, seja para carro, moto, caminhão ou trator.
              </p>
            </div>
            <div className="space-y-3 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F7EE30] flex-shrink-0"></span>
                  <span className="text-white/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/556593448962"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#F7EE30] text-[#000E27] px-8 py-4 rounded-xl font-black hover:bg-yellow-300 transition-all duration-200 hover:scale-105"
            >
              Falar com a Carzone
            </a>
          </div>
          <div className="order-1 lg:order-2 section-enter">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1003AD]/20 rounded-3xl blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/loja-baterias-pilhas-estante-monitor-carzone_4032x1816.webp"
                  alt="Loja Carzone Baterias"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000E27]/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-4 md:-right-6 bg-[#F7EE30] text-[#000E27] rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-1 mb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star text-[#000E27]"
                      width={14}
                      height={14}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="font-black text-lg leading-none">5.0</p>
                <p className="text-xs font-semibold opacity-70">no Google</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors"
                >
                  {s.icon}
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
