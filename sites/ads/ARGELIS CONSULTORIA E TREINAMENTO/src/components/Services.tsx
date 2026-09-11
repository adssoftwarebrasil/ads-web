import { DollarSign, Monitor, Cog, Users, Sparkles, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconGradient: string;
  barGradient: string;
  title: string;
  desc: string;
  link: string;
  badge?: boolean;
}

const services: Service[] = [
  {
    icon: DollarSign,
    iconGradient: 'from-[rgb(64,102,215)] to-[rgb(62,215,252)]',
    barGradient: 'from-[rgb(64,102,215)] to-[rgb(62,215,252)]',
    title: 'Consultoria Financeira',
    desc: 'Reestruturação financeira completa, controladoria estratégica, valuation empresarial e acompanhamento de resultados para decisões mais assertivas.',
    link: 'https://wa.me/5516991931444?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20Consultoria%20Financeira.',
  },
  {
    icon: Monitor,
    iconGradient: 'from-[rgb(62,215,252)] to-[rgb(64,102,215)]',
    barGradient: 'from-[rgb(62,215,252)] to-[rgb(64,102,215)]',
    title: 'Consultoria Financeira Online',
    desc: 'Serviços de controladoria e acompanhamento estratégico com o melhor custo-benefício, totalmente remoto, mantendo a qualidade e proximidade.',
    link: 'https://wa.me/5516991931444?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20Consultoria%20Financeira%20Online.',
    badge: true,
  },
  {
    icon: Cog,
    iconGradient: 'from-[rgb(64,102,215)] to-[rgb(69,71,70)]',
    barGradient: 'from-[rgb(64,102,215)] to-[rgb(69,71,70)]',
    title: 'Consultoria de Operações',
    desc: 'Gestão de operações, estoques e mapeamento de processos para aumentar eficiência, reduzir custos e otimizar sua cadeia produtiva.',
    link: 'https://wa.me/5516991931444?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20Consultoria%20de%20Opera%C3%A7%C3%B5es.',
  },
  {
    icon: Users,
    iconGradient: 'from-[rgb(62,215,252)] to-[rgb(64,102,215)]',
    barGradient: 'from-[rgb(62,215,252)] to-[rgb(64,102,215)]',
    title: 'Treinamentos In Company',
    desc: 'Capacitação prática em gestão financeira e operacional, presencial ou online, com foco em resultados aplicáveis ao seu negócio.',
    link: 'https://wa.me/5516991931444?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20Treinamentos%20In%20Company.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Nossas Soluções Empresariais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em gestão para empresas que buscam crescimento sustentável e resultados
            mensuráveis
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {s.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-[rgb(62,215,252)] to-[rgb(64,102,215)] text-white px-3 py-1 rounded-full text-sm font-bold">
                      <Sparkles width={16} height={16} />
                      NOVIDADE!
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${s.iconGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon width={32} height={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgb(64,102,215)] font-semibold group-hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    Saiba Mais
                    <ArrowRight width={20} height={20} />
                  </a>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.barGradient}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
