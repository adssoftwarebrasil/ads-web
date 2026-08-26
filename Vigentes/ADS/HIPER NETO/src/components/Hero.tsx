import { ShoppingCart, Clock, MapPin } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/556282034298';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fsupermercado-fachada-carro-hero-background.webp"
          alt="Hiper Neto Supermercado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(238,27,34)] text-white px-4 py-2 rounded-full mb-6 animate-pulse">
            <ShoppingCart size={18} />
            <span className="text-sm font-semibold">Desde 2018 servindo Campinorte</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sua escolha número um em <span className="text-[rgb(238,27,34)]">qualidade</span> e{' '}
            <span className="text-[rgb(238,27,34)]">variedade</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            No Hiper Neto você encontra tudo o que precisa: açougue com cortes frescos, padaria
            artesanal, hortifrúti selecionado e muito mais. Qualidade e economia em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(238,27,34)] text-white px-8 py-4 rounded-full hover:bg-[rgb(200,20,28)] transition-all duration-300 shadow-2xl hover:shadow-[rgb(238,27,34)]/50 hover:scale-105 font-semibold text-lg text-center"
            >
              Fale Conosco no WhatsApp
            </a>
            <button
              onClick={() => scrollTo('localizacao')}
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105 font-semibold text-lg"
            >
              Nossa Localização
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <Clock size={24} className="text-[rgb(238,27,34)]" />
              <div>
                <p className="text-white font-semibold">Horário de Funcionamento</p>
                <p className="text-gray-300 text-sm">Segunda a Sábado: 06:00 às 20:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <MapPin size={24} className="text-[rgb(238,27,34)]" />
              <div>
                <p className="text-white font-semibold">Localização</p>
                <p className="text-gray-300 text-sm">Av. Bernardo Sayão, 519 - Centro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
