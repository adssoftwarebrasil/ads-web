import { Briefcase, Building2, Building, Check, ArrowRight, Shield, TrendingUp, Users, type LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  iconClass: string;
  grad: string;
  title: string;
  items: string[];
  desc: string;
  btn: string;
  cta: string;
  recommended?: boolean;
}

const cards: Card[] = [
  {
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    grad: 'from-blue-500 to-cyan-500',
    title: 'Plano Empresarial',
    items: ['Link dedicado', 'IP fixo incluso', 'SLA garantido', 'Suporte prioritário', 'Velocidade simétrica'],
    desc: 'Ideal para escritórios, lojas e comércio',
    btn: 'from-blue-500 to-cyan-500',
    cta: 'SOLICITAR ORÇAMENTO',
  },
  {
    icon: Building,
    iconClass: 'lucide lucide-building',
    grad: 'from-emerald-500 to-teal-500',
    title: 'Solução para Condomínios',
    items: ['Infraestrutura completa', 'Gestão centralizada', 'Suporte técnico exclusivo', 'Câmeras de segurança', 'WiFi em áreas comuns'],
    desc: 'Conectividade total para seu condomínio',
    btn: 'from-emerald-500 to-teal-500',
    cta: 'FALAR COM ESPECIALISTA',
  },
  {
    icon: Briefcase,
    iconClass: 'lucide lucide-briefcase',
    grad: 'from-purple-500 to-indigo-500',
    title: 'Plano Corporativo Premium',
    items: ['Alta disponibilidade', 'Redundância de link', 'Gerenciamento 24/7', 'Firewall dedicado', 'VPN corporativa'],
    desc: 'Para escolas, mercados e grandes empresas',
    btn: 'from-purple-500 to-indigo-500',
    cta: 'CONSULTAR ESPECIALISTA',
    recommended: true,
  },
];

const stats = [
  { icon: Shield, iconClass: 'lucide lucide-shield', value: '99.9%', label: 'SLA Garantido' },
  { icon: TrendingUp, iconClass: 'lucide lucide-trending-up', value: '24/7', label: 'Suporte' },
  { icon: Users, iconClass: 'lucide lucide-users', value: '500+', label: 'Empresas Atendidas' },
];

export default function Corporate() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-lg animate-fadeInDown">
            <Briefcase className="lucide lucide-briefcase w-4 h-4" />SOLUÇÕES CORPORATIVAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">Soluções Empresariais <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">Sob Medida</span></h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">Link dedicado e planos corporativos para seu negócio crescer com segurança e eficiência</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className={`group relative ${c.recommended ? 'lg:-mt-4' : ''}`} style={{ animation: `0.6s ease-out ${i * 0.15}s 1 normal both running fadeInUp` }}>
                {c.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg">⭐ RECOMENDADO</div>
                  </div>
                )}
                <div className={`relative h-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden ${c.recommended ? 'border-purple-500 hover:border-purple-600' : 'border-slate-200 hover:border-blue-400'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.recommended ? 'from-purple-500 to-indigo-500' : c.grad} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${c.recommended ? 'from-purple-500 to-indigo-500' : c.grad} opacity-5 rounded-bl-full`}></div>
                  <div className="relative z-10">
                    {c.recommended && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-md">
                        <span>ALTA PERFORMANCE</span>
                      </div>
                    )}
                    <div className="mb-6">
                      <div className={`inline-flex w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${c.grad} rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className={`${c.iconClass} w-10 h-10 sm:w-12 sm:h-12 text-white`} />
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-slate-800 transition-colors">{c.title}</h3>
                    <ul className="space-y-4 mb-6">
                      {c.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-3 group/item" style={{ animation: `0.4s ease-out ${0.6 + j * 0.1}s 1 normal both running slideInLeft` }}>
                          <div className={`w-6 h-6 bg-gradient-to-br ${c.grad} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="lucide lucide-check w-3.5 h-3.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-sm sm:text-base text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors">{it}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm sm:text-base text-slate-600 mb-6 min-h-[48px] leading-relaxed">{c.desc}</p>
                    <button className={`w-full bg-gradient-to-r ${c.btn} text-white py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn`}>
                      <span className="text-sm sm:text-base">{c.cta}</span>
                      <ArrowRight className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-r ${c.recommended ? 'from-purple-500 to-indigo-500' : c.grad} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>
        <div className="max-w-5xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.2),transparent_50%)]"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 px-6 sm:px-12 py-10 sm:py-12">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="text-center group">
                    <div className="inline-flex w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`${s.iconClass} w-7 h-7 sm:w-8 sm:h-8 text-white`} />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">{s.value}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide">{s.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block"></div>
          </div>
        </div>
        <div className="text-center mt-12 sm:mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-slate-600 mb-6 text-sm sm:text-base">Não encontrou o plano ideal? Entre em contato para uma solução personalizada</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Falar com Consultor</span>
            <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
