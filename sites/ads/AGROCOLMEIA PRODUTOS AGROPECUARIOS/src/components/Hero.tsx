import { ArrowRight, Leaf, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#12441f] via-[#1a5f2e] to-[#12441f]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FPlantacaoDeSoja.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-6 lg:space-y-8 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Leaf className="w-4 h-4 text-[#fdaf2a]" />
              <span className="text-sm font-medium">Bem-vindo à Agrocolméia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Do Plantio à Colheita,{' '}
              <span className="text-[#fdaf2a]">Caminhando Junto</span> com Você
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              Insumos de qualidade superior, orientação técnica especializada e suporte contínuo para transformar cada safra em um ciclo de máxima produtividade e confiança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5567999564186"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#fdaf2a] text-[#12441f] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e89d1e] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <span>Nossos Serviços</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-[#fdaf2a]" />
                </div>
                <div className="text-3xl font-bold text-[#fdaf2a]">400+</div>
                <div className="text-sm text-white/80 mt-1">Agricultores Parceiros</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-[#fdaf2a]" />
                </div>
                <div className="text-3xl font-bold text-[#fdaf2a]">2023</div>
                <div className="text-sm text-white/80 mt-1">Fundação</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="w-6 h-6 text-[#fdaf2a]" />
                </div>
                <div className="text-3xl font-bold text-[#fdaf2a]">100%</div>
                <div className="text-sm text-white/80 mt-1">Comprometimento</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FAgricultorDeBra%C3%A7osCruzadosSorrindo.png"
                alt="Agricultor Sorrindo"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
                <p className="text-sm text-gray-600 font-medium mb-1">Unidos com o Produtor</p>
                <p className="text-2xl font-bold text-[#12441f]">Cultivando Parcerias que Geram Resultados</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#fdaf2a] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}