import { Shield, TrendingDown, ExternalLink, ChevronDown } from 'lucide-react';

const HERO_IMG =
  'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimg%2FHomem-Com-Chave-Na-Mao-Sentado-No-Carro.jpg';

const stats = [
  { value: '+5.000', label: 'Contratos Negociados' },
  { value: '80%', label: 'Redução Média de Juros' },
  { value: '10+', label: 'Anos de Experiência' },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Homem com chave do carro"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2447]/95 via-[#0B2447]/80 to-[#0B2447]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447] via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 flex-1 flex items-center pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-xs md:text-sm font-semibold mb-6 backdrop-blur-sm">
              <Shield className="lucide lucide-shield" width={14} height={14} />
              Assessoria Especializada em Crédito e Financiamentos
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Livre-se dos <span className="text-amber-400">Juros Abusivos</span> do seu Financiamento
            </h1>
            <p className="text-slate-300 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
              Analisamos gratuitamente o seu contrato e negociamos com as financeiras para{' '}
              <strong className="text-white">reduzir suas parcelas</strong> e{' '}
              <strong className="text-white">quitar sua dívida com até 80% de desconto</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollTo('simulacao')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-base md:text-lg rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-amber-400/40 transition-all duration-200 hover:scale-105"
              >
                <TrendingDown className="lucide lucide-trending-down" width={20} height={20} />
                Análise Gratuita Agora
              </button>
              <a
                href="http://cliente.aliancassessoria.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-bold text-base md:text-lg rounded-2xl backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <ExternalLink className="lucide lucide-external-link" width={20} height={20} />
                Acompanhar Minha Negociação
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-amber-400">{s.value}</p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex justify-center pb-8">
        <button
          onClick={() => scrollTo('como-funciona')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <span className="text-xs font-medium">Saiba mais</span>
          <ChevronDown
            className="lucide lucide-chevron-down animate-bounce group-hover:text-amber-400"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
}
