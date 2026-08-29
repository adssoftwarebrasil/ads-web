import { CheckCircle2, MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/ms%20climatizadores%2Fimg%2Fsomos-referencia.jpg"
          alt="MS Climatizadores Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/90"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium mb-8 backdrop-blur-sm">
            <CheckCircle2 width={16} height={16} />
            <span>Referência em Campo Grande - MS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Conforto Térmico com <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Excelência
            </span>{' '}
            há 15 Anos.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-200 opacity-100 translate-y-0">
            A solução completa para sua empresa ou residência. Venda, manutenção e peças para
            climatizadores com atendimento 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto transition-all duration-1000 delay-400 opacity-100 translate-y-0">
            <button
              type="button"
              className="rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 bg-[rgb(255,200,1)] text-gray-900 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 px-8 py-4 text-lg "
            >
              <MessageCircle width={24} height={24} />
              Solicitar Orçamento
            </button>
            <button
              type="button"
              className="rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg "
            >
              <ChevronDown width={24} height={24} />
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
