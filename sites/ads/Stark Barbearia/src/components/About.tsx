import { CheckCircle, MapPin, Award, Zap } from 'lucide-react';

const highlights = [
  'Atendimento humanizado',
  'Técnicas personalizadas',
  'Ambiente de alto padrão',
  'Profissionais qualificados',
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">
                Nossa Essência
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter leading-none uppercase">
                Desde <span className="text-zinc-400">2019</span> em Sinop
              </h2>
              <div className="w-20 h-1.5 bg-zinc-900"></div>
            </div>
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-light">
              A Stark Barbearia foi fundada em 2019 por Jeff Visagista, com o propósito de unir
              barbearia moderna, visagismo e atendimento de alto padrão.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                    <CheckCircle className="w-4 h-4 text-zinc-400 group-hover:text-amber-500" />
                  </div>
                  <span className="text-zinc-700 font-medium text-sm uppercase tracking-wide">
                    {h}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-zinc-100 flex items-center gap-4">
              <div className="p-3 bg-zinc-900 rounded-lg">
                <MapPin className="text-amber-500 w-6 h-6" />
              </div>
              <div>
                <p className="text-zinc-900 font-bold uppercase text-sm">Rua das Andirobas, 240</p>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Sinop - MT</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-500/20 rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/starkbarbearia/barbearia-cadeiras-pretas-vazias-aguardando-clientes_765x1020.webp"
                  alt="Interior Stark Barbearia"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md py-2 px-4 rounded-full shadow-lg">
                  <p className="text-zinc-900 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                    Experiência Premium
                  </p>
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 gap-4 bg-zinc-950">
                <div className="text-center border-r border-zinc-800">
                  <p className="text-amber-500 text-3xl font-black italic">5+</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                    Especialistas
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-amber-500 text-3xl font-black italic">100%</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                    Satisfação
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl hidden md:block transform -rotate-3 hover:rotate-0 transition-all">
              <Award className="w-8 h-8 mb-2" />
              <p className="text-xs uppercase font-bold tracking-tighter leading-tight text-amber-100">
                Visagista Responsável
              </p>
              <p className="text-xl font-black uppercase leading-none">Jeff Visagista</p>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-32 p-8 md:p-16 bg-zinc-50 rounded-[3rem] border border-zinc-100 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-[0.4em] mb-6">
              Nossa Filosofia
            </h3>
            <blockquote className="text-2xl md:text-4xl text-zinc-900 font-light italic leading-tight max-w-4xl mx-auto">
              "Um ambiente pensado para homens que valorizam imagem, conforto e qualidade,
              garantindo confiança e resultados acima do esperado."
            </blockquote>
          </div>
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
            <Zap width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
}
