import { Check, MessageCircle, ChevronRight, ArrowDown } from 'lucide-react';

const features = [
  'Plantão de vendas de baterias',
  'Entrega delivery',
  'Atendimento rural',
  'Diagnóstico Raster',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[rgb(32,29,30)] pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[rgb(234,29,34)] opacity-20 blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center self-start gap-2 bg-[rgb(246,234,9)]/10 border border-[rgb(246,234,9)]/30 text-[rgb(246,234,9)] px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              21 anos de excelência
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Energia que move <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,29,34)] to-red-500">
                seu veículo
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Soluções automotivas completas em Rondonópolis. Do carro de passeio ao maquinário
              agrícola, nós temos a bateria certa para você.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[rgb(234,29,34)]/50 transition-colors"
                >
                  <div className="bg-[rgb(234,29,34)] rounded-full p-1 flex-shrink-0">
                    <Check width={14} height={14} className="text-white" />
                  </div>
                  <p className="text-gray-200 text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5566999146648?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-[rgb(234,29,34)] text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-red-900/40"
              >
                <MessageCircle width={20} height={20} />
                Solicitar Orçamento
              </a>
              <a
                href="#produtos"
                className="flex items-center justify-center gap-2 border border-white/30 bg-white/5 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[rgb(32,29,30)] transition-all duration-300 font-bold text-lg backdrop-blur-sm"
              >
                Ver Produtos
                <ChevronRight width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[rgb(234,29,34)]/30 to-[rgb(246,234,9)]/20 blur-[60px] rounded-full -z-10 group-hover:blur-[80px] transition-all duration-700"></div>
            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2FTermo%20de%20garantia%2001.png"
                alt="Bateria Moura para Carro"
                className="w-full max-w-[320px] lg:max-w-[480px] drop-shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Check width={28} height={28} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-base text-gray-500 font-bold uppercase">Entrega Rápida</p>
                    <p className="text-xl text-[rgb(32,29,30)] font-bold">Em toda região</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowDown width={32} height={32} className="text-white/30" />
      </div>
    </section>
  );
}
