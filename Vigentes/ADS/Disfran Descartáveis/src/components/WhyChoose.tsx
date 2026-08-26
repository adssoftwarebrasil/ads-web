import { CheckCircle, Users, Handshake, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  iconClass: string;
  gradient: string;
  title: string;
  desc: string;
  delay: string;
}

const reasons: Reason[] = [
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    gradient: 'from-[rgb(153,21,16)] to-[rgb(180,35,30)]',
    title: 'Para Todos os Portes',
    desc: 'Atendemos tanto grandes como pequenos empreendedores com a mesma dedicação e qualidade',
    delay: '0s',
  },
  {
    icon: Handshake,
    iconClass: 'lucide lucide-handshake',
    gradient: 'from-[rgb(2,74,169)] to-[rgb(2,94,189)]',
    title: 'Atendimento Consultivo',
    desc: 'Sempre procurando o melhor produto para a necessidade específica de cada cliente',
    delay: '0.15s',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    gradient: 'from-[rgb(153,21,16)] to-[rgb(2,74,169)]',
    title: 'Qualidade Garantida',
    desc: 'Produtos de qualidade com excelente custo-benefício para seu negócio',
    delay: '0.3s',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[rgb(255,243,229)] py-20 px-6">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[rgb(153,21,16)] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[rgb(2,74,169)] blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-5 py-2 shadow-lg">
            <CheckCircle className="lucide lucide-check-circle text-white" width={18} height={18} />
            <span className="text-sm font-bold text-white">Sua melhor escolha</span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-[rgb(153,21,16)] md:text-5xl">Por que Escolher a Disfran?</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)]"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                style={{
                  animation: `0.6s ease-out ${r.delay} 1 normal both running fadeInUp`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${r.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  style={{ padding: '2px', margin: '-2px' }}
                ></div>
                <div className="relative text-center">
                  <div className="relative mx-auto mb-6 inline-flex">
                    <div className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${r.gradient} shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl`}>
                      <Icon className={`${r.iconClass} text-white`} width={48} height={48} />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[rgb(153,21,16)] transition-colors duration-300 group-hover:text-[rgb(2,74,169)]">
                    {r.title}
                  </h3>
                  <div className={`mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r ${r.gradient} opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100`}></div>
                  <p className="leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                    {r.desc}
                  </p>
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl bg-white p-8 shadow-xl">
            <p className="mb-6 text-lg font-semibold text-gray-700">Pronto para conhecer nossas soluções?</p>
            <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span>Ver Nossos Produtos</span>
              <CheckCircle className="lucide lucide-check-circle" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
