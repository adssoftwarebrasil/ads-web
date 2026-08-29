import { MessageCircle, Phone, Instagram, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-6 bg-gradient-to-br from-[#FA6F2C] to-[#E85E1B]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para Ter a Melhor Internet da sua Vida?</h2>
        <p className="text-xl text-white mb-12 opacity-95">
          Nossa equipe está pronta para tirar suas dúvidas e agendar sua instalação. Clique no botão abaixo e fale com um
          especialista agora mesmo!
        </p>
        <a
          href="https://wa.me/5581971078555?text=Olá!%20Quero%20minha%20internet%20You%20Connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#FA6F2C] px-10 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl mb-16"
        >
          <MessageCircle className="w-7 h-7" />
          QUERO MINHA INTERNET YOU CONNECT!
        </a>
        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4">Entre em Contato</h3>
            <div className="space-y-3 text-left">
              <a
                href="https://wa.me/5581971078555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-white hover:bg-opacity-10 p-2 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(81) 97107-8555</span>
              </a>
              <a
                href="tel:+558198403-0536"
                className="flex items-center gap-3 hover:bg-white hover:bg-opacity-10 p-2 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(81) 98403-0536</span>
              </a>
              <a
                href="https://instagram.com/youconnectpe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-white hover:bg-opacity-10 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@youconnectpe</span>
              </a>
              <a
                href="mailto:gyouconnect2022@gmail.com"
                className="flex items-center gap-3 hover:bg-white hover:bg-opacity-10 p-2 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>gyouconnect2022@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4">Horário e Localização</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Segunda a Sexta, das 08h às 18h</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>R. Cel. Dário Ferraz de Sá, Barra de Jangada, Jaboatão dos Guararapes - PE, 54470-150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
