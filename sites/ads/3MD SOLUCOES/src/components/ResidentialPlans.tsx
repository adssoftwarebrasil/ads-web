import { Zap, Rocket, Crown, Star, Check, type LucideIcon } from 'lucide-react';

interface Plan {
  icon: LucideIcon;
  iconClass: string;
  iconWrap: string;
  name: string;
  tag: string;
  speed: string;
  price: string;
  desc: string;
  features: string[];
  btn: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    iconWrap: 'from-blue-500 to-cyan-500',
    name: 'Básico',
    tag: 'Para Casa',
    speed: '100',
    price: '69,90',
    desc: 'Perfeito para navegar e streaming básico',
    features: ['Fibra óptica 100%', 'Instalação grátis', 'Suporte 24h', 'WiFi incluso', 'Sem fidelidade'],
    btn: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    iconClass: 'lucide lucide-rocket',
    iconWrap: 'from-cyan-500 to-teal-500',
    name: 'Plus',
    tag: 'Mais Vendido',
    speed: '200',
    price: '79,90',
    desc: 'Para famílias e home office',
    features: ['Fibra óptica 100%', 'Instalação grátis', 'Suporte prioritário', 'WiFi 6 incluso', 'Múltiplos dispositivos'],
    btn: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Crown,
    iconClass: 'lucide lucide-crown',
    iconWrap: 'from-violet-500 to-purple-500',
    name: 'Premium',
    tag: 'Recomendado',
    speed: '300',
    price: '89,90',
    desc: 'Performance máxima para jogos',
    features: ['Fibra óptica 100%', 'Instalação grátis', 'Suporte VIP', 'WiFi 6E incluso', 'Gaming otimizado'],
    btn: 'from-violet-500 to-purple-500',
  },
  {
    icon: Star,
    iconClass: 'lucide lucide-star',
    iconWrap: 'from-orange-500 to-red-500',
    name: 'Ultra',
    tag: 'Profissional',
    speed: '500',
    price: '99,90',
    desc: 'Velocidade empresarial',
    features: ['Fibra dedicada 100%', 'Instalação express', 'Suporte exclusivo', 'WiFi 6E Pro', 'IP fixo disponível'],
    btn: 'from-orange-500 to-red-500',
    popular: true,
  },
];

export default function ResidentialPlans() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">PLANOS RESIDENCIAIS</div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4">Escolha Seu Plano Ideal</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Todos os planos com fibra óptica real e instalação gratuita</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div key={i} className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-lg ${plan.popular ? 'hover:shadow-2xl shadow-2xl shadow-violet-500/20 ring-2 ring-violet-500 lg:-translate-y-4' : 'hover:shadow-2xl'}`}>
                {plan.popular && <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center py-2 text-sm font-bold">⭐ MAIS POPULAR</div>}
                <div className={`relative p-8 ${plan.popular ? 'pt-14' : 'pt-8'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.iconWrap} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className={`${plan.iconClass} w-8 h-8 text-white`} />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                    <span className="text-sm text-slate-500 font-medium">{plan.tag}</span>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-end gap-1 mb-2">
                      <span className="text-6xl font-black bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{plan.speed}</span>
                      <span className="text-2xl font-bold text-slate-500 mb-2">MB</span>
                    </div>
                    <div className="flex items-baseline gap-2"><span className="text-lg text-slate-500">R$</span><span className="text-4xl font-bold text-slate-900">{plan.price}</span><span className="text-slate-500">/mês</span></div>
                    <p className="text-sm text-slate-600 mt-3 min-h-[40px]">{plan.desc}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className={`w-5 h-5 bg-gradient-to-br ${plan.iconWrap} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="lucide lucide-check w-3 h-3 text-white" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full bg-gradient-to-r ${plan.btn} text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}>CONTRATAR AGORA</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Precisa de mais velocidade ou um plano empresarial?</p>
          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg">
            <Zap className="lucide lucide-zap w-5 h-5" />VER PLANOS CORPORATIVOS
          </button>
        </div>
      </div>
    </section>
  );
}
