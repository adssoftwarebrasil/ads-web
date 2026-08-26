import { Sparkles, Wifi, Headphones, Home, Camera, Check, ArrowRight, type LucideIcon } from 'lucide-react';

interface Diff {
  icon: LucideIcon;
  iconClass: string;
  grad: string;
  hoverBg: string;
  title: string;
  desc: string;
  items: string[];
}

const diffs: Diff[] = [
  {
    icon: Wifi,
    iconClass: 'lucide lucide-wifi',
    grad: 'from-cyan-500 via-blue-500 to-indigo-600',
    hoverBg: 'from-cyan-50 to-blue-50',
    title: '100% Fibra Óptica',
    desc: 'Tecnologia de ponta direto até sua casa. Sem oscilações, sem quedas, conexão real de fibra com velocidade garantida.',
    items: ['Velocidade real', 'Sem oscilações', 'Estabilidade máxima'],
  },
  {
    icon: Headphones,
    iconClass: 'lucide lucide-headphones',
    grad: 'from-emerald-500 via-teal-500 to-cyan-600',
    hoverBg: 'from-emerald-50 to-teal-50',
    title: 'Suporte 24 Horas',
    desc: 'Time técnico disponível todos os dias. Resolvemos seu problema por WhatsApp, telefone ou presencialmente.',
    items: ['WhatsApp rápido', 'Atendimento local', 'Sem espera'],
  },
  {
    icon: Home,
    iconClass: 'lucide lucide-home',
    grad: 'from-orange-500 via-amber-500 to-yellow-500',
    hoverBg: 'from-orange-50 to-amber-50',
    title: 'Instalação Grátis',
    desc: 'Zero custo de instalação. Nossa equipe técnica especializada instala tudo em até 48h.',
    items: ['Instalação em 48h', 'Custo zero', 'Equipe própria'],
  },
  {
    icon: Camera,
    iconClass: 'lucide lucide-camera',
    grad: 'from-violet-500 via-purple-500 to-fuchsia-600',
    hoverBg: 'from-violet-50 to-purple-50',
    title: 'Internet + Segurança',
    desc: 'Pacotes integrados com câmeras de monitoramento Intelbras. Proteja o que importa com acesso remoto.',
    items: ['Câmeras HD', 'App mobile', 'Gravação nuvem'],
  },
];

const stats = [
  { emoji: '👥', value: '5.000+', label: 'Clientes Ativos' },
  { emoji: '⭐', value: '4.9⭐', label: 'Avaliação' },
  { emoji: '💬', value: '24/7', label: 'Suporte' },
];

export default function Differentials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-lg shadow-blue-500/30 animate-fadeInDown">
            <Sparkles className="lucide lucide-sparkles w-4 h-4" />NOSSOS DIFERENCIAIS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600">3MD</span>?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed px-4">Não somos apenas internet. Somos conexão com qualidade e atendimento excepcional</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {diffs.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={i} className="group relative">
                <div className="relative h-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${d.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${d.grad} opacity-5 rounded-bl-full`}></div>
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${d.grad} rounded-2xl items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className={`${d.iconClass} w-8 h-8 sm:w-10 sm:h-10 text-white`} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-slate-800 transition-colors">{d.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">{d.desc}</p>
                    <div className="space-y-3">
                      {d.items.map((it, j) => (
                        <div key={j} className="flex items-center gap-3 group/item" style={{ animation: `0.5s ease-out ${j * 0.1}s 1 normal both running fadeInUp` }}>
                          <div className={`w-6 h-6 bg-gradient-to-br ${d.grad} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="lucide lucide-check w-3.5 h-3.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-sm sm:text-base font-semibold text-slate-700 group-hover/item:text-slate-900 transition-colors">{it}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Saiba mais</span>
                      <ArrowRight className="lucide lucide-arrow-right w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-r ${d.grad} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-6 sm:px-12 py-8 sm:py-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="mb-2 text-3xl group-hover:scale-110 transition-transform duration-300">{s.emoji}</div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">{s.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden sm:block"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
