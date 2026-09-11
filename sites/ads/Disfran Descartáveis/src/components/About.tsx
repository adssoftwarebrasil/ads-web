import { Star, Users, ShieldCheck, TrendingUp, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Bullet {
  icon: LucideIcon;
  iconClass: string;
  text: string;
}

const bullets: Bullet[] = [
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    text: 'Atendimento personalizado e consultoria especializada',
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    text: 'Produtos de qualidade garantida e certificados',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up',
    text: 'Melhor custo-benefício da região',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    text: 'Entrega rápida e eficiente',
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white py-20 px-6"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[rgb(153,21,16)] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[rgb(2,74,169)] blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-5 py-2 shadow-lg">
              <Star className="lucide lucide-star text-[rgb(255,243,229)]" width={18} height={18} fill="currentColor" />
              <span className="text-sm font-bold text-white">26 anos de excelência</span>
            </div>
            <h2 className="mb-6 text-4xl font-black leading-tight text-[rgb(153,21,16)] md:text-5xl">
              Sobre a Disfran Descartáveis
            </h2>
            <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)]"></div>
            <p className="mb-5 text-base leading-relaxed text-gray-700 md:text-lg">
              Visualizamos a necessidade da praça em ter uma loja de materiais
              descartáveis que atendesse tanto o grande como o pequeno
              empreendedor.
            </p>
            <p className="mb-8 text-base leading-relaxed text-gray-700 md:text-lg">
              Desde então, oferecemos um atendimento diferenciado, sempre
              procurando o melhor produto para a necessidade dos nossos clientes,
              com excelente custo-benefício.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {bullets.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.text}
                    className="group flex items-start gap-3 rounded-xl bg-[rgb(255,243,229)]/50 p-4 transition-all duration-300 hover:bg-[rgb(255,243,229)] hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className={b.iconClass} width={20} height={20} strokeWidth={2.5} />
                    </div>
                    <span className="pt-1.5 text-sm font-medium leading-tight text-gray-800">
                      {b.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-md">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="rounded-3xl bg-gradient-to-br from-[rgb(153,21,16)] via-[rgb(180,35,30)] to-[rgb(2,74,169)] p-1 shadow-2xl">
                  <div className="rounded-[22px] bg-white px-8 py-12 text-center md:px-12 md:py-16">
                    <div className="relative mb-4">
                      <div className="bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] bg-clip-text text-8xl font-black leading-none text-transparent md:text-9xl">
                        26
                      </div>
                    </div>
                    <div className="mb-6 space-y-1">
                      <p className="text-xl font-bold text-[rgb(153,21,16)] md:text-2xl">Anos de</p>
                      <p className="text-xl font-bold text-[rgb(2,74,169)] md:text-2xl">Tradição</p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <Star key={n} className="lucide lucide-star text-yellow-400" width={24} height={24} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="absolute -right-4 -top-4 z-10 animate-float rounded-2xl border border-[rgb(153,21,16)]/10 bg-white p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)]">
                        <Award className="lucide lucide-award text-white" width={18} height={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[rgb(153,21,16)]">Top</p>
                        <p className="text-xs text-gray-600">Quality</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 z-10 animate-float-delayed rounded-2xl border border-[rgb(2,74,169)]/10 bg-white p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[rgb(2,74,169)] to-[rgb(153,21,16)]">
                        <Users className="lucide lucide-users text-white" width={18} height={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[rgb(2,74,169)]">5000+</p>
                        <p className="text-xs text-gray-600">Clientes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
