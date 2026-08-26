import { ShoppingCart, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(221,40,45)] via-[rgb(200,30,35)] to-[rgb(180,20,25)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(255,204,0)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(255,204,0)] rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-[rgb(255,204,0)] text-[rgb(221,40,45)] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                O Melhor de Indiara
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Supermercado <span className="text-[rgb(255,204,0)]">Conquista</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              Completo para atender sua família com qualidade, variedade e os melhores preços de Indiara!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[rgb(255,204,0)] text-[rgb(221,40,45)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 flex items-center justify-center gap-2">
                <ShoppingCart size={24} />
                Faça Seu Pedido
              </button>
              <a
                href="http://wa.me/556481322676"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(221,40,45)] transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Fale no WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-[rgb(255,204,0)] p-3 rounded-lg">
                  <Clock size={24} className="text-[rgb(221,40,45)]" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Horário</p>
                  <p className="font-bold">06:00 às 21:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-[rgb(255,204,0)] p-3 rounded-lg">
                  <MapPin size={24} className="text-[rgb(221,40,45)]" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Localização</p>
                  <p className="font-bold">2 Lojas em Indiara</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[rgb(255,204,0)] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/hero.webp"
                alt="Supermercado Conquista - Interior"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg object-contain h-auto ring-4 ring-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[rgb(221,40,45)]">15+</p>
                  <p className="text-gray-600 font-medium">Anos de Tradição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
