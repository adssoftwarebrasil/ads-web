import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const brandColors = {
    blue: 'rgb(63,63,152)',
    red: 'rgb(238,51,52)',
    darkText: 'rgb(30,30,30)',
  };

  const features = [
    'Atendimento consultivo',
    'Entrega ágil em BH e região',
    'Preços direto da fábrica',
    'Produtos certificados',
    'Corte e dobra sob medida',
    'Estoque à pronta entrega'
  ];

  return (
    <section id="sobre" className="relative py-24 bg-white overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna de Texto */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[rgb(238,51,52)]"></span>
                <span className="text-[rgb(238,51,52)] font-bold text-sm uppercase tracking-widest">
                  Nossa História
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[rgb(30,30,30)] leading-[1.15]">
                Aços Ideal <br />
                <span className="text-[rgb(63,63,152)]">Qualidade que Constrói</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-4">
                Desde 2016, somos referência no mercado de aços. Não vendemos apenas ferro e aço; entregamos a base sólida para o seu sonho. Garantimos excelência no atendimento e a comodidade que sua obra precisa.
              </p>
            </div>

            {/* Grid de Benefícios Moderno */}
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 pt-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-1 rounded-full bg-blue-50 group-hover:bg-[rgb(63,63,152)] transition-colors duration-300">
                    <CheckCircle2 size={18} className="text-[rgb(63,63,152)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Botão Call to Action */}
            <button
              onClick={() => scrollToSection('contato')}
              className="group relative inline-flex items-center gap-3 bg-[rgb(238,51,52)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d42d2e] transition-all shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(238,51,52,0.5)] transform hover:-translate-y-1"
            >
              Falar com um Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Coluna da Imagem (Design Composto) */}
          <div className="relative order-1 lg:order-2">
            {/* Moldura Decorativa Sólida atrás */}
            <div className="absolute top-8 right-8 w-full h-full border-2 border-[rgb(63,63,152)] rounded-3xl z-0 hidden md:block opacity-20" />
            
            {/* Imagem Principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <img
                src="https://storage.lucasmendes.dev/site-sp/acoideal/sobre-nos.webp"
                alt="Aços Ideal - Estoque e Equipe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Card Flutuante de Autoridade */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-auto bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-[rgb(238,51,52)] z-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-4">
                  <div className="bg-[rgb(63,63,152)] p-3 rounded-full text-white">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Experiência de Mercado</p>
                    <p className="text-2xl font-bold text-[rgb(30,30,30)]">Desde 2016</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo pontilhado (opcional) */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}