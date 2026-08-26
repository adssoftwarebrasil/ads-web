import { Zap, Truck, DollarSign, Package } from 'lucide-react';

const features = [
  {
    Icon: Zap,
    gradient: 'from-brand-pink to-rose-400',
    title: 'Atendimento Ágil',
    text: 'Respondemos pedidos e orçamentos com rapidez, entendendo exatamente o que você precisa para oferecer a melhor solução.',
  },
  {
    Icon: Truck,
    gradient: 'from-brand-blue to-sky-400',
    title: 'Entrega Rápida',
    text: 'Agilidade na entrega para que sua empresa não pare. Atendemos Sinop e cidades da região com prazo competitivo.',
  },
  {
    Icon: DollarSign,
    gradient: 'from-emerald-500 to-teal-400',
    title: 'Preços Justos',
    text: 'Valores acessíveis tanto para empresas quanto para consumidores domésticos. Compramos bem para repassar essa vantagem a você.',
  },
  {
    Icon: Package,
    gradient: 'from-amber-500 to-orange-400',
    title: 'Mix Completo',
    text: 'Descartáveis, papéis, sacos de lixo, produtos para áreas específicas, MOPs, itens de piscina e muito mais em um só lugar.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-pink blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-blue blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-pink/20 text-brand-pink text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Nossos diferenciais que fazem a diferença
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Mais do que produtos, entregamos soluções completas com agilidade, qualidade e um
            atendimento que prioriza você.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ Icon, gradient, title, text }) => (
            <div
              key={title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon width={24} height={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
