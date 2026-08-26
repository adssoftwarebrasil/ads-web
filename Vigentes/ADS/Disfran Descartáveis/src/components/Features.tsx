import { Trophy, Truck, DollarSign, ParkingCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  gradient: string;
  title: string;
  desc: string;
  delay: string;
}

const features: Feature[] = [
  {
    icon: Trophy,
    iconClass: 'lucide lucide-trophy',
    gradient: 'from-[rgb(153,21,16)] to-[rgb(180,35,30)]',
    title: '26 Anos no Mercado',
    desc: 'Experiência e confiança',
    delay: '0s',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck',
    gradient: 'from-[rgb(2,74,169)] to-[rgb(2,94,189)]',
    title: 'Entrega Rápida',
    desc: 'Agilidade no atendimento',
    delay: '0.1s',
  },
  {
    icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign',
    gradient: 'from-[rgb(153,21,16)] to-[rgb(2,74,169)]',
    title: 'Melhor Custo-Benefício',
    desc: 'Preços competitivos',
    delay: '0.2s',
  },
  {
    icon: ParkingCircle,
    iconClass: 'lucide lucide-parking-circle',
    gradient: 'from-[rgb(2,74,169)] to-[rgb(153,21,16)]',
    title: 'Estacionamento Próprio',
    desc: 'Comodidade para você',
    delay: '0.3s',
  },
];

export default function Features() {
  return (
    <section className="bg-[rgb(255,243,229)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                style={{
                  animation: `0.6s ease-out ${f.delay} 1 normal both running fadeInUp`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-[rgb(153,21,16)]/20"></div>
                <div className="relative">
                  <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                    <Icon className={`${f.iconClass} text-white`} width={36} height={36} />
                  </div>
                  <h3 className="mb-3 text-center text-lg font-bold text-[rgb(153,21,16)] transition-colors duration-300 group-hover:text-[rgb(2,74,169)]">
                    {f.title}
                  </h3>
                  <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100"></div>
                  <p className="text-center text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {f.desc}
                  </p>
                </div>
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
