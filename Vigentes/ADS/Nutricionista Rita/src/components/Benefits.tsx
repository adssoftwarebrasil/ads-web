import { Zap, Heart, Smile, TrendingDown, Target } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Mais Energia no Dia a Dia',
    text: 'Sinta-se mais disposta e animada para aproveitar cada momento da sua vida.',
  },
  {
    icon: Heart,
    title: 'Melhor Qualidade de Vida',
    text: 'Aumente sua autoestima e bem-estar com uma relação saudável com a comida.',
  },
  {
    icon: Smile,
    title: 'Disposição e Bem-Estar',
    text: 'Melhore sua saúde física e mental com hábitos alimentares equilibrados.',
  },
  {
    icon: TrendingDown,
    title: 'Perda de Peso Saudável',
    text: 'Emagreça de forma sustentável, sem sofrimento e com resultados duradouros.',
  },
  {
    icon: Target,
    title: 'Redução do Efeito Sanfona',
    text: 'Conquiste e mantenha seu peso ideal com um método que realmente funciona.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[rgb(157,111,88)] font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Por que escolher este método?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            O Que Você Pode <span className="text-[rgb(157,111,88)] font-normal italic">Esperar</span>?
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Imagine como seria se sentir mais leve, saudável e confiante todos os dias
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-20">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1.33rem)] bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 hover:border-[rgb(157,111,88)]/40 hover:bg-[#202020] transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left group"
            >
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6 shrink-0 border border-white/10 group-hover:border-[rgb(157,111,88)]/50 transition-colors">
                <Icon className="w-6 h-6 text-[rgb(157,111,88)]" />
              </div>
              <div>
                <h3 className="text-xl font-normal text-white mb-3">{title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-[rgb(157,111,88)]/10 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Fsalada-verde-tomates-nutricao.webp"
              alt="Alimentação saudável"
              className="relative w-full h-auto rounded-[2rem] shadow-2xl border border-white/5 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-light text-white">
              Transforme Sua Vida com <br />
              <span className="text-[rgb(157,111,88)] font-normal">Escolhas Conscientes</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Cada resultado que você conquista é fruto de um trabalho personalizado, baseado em ciência e
                dedicação. Não se trata apenas de perder peso, mas de ganhar qualidade de vida, saúde e
                autoconfiança.
              </p>
              <p>
                Com o acompanhamento adequado, você vai descobrir que é possível emagrecer sem abrir mão do
                prazer de comer bem e sem restrições severas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
