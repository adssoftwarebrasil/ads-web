import { Award, ArrowRight, Shield, Package } from 'lucide-react';

export default function Hero() {
  const scrollToProdutos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://sporthorsesp.com.br/wp-content/uploads/2024/12/AdobeStock_568896739.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-[rgb(0,123,0)]/90 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
            <Award size={18} />
            <span>20 anos de excelência em Hipismo</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Sua loja especializada
            <br />
            em <span className="text-[rgb(0,123,0)]">Equitação</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
            Equipamentos premium para cavaleiros de todas as idades. Do iniciante ao profissional, temos
            tudo que você precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/5516991729461"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[rgb(0,123,0)] hover:bg-[rgb(0,140,0)] text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Fale Conosco
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToProdutos}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Ver Produtos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="w-10 h-10 bg-[rgb(0,123,0)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Qualidade</h3>
                <p className="text-gray-300 text-xs">Produtos premium</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="w-10 h-10 bg-[rgb(0,123,0)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Experiência</h3>
                <p className="text-gray-300 text-xs">20 anos no mercado</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="w-10 h-10 bg-[rgb(0,123,0)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Variedade</h3>
                <p className="text-gray-300 text-xs">Amplo catálogo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
