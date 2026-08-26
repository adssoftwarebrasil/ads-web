import { Award, BookOpen, Heart } from 'lucide-react';

const badges = [
  { icon: Award, label: 'Nutricionista Clínica Funcional' },
  { icon: BookOpen, label: 'Especialista em Emagrecimento' },
  { icon: Heart, label: 'Fitoterapia & Saúde da Mulher' },
];

const imageBlock = (
  <div className="relative group">
    <div className="absolute inset-0 border border-[rgb(157,111,88)]/40 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[2rem] z-10"></div>
    <img
      src="https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Fconheca-dra-rita.webp"
      alt="Dra. Rita Lucachinski"
      className="w-full max-w-md rounded-[2rem] shadow-2xl border border-white/5 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
      loading="lazy"
    />
  </div>
);

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="hidden lg:flex lg:col-span-2 justify-center">{imageBlock}</div>
          <div className="lg:col-span-3 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Conheça a{' '}
              <span className="text-[rgb(157,111,88)] font-normal relative">
                Dra. Rita Lucachinski
                <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-gradient-to-r from-[rgb(157,111,88)] to-transparent"></span>
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Olá, sou Rita Lucachinski, Nutricionista Clínica Funcional com mais de 20 anos de experiência
                dedicada a transformar vidas através da nutrição.
              </p>
              <p>
                Especialista em obesidade, emagrecimento e saúde da mulher, já ajudei mais de 1.000 clientes a
                conquistarem uma vida mais saudável e plena.
              </p>
              <p>
                Tenho formação em metabologia do esporte, interpretação de exames bioquímicos, modulação
                intestinal, fitoterapia e menopausa, sempre buscando a abordagem mais completa e personalizada
                para você.
              </p>
            </div>
            <div className="border-l-2 border-[rgb(157,111,88)] pl-6 py-4 bg-white/5 rounded-r-2xl backdrop-blur-sm">
              <p className="text-xl font-light text-gray-200 italic font-serif">
                "Seja emagrecimento, ganho de massa muscular ou qualidade de vida, meu objetivo é te ver vivendo
                bem."
              </p>
            </div>
            <div className="block lg:hidden flex justify-center py-8">{imageBlock}</div>
            <div className="flex flex-wrap gap-4 pt-4">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-[#171717] border border-white/5 px-5 py-3 rounded-full hover:border-[rgb(157,111,88)]/50 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-[rgb(157,111,88)]" />
                  <span className="text-gray-300 font-light text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
