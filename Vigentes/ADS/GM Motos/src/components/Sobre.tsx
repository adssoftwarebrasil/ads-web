import { Calendar, Users, Award, MapPin } from 'lucide-react';

const stats = [
  { icon: Calendar, iconClass: 'lucide-calendar', value: '2017', label: 'Fundada em' },
  { icon: Users, iconClass: 'lucide-users', value: '+1000', label: 'Clientes satisfeitos' },
  { icon: Award, iconClass: 'lucide-award', value: '4.4', label: 'Avaliação Google' },
  { icon: MapPin, iconClass: 'lucide-map-pin', value: '8+', label: 'Cidades atendidas' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(233,1,16,0.08),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/loja-motos-gm-honda-vermelhas-pretas_4284x5712.webp"
                alt="Loja GM Motos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-brand-red text-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_rgba(233,1,16,0.4)] max-w-[240px]">
              <p className="font-display text-5xl sm:text-6xl font-black leading-none">8+</p>
              <p className="text-sm font-semibold mt-2 uppercase tracking-wider">Anos de mercado</p>
              <div className="mt-3 pt-3 border-t border-white/30 text-xs leading-relaxed">
                Construindo confiança a cada negociação
              </div>
            </div>
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 border-2 border-brand-red/40 rounded-2xl -z-10"></div>
          </div>
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
              Sobre a GM Motos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              Uma história de <span className="text-brand-red">recomeço</span>,<br />
              trabalho e confiança.
            </h2>
            <div className="space-y-5 text-white/75 text-base sm:text-lg leading-relaxed">
              <p>
                A <strong className="text-white">GM MOTOS</strong> é uma loja especializada na
                compra, venda e troca de motos em Rondonópolis. Fundada em 2017, nasceu de um
                recomeço e cresceu com base em trabalho, confiança e compromisso com cada cliente.
              </p>
              <p>
                Oferecemos motos com procedência, condições facilitadas — com ou sem entrada —,
                parcelamento no cartão e avaliação justa para quem quer vender ou trocar.
              </p>
              <p className="text-white font-semibold italic border-l-4 border-brand-red pl-5">
                "Trabalhamos para tornar a conquista da sua moto mais fácil, segura e acessível."
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="group p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-brand-red/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-brand-red/15 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                        <Icon
                          className={`lucide ${s.iconClass} text-brand-red group-hover:text-white`}
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="font-display text-2xl font-black text-white">{s.value}</p>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-white/60 font-medium">
                      {s.label}
                    </p>
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
