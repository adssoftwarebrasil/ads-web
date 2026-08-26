import { Phone, Battery, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 md:pt-0"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fhero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary-purple via-primary-purple/95 to-primary-purple/40 md:to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-fadeIn text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2">
              <span className="bg-primary-yellow/10 border border-primary-yellow/20 text-primary-yellow px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
                Desde 2011
              </span>
              <span className="text-white/60 text-sm hidden sm:inline-block">|</span>
              <span className="text-white/80 text-sm hidden sm:inline-block">
                Referência na região
              </span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-sm">
                Baterias Automotivas de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-yellow-200">
                  Qualidade
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-200 font-medium pt-2">
                Em Mogi das Cruzes e Região
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              Atendimento 24 horas com entrega rápida e instalação profissional. Garantia de
              segurança e confiabilidade para o seu veículo com as melhores marcas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('contato')}
                className="group relative bg-primary-yellow text-primary-purple px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <Phone
                  size={22}
                  className="lucide lucide-phone group-hover:rotate-12 transition-transform"
                />
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollTo('produtos')}
                className="group bg-white/5 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-primary-yellow hover:text-primary-yellow transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <Battery size={22} className="lucide lucide-battery " />
                Ver Produtos
                <ArrowRight
                  size={24}
                  className="lucide lucide-arrow-right w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </button>
            </div>
            <div className="pt-6 flex items-center justify-center md:justify-start gap-6 text-white/40 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Entrega Rápida
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Instalação Grátis
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center relative animate-fadeIn delay-100">
            <div className="absolute inset-0 bg-primary-yellow/20 blur-[100px] rounded-full scale-75"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fhero1.webp"
              alt="Bateria Automotiva Moura"
              className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
