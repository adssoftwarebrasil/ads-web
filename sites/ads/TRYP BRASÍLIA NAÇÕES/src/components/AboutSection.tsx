import { Award, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna de Texto */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Header com 'Eyebrow' text */}
            <div className="space-y-4">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-600"></span>
                Nossa Essência
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
                Mais do que uma estadia,<br />
                uma experiência <span className="text-blue-600">exclusiva</span>.
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Localizado estrategicamente no <strong className="text-blue-900">SHS Quadra 4</strong>, o Tryp Brasília Nações redefine o conceito de hospitalidade na capital. Unimos a agilidade necessária para o turismo de negócios com o conforto absoluto para o seu lazer.
            </p>

            {/* Lista de diferenciais rápidos */}
            <div className="space-y-3">
              {[
                'Localização Premium no centro de Brasília',
                'Design contemporâneo e ambientes climatizados',
                'Gastronomia internacional exclusiva'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Barra de Estatísticas Estilizada */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-950">15</span>
                  <span className="text-blue-600 font-bold">+</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Anos de<br/>Excelência</p>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-950">200</span>
                  <span className="text-blue-600 font-bold">+</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Suítes<br/>Premium</p>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-950">4.8</span>
                  <Star size={16} className="text-blue-600 fill-blue-600 ml-1" />
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Avaliação<br/>Média</p>
              </div>
            </div>

            <button className="group flex items-center gap-2 text-blue-900 font-bold hover:text-blue-600 transition-colors pt-4">
              Conheça Nossa História
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Coluna de Imagens - Composição Artística */}
          <div className="order-1 lg:order-2 relative h-[600px] hidden md:block">
            {/* Elemento Decorativo de Fundo (Quadrado Azul) */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-50 rounded-tr-[4rem] -z-10"></div>
            
            {/* Imagem Principal (Recepção) */}
            <div className="absolute top-8 right-8 w-3/4 h-3/5 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tryp%2Frecepcao%2Frecepcao-moderna-hotel.webp"
                alt="Recepção luxuosa"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Imagem Secundária (Fachada) - Sobreposta */}
            <div className="absolute bottom-12 left-0 w-3/5 h-2/5 shadow-2xl rounded-xl overflow-hidden border-8 border-white z-20 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tryp%2FfachadaEntrada%2Fhotel-moderno-azul.webp"
                alt="Fachada moderna"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge Flutuante */}
            <div className="absolute bottom-24 right-12 bg-white/90 backdrop-blur shadow-lg p-4 rounded-lg z-30 max-w-[150px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-blue-600 fill-blue-600" />
                ))}
              </div>
              <p className="text-xs text-gray-600 font-medium">"Melhor custo-benefício da região central."</p>
            </div>
          </div>
          
          {/* Versão Mobile das Imagens (Simples) */}
          <div className="order-1 md:hidden space-y-4">
            <img 
               src="https://storage.lucasmendes.dev/site-sp/tryp%2Frecepcao%2Frecepcao-moderna-hotel.webp"
               className="rounded-xl shadow-lg w-full h-64 object-cover"
               alt="Recepção"
            />
          </div>

        </div>
      </div>
    </section>
  );
}