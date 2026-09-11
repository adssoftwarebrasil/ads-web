import { TrendingDown, AlertCircle, Battery, Frown } from 'lucide-react';

const items = [
  {
    icon: TrendingDown,
    title: 'Resultados que não duram',
    text: 'Cansada do efeito sanfona que faz você perder peso e recuperar tudo de novo?',
  },
  {
    icon: AlertCircle,
    title: 'Dietas genéricas',
    text: 'Seguiu dietas prontas que não consideram suas necessidades individuais?',
  },
  {
    icon: Battery,
    title: 'Falta de energia',
    text: 'Sente-se sem disposição e energia para aproveitar o dia?',
  },
  {
    icon: Frown,
    title: 'Frustração constante',
    text: 'Já tentou diversos métodos que prometem muito mas entregam pouco?',
  },
];

export default function Struggles() {
  return (
    <section className="py-20 lg:py-32 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(157,111,88,0.05),_transparent_50%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Você já tentou de tudo para{' '}
              <span className="text-[rgb(157,111,88)] font-normal italic">emagrecer</span>?
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Se você está aqui, provavelmente já passou por frustrações tentando perder peso de forma saudável.
              E eu entendo completamente essa luta.
            </p>
            <div className="space-y-8">
              {items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-[rgb(157,111,88)]/50 group-hover:bg-[rgb(157,111,88)]/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[rgb(157,111,88)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-normal text-white mb-2">{title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <p className="text-lg text-gray-300 font-light border-l-2 border-[rgb(157,111,88)] pl-6 py-2">
                A boa notícia? Existe um caminho diferente, e eu posso te ajudar a encontrá-lo.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(157,111,88)]/20 to-transparent rounded-[2.5rem] blur-2xl -z-10"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Fmulher-pensativa-camisa.webp"
              alt="Mulher pensativa"
              className="w-full h-auto rounded-[2.5rem] shadow-2xl border border-white/10 object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
