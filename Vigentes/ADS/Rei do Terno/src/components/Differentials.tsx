import { Star, TrendingUp, Clock, Users, ShoppingBag, Award, type LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  number: number;
  delay: number;
}

const DIFFERENTIALS: Differential[] = [
  {
    icon: Clock,
    badge: '10+ Anos',
    title: 'Tradição e Experiência',
    description: 'Anos de expertise em moda masculina',
    number: 1,
    delay: 0,
  },
  {
    icon: Users,
    badge: '100% Dedicado',
    title: 'Atendimento Personalizado',
    description: 'Consultoria exclusiva para seu estilo',
    number: 2,
    delay: 150,
  },
  {
    icon: ShoppingBag,
    badge: 'Linha Completa',
    title: 'Variedade de Produtos',
    description: 'Ternos, camisas, sapatos e acessórios',
    number: 3,
    delay: 300,
  },
  {
    icon: Award,
    badge: 'Top Marcas',
    title: 'Qualidade Garantida',
    description: 'Marcas selecionadas e tecidos premium',
    number: 4,
    delay: 450,
  },
];

export default function Differentials() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#2D587A] via-[#417EAD] to-[#2D587A] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B89E5E] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float-delayed"></div>
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-2 border border-white/20">
            <Star size={16} className="text-[#B89E5E]" />
            <span className="text-sm font-semibold text-white">Diferenciais Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Por que Escolher o <br className="hidden md:block" />
            <span className="text-[#B89E5E]">Rei do Terno</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Mais do que uma loja, uma experiência em elegância masculina
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.number} className="group relative" style={{ animationDelay: `${item.delay}ms` }}>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B89E5E]/0 to-[#B89E5E]/0 group-hover:from-[#B89E5E]/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                  <div className="relative space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#B89E5E] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-[#B89E5E] to-[#a08952] w-16 h-16 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon size={28} />
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-[#B89E5E]/20 backdrop-blur-sm border border-[#B89E5E]/30 rounded-full px-3 py-1 text-xs font-bold text-[#B89E5E]">
                      <TrendingUp size={12} />
                      {item.badge}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#B89E5E] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
                    </div>
                    <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-[#B89E5E] to-transparent transition-all duration-500 rounded-full"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#B89E5E] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-[#2D587A]">
                  {item.number}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" className="text-[#B89E5E] fill-[#B89E5E]" />
              ))}
            </div>
            <p className="text-white text-lg">
              <span className="font-bold">Atendimento 5 estrelas</span> reconhecido por nossos
              clientes
            </p>
            <p className="text-white/60 text-sm">Visite nossa loja e comprove a diferença</p>
          </div>
        </div>
      </div>
    </section>
  );
}
