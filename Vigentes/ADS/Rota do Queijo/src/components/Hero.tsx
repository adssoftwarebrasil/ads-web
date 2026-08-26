import { ArrowRight, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-queijos-frios-e-frutas.webp"
          alt="Mesa de queijos e frios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(32,29,30)]/95 via-[rgb(32,29,30)]/85 to-[rgb(32,29,30)]/70"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-[rgb(197,162,3)]/20 border border-[rgb(197,162,3)] text-[rgb(197,162,3)] rounded-full text-sm font-semibold tracking-wider">
              DESDE 2016
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[rgb(254,254,254)] mb-6 leading-tight">
            Experiência Gastronômica
            <span className="block text-[rgb(197,162,3)] mt-2">Incomparável</span>
          </h1>
          <p className="text-lg md:text-xl text-[rgb(254,254,254)]/90 mb-8 leading-relaxed max-w-2xl">
            Descubra o universo de sabores da Rota do Queijo: queijos especiais, ilhas gastronômicas
            personalizadas, tábuas de frios artesanais e um empório completo com produtos selecionados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/556184960294"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[rgb(197,162,3)] text-[rgb(32,29,30)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(217,182,23)] transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Fele conosco</span>
              <ArrowRight
                width={20}
                height={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#servicos"
              className="bg-transparent border-2 border-[rgb(197,162,3)] text-[rgb(197,162,3)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(197,162,3)] hover:text-[rgb(32,29,30)] transition-all duration-300 flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-[rgb(254,254,254)]/10 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(197,162,3)]/30">
              <div className="flex-shrink-0 w-12 h-12 bg-[rgb(197,162,3)] rounded-full flex items-center justify-center">
                <Clock width={24} height={24} className="text-[rgb(32,29,30)]" />
              </div>
              <div>
                <h3 className="text-[rgb(254,254,254)] font-bold text-lg mb-1">
                  Horário de Funcionamento
                </h3>
                <p className="text-[rgb(254,254,254)]/80 text-sm">
                  Seg-Sex: 07:00 - 17:30
                  <br />
                  Sábado: 07:00 - 12:00
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-[rgb(254,254,254)]/10 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(197,162,3)]/30">
              <div className="flex-shrink-0 w-12 h-12 bg-[rgb(197,162,3)] rounded-full flex items-center justify-center">
                <MapPin width={24} height={24} className="text-[rgb(32,29,30)]" />
              </div>
              <div>
                <h3 className="text-[rgb(254,254,254)] font-bold text-lg mb-1">Localização</h3>
                <p className="text-[rgb(254,254,254)]/80 text-sm">
                  Águas Claras, Brasília - DF
                  <br />
                  QS 01 - LED/Intercity Hotéis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(254,254,254)] to-transparent z-10"></div>
    </section>
  );
}
