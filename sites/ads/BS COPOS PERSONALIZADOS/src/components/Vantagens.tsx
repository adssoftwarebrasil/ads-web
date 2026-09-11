import { ShieldCheck, Star, Package, Zap, CheckCircle2 } from 'lucide-react';

const advantages = [
  {
    Icon: Star,
    title: 'Alta Qualidade',
    description: 'Materiais de primeira linha que garantem durabilidade e brilho excepcional.',
  },
  {
    Icon: Package,
    title: 'Variedade Imbatível',
    description: 'Um catálogo completo com modelos que se adaptam a qualquer tipo de evento.',
  },
  {
    Icon: Zap,
    title: 'Agilidade Real',
    description: 'Processo de produção otimizado para entregar seu pedido no menor tempo.',
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="w-full py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#000EFF] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Por que escolher a <span className="text-[#000EFF]">BS Copos?</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#000EFF] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 px-4">
            <div className="absolute -inset-4 bg-[#000EFF]/5 rounded-[3rem] rotate-3 -z-10"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/bscomerc%2FPorque%20Contratar.jpeg"
                alt="Produção BS Copos"
                className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white"
              />
              <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheck width={28} height={28} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Garantia de</p>
                  <p className="text-sm font-black text-slate-900">Satisfação 100%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            {advantages.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group flex gap-6 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#000EFF] rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors">
                      <Icon width={28} height={28} className="text-[#000EFF]" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#000EFF] transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#000EFF] p-10 rounded-[2.5rem] text-white flex items-center gap-6 shadow-xl shadow-blue-500/20">
            <div className="hidden sm:flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center backdrop-blur-md">
              <CheckCircle2 width={32} height={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-1">Tradição e Confiança</h3>
              <p className="text-blue-100 font-medium">
                Décadas de experiência que garantem o melhor resultado.
              </p>
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex items-center gap-6 shadow-xl shadow-slate-900/20">
            <div className="hidden sm:flex w-16 h-16 bg-white/10 rounded-2xl items-center justify-center backdrop-blur-md">
              <Zap width={32} height={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-1">Inovação Contínua</h3>
              <p className="text-slate-400 font-medium">
                Tecnologia de ponta em gravações e materiais exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
