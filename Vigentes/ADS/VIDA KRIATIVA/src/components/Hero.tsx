import { Award, Sparkles, Users } from 'lucide-react';

export default function Hero() {
  const scrollToProdutos = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fimg2%2Fhero-background.webp" alt="Fundo Vida Kriativa" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-[rgb(253,186,22)] to-[rgb(229,51,38)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Há mais de 17 anos no mercado</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Transforme Sua <span className="bg-gradient-to-r from-[rgb(229,51,38)] via-[rgb(235,9,124)] to-[rgb(1,134,198)] bg-clip-text text-transparent">Criatividade</span> em Arte</h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">A loja mais completa de Foz do Iguaçu em materiais para artesanato. Oferecemos produtos de qualidade, cursos presenciais e atendimento especializado para artesãos de todos os níveis.</p>
            <div className="flex flex-wrap gap-4">
              <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[rgb(229,51,38)] to-[rgb(235,9,124)] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Faça Seu Pedido</a>
              <button onClick={scrollToProdutos} className="border-2 border-[rgb(1,134,198)] text-[rgb(1,134,198)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(1,134,198)] hover:text-white transition-all duration-300 bg-white/60 backdrop-blur-sm">Ver Produtos</button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300/50">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="lucide lucide-award w-8 h-8 text-[rgb(253,186,22)]" />
                </div>
                <p className="text-2xl font-bold text-[rgb(39,73,129)]">17+</p>
                <p className="text-sm text-gray-700 font-medium">Anos no Mercado</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Sparkles className="lucide lucide-sparkles w-8 h-8 text-[rgb(235,9,124)]" />
                </div>
                <p className="text-2xl font-bold text-[rgb(39,73,129)]">1000+</p>
                <p className="text-sm text-gray-700 font-medium">Produtos</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="lucide lucide-users w-8 h-8 text-[rgb(1,134,198)]" />
                </div>
                <p className="text-2xl font-bold text-[rgb(39,73,129)]">5000+</p>
                <p className="text-sm text-gray-700 font-medium">Clientes Felizes</p>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[rgb(253,186,22)] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[rgb(235,9,124)] opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
