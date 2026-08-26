import { Clock, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fimg%2Fvenda-botijoes-gas-hero-background.webp"
          alt="Depósito de Gás"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(28,59,126)]/95 via-[rgb(28,59,126)]/85 to-[rgb(28,59,126)]/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-[rgb(228,29,32)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 Entrega Rápida e Segura
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gás, Água e Carvão com<span className="text-[rgb(228,29,32)]"> Qualidade </span>e Agilidade
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Desde 2019 oferecendo os melhores produtos com entrega rápida em Goiânia. Revenda
            autorizada Nacional Gás com atendimento todos os dias da semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(228,29,32)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(200,25,28)] transition-all shadow-2xl hover:shadow-[rgb(228,29,32)]/50 transform hover:scale-105 text-center"
            >
              Fazer Pedido Agora
            </a>
            <a
              href="tel:6232581139"
              className="bg-white text-[rgb(28,59,126)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105 text-center"
            >
              Ligar Agora
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(228,29,32)] p-2 rounded-lg">
                  <Clock className="lucide lucide-clock text-white" width={24} height={24} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Aberto 7 dias</p>
                  <p className="text-white/80 text-xs">Seg-Sáb até 21h</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(228,29,32)] p-2 rounded-lg">
                  <Phone className="lucide lucide-phone text-white" width={24} height={24} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Entrega Rápida</p>
                  <p className="text-white/80 text-xs">Horários intensivos</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(228,29,32)] p-2 rounded-lg">
                  <MapPin className="lucide lucide-map-pin text-white" width={24} height={24} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Faiçalville</p>
                  <p className="text-white/80 text-xs">Goiânia - GO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
