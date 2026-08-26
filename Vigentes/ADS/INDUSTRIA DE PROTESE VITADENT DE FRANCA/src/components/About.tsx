import { Quote, Award, Users, Star, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

const FEATURES = [
  { icon: Award, text: 'Pioneiros em prótese dentária na região desde 1949' },
  { icon: Users, text: 'Atendimento especializado para dentistas e protéticos' },
  { icon: Star, text: 'Empresa ética com reconhecimento e confiança regional' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#0C4E9D] rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-2 border-l-2 border-[#0C4E9D]/30 rounded-tl-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/vitadent/Quem%20somos.png"
                  alt="Laboratório Vitadent"
                  className="w-full h-full object-cover aspect-[4/5] sm:aspect-video lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-2 sm:-right-6 w-[260px] sm:w-64 bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="https://storage.lucasmendes.dev/site-sp/vitadent/Luiz%20Gonc%CC%A7alves.png"
                      alt="Luiz Gonçalves"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#0C4E9D]"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-[#0a0a0a]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Luiz Gonçalves</h4>
                    <p className="text-blue-400 text-[10px] uppercase tracking-widest font-bold">Fundador</p>
                    <p className="text-gray-400 text-xs italic">1932 – 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#0C4E9D]"></span>
                <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase">Nossa Herança</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Mais de sete décadas de <span className="text-[#0C4E9D]">tradição.</span>
              </h2>
            </header>
            <div className="relative mb-10 pl-6 border-l-2 border-[#0C4E9D]/30">
              <Quote className="lucide lucide-quote absolute -top-2 -left-2 w-8 h-8 text-[#0C4E9D]/20 -z-10" width={24} height={24} />
              <blockquote className="text-xl md:text-2xl font-playfair italic text-gray-200 leading-relaxed">
                "O que nós fazemos? Damos vida ao dente!"
              </blockquote>
            </div>
            <div className="space-y-6 mb-10">
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Fundada em 1949 por Luiz Gonçalves, a Vitadent nasceu da paixão pela arte da prótese. Hoje, unimos essa
                herança histórica à tecnologia de ponta para entregar precisão absoluta.
              </p>
              <div className="grid gap-4">
                {FEATURES.map((f) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0C4E9D] transition-colors">
                      <f.icon className="text-blue-500 group-hover:text-white" width={20} height={20} />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base font-medium">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0C4E9D] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20 active:scale-95"
              >
                <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
                Falar com a Equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
