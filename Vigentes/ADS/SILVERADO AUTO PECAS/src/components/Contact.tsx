import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-brand-red"></div>
            <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">Fale conosco</span>
            <div className="h-px w-10 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black mb-4">
            Entre em <span className="text-brand-blue">Contato</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Atendemos clientes de todo o Brasil. Fale conosco pelo WhatsApp ou pelos canais abaixo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4">
            <a href="tel:+556634261853" className="block">
              <div className="flex items-start gap-4 p-5 bg-brand-gray-light rounded-2xl hover:bg-brand-blue/5 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-200">
                  <Phone className="lucide lucide-phone w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                  <p className="text-brand-black font-medium text-sm md:text-base">(66) 3426-1853</p>
                </div>
              </div>
            </a>
            <a href="mailto:silveradoecopecas@gmail.com" className="block">
              <div className="flex items-start gap-4 p-5 bg-brand-gray-light rounded-2xl hover:bg-brand-blue/5 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-200">
                  <Mail className="lucide lucide-mail w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-brand-black font-medium text-sm md:text-base">silveradoecopecas@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/Av.+Goiania+1088+Jardim+America+Rondonopolis+MT"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start gap-4 p-5 bg-brand-gray-light rounded-2xl hover:bg-brand-blue/5 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-200">
                  <MapPin className="lucide lucide-map-pin w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-brand-black font-medium text-sm md:text-base">
                    Av. Goiânia, 1088 — Jardim América, Rondonópolis/MT
                  </p>
                </div>
              </div>
            </a>
            <div>
              <div className="flex items-start gap-4 p-5 bg-brand-gray-light rounded-2xl hover:bg-brand-blue/5 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-200">
                  <Clock className="lucide lucide-clock w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Horário de Funcionamento
                  </p>
                  <p className="text-brand-black font-medium text-sm md:text-base">
                    Segunda a Sexta: 08h00 às 18h00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/silveradoautop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-gray-light hover:bg-brand-blue hover:text-white text-brand-black font-medium text-sm px-5 py-3 rounded-xl transition-all duration-200 group"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                @silveradoautop
              </a>
              <a
                href="https://www.facebook.com/silveradoautopecas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-gray-light hover:bg-brand-blue hover:text-white text-brand-black font-medium text-sm px-5 py-3 rounded-xl transition-all duration-200 group"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                silveradoautopecas
              </a>
            </div>
          </div>
          <div className="bg-brand-black rounded-3xl p-8 md:p-10 shadow-2xl text-center">
            <div className="w-16 h-16 bg-brand-red/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="lucide lucide-phone w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Atendimento Rápido</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              A forma mais rápida de consultar a disponibilidade de uma peça é pelo nosso WhatsApp. Respondemos com
              agilidade durante o horário comercial.
            </p>
            <a
              href="https://wa.me/556634261853"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 shadow-lg mb-4"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
            <p className="text-gray-600 text-xs">Seg–Sex: 08h00 às 18h00 — (66) 3426-1853</p>
          </div>
        </div>
      </div>
    </section>
  );
}
