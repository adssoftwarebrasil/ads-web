import { MapPin, Phone, Clock, Instagram, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-[#EAF2F8] opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a]">Entre em <span className="text-[#009CA6]">Contato</span></h2>
          <p className="text-lg text-gray-600 font-medium">Estamos prontos para ajudar você a criar suas obras de arte. Venha nos visitar ou fale conosco!</p>
          <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#009CA6] via-[#0186C6] to-[#1a2e5a]"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E63428] to-[#EB097C] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="lucide lucide-map-pin w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">Localização</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">R. Fagundes Varela, 488 - Vila Portes<br />Foz do Iguaçu - PR, 85865-160</p>
                  <a href="https://goo.gl/maps/seu-link-aqui" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#009CA6] font-bold hover:text-[#0186C6] transition-colors group-hover:translate-x-1 duration-300">Ver no Google Maps →</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0186C6] to-[#1a2e5a] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Phone className="lucide lucide-phone w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">Telefone &amp; WhatsApp</h3>
                  <div className="space-y-1">
                    <a href="tel:+554530289710" className="text-gray-600 hover:text-[#009CA6] transition-colors block font-medium">(45) 3028-9710</a>
                    <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#009CA6] transition-colors block font-medium">(45) 99993-8248</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FDBA16] to-[#E63428] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Clock className="lucide lucide-clock w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a2e5a]">Horário de Funcionamento</h3>
                  <div className="text-gray-600 leading-relaxed space-y-1">
                    <p><span className="font-semibold text-gray-800">Seg - Sex:</span> 8h às 18h</p>
                    <p><span className="font-semibold text-gray-800">Sábado:</span> 8h às 14h</p>
                    <p className="text-red-500 font-medium">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#EB097C] to-[#E63428] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Siga-nos nas Redes</h3>
              <p className="mb-8 text-white/90 relative z-10 max-w-sm">Fique por dentro das novidades, promoções exclusivas e muita inspiração para seus projetos.</p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <a href="https://www.instagram.com/vidakriativafoz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white text-white hover:text-[#EB097C] border border-white/30 hover:border-white px-5 py-3 rounded-full transition-all duration-300 font-bold backdrop-blur-sm">
                  <Instagram className="lucide lucide-instagram w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@vidakriativafoz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white text-white hover:text-[#000000] border border-white/30 hover:border-white px-5 py-3 rounded-full transition-all duration-300 font-bold backdrop-blur-sm">
                  <Send className="lucide lucide-send w-5 h-5" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.2789725807663!2d-54.56636732371497!3d-25.52909477750865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69a5390c58f01%3A0xc665b1617300c144!2sR.%20Fagundes%20Varela%2C%20488%20-%20Vila%20Portes%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085865-160!5e0!3m2!1spt-BR!2sbr!4v1707151234567!5m2!1spt-BR!2sbr" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500" style={{ border: '0px' }}></iframe>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl text-center border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a2e5a]">Pronto para Começar Seu Próximo Projeto?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Entre em contato conosco pelo WhatsApp. Nossa equipe está pronta para tirar suas dúvidas e ajudar você a encontrar os melhores materiais.</p>
          <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009CA6] to-[#0186C6] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
