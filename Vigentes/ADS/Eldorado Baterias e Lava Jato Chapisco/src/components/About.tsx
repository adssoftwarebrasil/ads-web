import { ShieldCheck, Star, Clock, Users, MessageCircle } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

const diferenciais = [
  {
    icon: ShieldCheck,
    title: 'Honestidade',
    description: 'Transparência total em cada diagnóstico e orçamento.',
  },
  {
    icon: Star,
    title: 'Qualidade',
    description: 'Apenas marcas líderes como Moura e Tudor.',
  },
  {
    icon: Clock,
    title: 'Agilidade',
    description: 'Solução rápida para você não ficar parado.',
  },
  {
    icon: Users,
    title: 'Tradição',
    description: 'Quase 3 décadas de confiança em Contagem.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Coluna da Imagem - Mobile: Ordem 1 */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Moldura Decorativa */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-yellow rounded-tl-3xl hidden md:block" />
              
              <img
                src="https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/caricatura-homem-bateria-moura_853x1280.webp"
                alt="Chapisco - Eldorado Baterias"
                className="w-full max-w-md mx-auto rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] object-cover border-8 border-white"
              />

              {/* Badges Flutuantes Otimizados (Glassmorphism) */}
              <div className="absolute -bottom-6 right-0 md:-right-8 bg-brand-blue/90 backdrop-blur-xl rounded-2xl p-5 text-white shadow-2xl border border-white/10">
                <p className="font-condensed font-900 text-4xl text-brand-yellow leading-none italic">27</p>
                <p className="font-barlow font-600 text-[10px] uppercase tracking-widest text-white/70 mt-1">Anos de<br />História</p>
              </div>

              <div className="absolute top-10 -left-4 md:-left-12 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                    <Star className="text-brand-yellow" size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-condensed font-900 text-brand-blue leading-none text-xl">100%</p>
                    <p className="text-[10px] uppercase font-bold text-slate-500">Original</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Círculo de fundo decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Coluna de Texto */}
          <div className="order-1 lg:order-2">
            <div className="space-y-2 mb-8 text-center lg:text-left">
              <span className="inline-block text-brand-blue font-barlow font-800 uppercase tracking-[0.3em] text-xs px-3 py-1 bg-brand-blue/5 rounded-md">
                Desde 1999
              </span>
              <h2 className="font-condensed font-900 uppercase text-5xl md:text-6xl lg:text-7xl text-brand-blue leading-[0.85] italic">
                A História do <br />
                <span className="text-brand-yellow">Chapisco</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 font-barlow text-lg leading-relaxed mb-10 text-center lg:text-left">
              <p>
                Fundada em <strong className="text-brand-blue">1° de outubro de 1999</strong>, a Eldorado Baterias 
                nasceu com um compromisso inegociável: a <span className="underline decoration-brand-yellow decoration-2 underline-offset-4 font-bold text-brand-blue">honestidade</span>.
              </p>
              <p>
                O Chapisco, como é carinhosamente conhecido em Contagem, transformou uma pequena loja no Novo Eldorado em um ponto de referência para motoristas que buscam confiança e as melhores baterias do mercado.
              </p>
            </div>

            {/* Diferenciais em Cards Modernos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {diferenciais.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 group-hover:bg-brand-yellow/10 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                        <Icon size={20} className="text-brand-blue group-hover:text-brand-yellow transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-condensed font-800 text-brand-blue uppercase text-sm leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-blue text-white font-barlow font-700 uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-brand-blue-dark hover:scale-105 shadow-xl flex items-center gap-4"
              >
                <div className="bg-brand-yellow p-1.5 rounded-lg text-brand-blue group-hover:rotate-12 transition-transform">
                  <MessageCircle size={18} fill="currentColor" />
                </div>
                Falar com o Chapisco
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}