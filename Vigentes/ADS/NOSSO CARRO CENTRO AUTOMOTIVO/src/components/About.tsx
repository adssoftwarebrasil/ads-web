import { CheckCircle2, Trophy, Users, Zap, type LucideIcon } from 'lucide-react';

const features = [
  'Cabine de pintura profissional USI ITALIA',
  'Laboratório próprio de tinta automotiva',
  'Capacidade para 150 veículos simultâneos',
  'Pátio com recebimento 24h / guincho',
  'Showroom exclusivo para entrega',
  'Sala de espera climatizada e confortável',
  'Veículos entregues lavados e encerados',
  'Oficina referenciada pelas seguradoras',
];

interface Stat {
  icon: LucideIcon;
  cls: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Trophy, cls: 'lucide lucide-trophy text-[#6D94BE] mx-auto mb-1.5', value: '+6', label: 'Anos de Excelência' },
  { icon: Users, cls: 'lucide lucide-users text-[#6D94BE] mx-auto mb-1.5', value: '+5mil', label: 'Clientes Atendidos' },
  { icon: Zap, cls: 'lucide lucide-zap text-[#6D94BE] mx-auto mb-1.5', value: '150', label: 'Veículos Simultâneos' },
  { icon: CheckCircle2, cls: 'lucide lucide-check-circle2 text-[#6D94BE] mx-auto mb-1.5', value: '5.0', label: 'Avaliação no Google' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#031B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/img/fachada-azul-oficina-carro-nosso-carro_382x510.webp"
                alt="Fachada Nosso Carro Centro Automotivo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04152D]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#04152D] border border-[#174C7E]/40 rounded-2xl p-4 shadow-xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/img/interior-clinica-automotiva-mesa-de-vidro-tv_382x510.webp"
                alt="Interior da clínica automotiva"
                className="w-28 sm:w-36 h-auto rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-gradient-to-br from-[#174C7E] to-[#031B3A] rounded-xl px-4 py-3 shadow-xl border border-[#6D94BE]/20">
              <p className="text-white font-black text-2xl leading-none">5.0</p>
              <p className="text-[#6D94BE] text-xs font-medium">Google ★★★★★</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 bg-[#174C7E]/30 border border-[#6D94BE]/20 text-[#6D94BE] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Sobre nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Fundada para Ser
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D94BE] to-white block">
                Referência em Sergipe
              </span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-6">
              Desde 2019, o Nosso Carro Centro Automotivo nasceu com um único propósito: oferecer ao
              sergipano um serviço automotivo com o padrão técnico das grandes montadoras. Com mais
              de 6 anos de trajetória, tornamo-nos referência em funilaria, pintura e estética em
              Aracaju.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Investimos continuamente em tecnologia de ponta — incluindo a exclusiva cabine de
              pintura profissional USI ITALIA e laboratório próprio de tinta — garantindo precisão de
              cor, acabamento impecável e zero retrabalho.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="lucide lucide-check-circle2 text-[#6D94BE] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/75 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="text-center">
                    <Icon size={18} className={s.cls} />
                    <p className="text-white font-black text-xl sm:text-2xl leading-none mb-1">
                      {s.value}
                    </p>
                    <p className="text-white/50 text-xs">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
