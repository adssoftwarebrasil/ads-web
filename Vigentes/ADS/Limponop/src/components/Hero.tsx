import { Star, ArrowRight, Truck, Shield } from 'lucide-react';
import { WHATSAPP } from '../data';

const stats = [
  { value: '5+', label: 'Anos no mercado' },
  { value: '100+', label: 'Produtos disponíveis' },
  { value: '6', label: 'Cidades atendidas' },
  { value: '5.0', label: 'Avaliação Google' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/limponop/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-blue/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/40 text-brand-pink px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in-up">
            <Star width={12} height={12} fill="currentColor" />
            Representante Autorizado MM Química
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Tudo para sua <span className="text-brand-pink">limpeza perfeita</span>, entregue na
            porta da sua empresa
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl">
            Do detergente ao MOP profissional, do papel higiênico ao cloro de piscina — a Limponop
            tem o mix completo com preços justos e entrega rápida em Sinop e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-pink text-white px-8 py-4 rounded-full font-bold text-base hover:bg-pink-600 transition-all duration-200 shadow-lg hover:shadow-pink-500/30 hover:shadow-2xl"
            >
              Pedir Orçamento Agora
              <ArrowRight width={18} height={18} />
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-200"
            >
              Ver Produtos
            </a>
          </div>
          <div className="flex flex-wrap gap-5 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Truck width={16} height={16} className="text-brand-blue" />
              Entrega rápida na região
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Shield width={16} height={16} className="text-brand-blue" />
              Produtos de qualidade certificada
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Star width={16} height={16} fill="currentColor" className="text-brand-pink" />
              Nota 5.0 no Google
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-auto border-t border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-brand-pink">{s.value}</p>
                <p className="text-white/60 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
