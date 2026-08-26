import { MessageCircle, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[rgb(228,29,32)] to-[rgb(200,25,28)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Fazer seu Pedido?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Entre em contato agora e receba seu gás, água ou carvão com rapidez e segurança!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(228,29,32)] px-8 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 transform hover:scale-105 flex items-center gap-3 min-w-[280px] justify-center"
            >
              <MessageCircle className="lucide lucide-message-circle" width={24} height={24} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="tel:6232581139"
              className="bg-[rgb(28,59,126)] text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-[rgb(20,42,90)] transition-all shadow-2xl hover:shadow-[rgb(28,59,126)]/50 transform hover:scale-105 flex items-center gap-3 min-w-[280px] justify-center"
            >
              <Phone className="lucide lucide-phone" width={24} height={24} />
              Ligar Agora
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">7 Dias</div>
              <div className="text-white/80">por Semana</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">Entrega</div>
              <div className="text-white/80">Rápida e Segura</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">5★</div>
              <div className="text-white/80">Avaliação Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
