import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="topo"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/cm%20glass%2Fimg%2Fhero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#034087]/90 via-[#034087]/75 to-[#022d5e]/85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Representante Oficial Saint-Gobain em Manaus
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Especialistas em <span className="text-sky-300">Vidros Automotivos</span> em Manaus
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Troca de parabrisa, aplicação de insulfilm e recuperação de trincados. Qualidade
              garantida com vidros nacionais e importados das melhores fábricas do mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="http://wa.me/559284131569?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#034087] text-base font-bold px-8 py-4 rounded-full hover:bg-sky-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#034087]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Orçamento
              </a>
              <button
                onClick={() => scrollTo('servicos')}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white text-base font-semibold px-8 py-4 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Nossos Serviços
              </button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Vidros Originais Garantidos
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Atendimento em Manaus e Interior
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Nota 4.9 no Google
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/cm%20glass%2Fimg%2Flogo-sem-fundo.webp"
              alt="CM Glass"
              className="w-72 xl:w-80 object-contain drop-shadow-2xl brightness-0 invert"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
