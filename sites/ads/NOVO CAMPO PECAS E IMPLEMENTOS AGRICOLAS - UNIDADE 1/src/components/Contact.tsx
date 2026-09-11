import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_TEL, EMAIL } from '../lib/constants';

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-[#1A385C] via-[#001F7A] to-[#1A385C] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F8D617]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#F8D617] font-semibold text-sm md:text-base uppercase tracking-wider bg-[#F8D617]/10 px-4 py-2 rounded-full">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Estamos prontos para atender você. Nossa equipe está disponível para
            tirar suas dúvidas!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F8D617] to-[#e6c615] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="lucide lucide-phone text-[#1A385C]" width={28} height={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Telefone</h4>
              <a
                href={PHONE_TEL}
                className="text-white/90 hover:text-[#F8D617] transition-colors text-base font-medium"
              >
                (67) 99292-0122
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="lucide lucide-mail text-white" width={28} height={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">E-mail</h4>
              <a
                href={`mailto:${EMAIL}`}
                className="text-white/90 hover:text-[#F8D617] transition-colors text-sm break-all leading-relaxed"
              >
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#001F7A] to-[#1A385C] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="lucide lucide-clock text-white" width={28} height={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Horário</h4>
              <div className="text-white/90 text-sm space-y-1">
                <p>Segunda a Sexta</p>
                <p className="font-semibold">8h às 18h</p>
                <p className="mt-2">Sábado</p>
                <p className="font-semibold">8h às 12h</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F8D617] to-[#e6c615] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="lucide lucide-map-pin text-[#1A385C]" width={28} height={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Endereço</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Av. Weimar Gonçalves Torres, 5435<br />
                Dourados - MS
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Tire Suas Dúvidas Agora!
              </h3>
              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco pelo WhatsApp e receba atendimento
                personalizado de nossa equipe especializada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1fb855] transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:scale-105 flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <span>Falar no WhatsApp</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href={PHONE_TEL}
                className="group w-full sm:w-auto border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1A385C] transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <Phone className="lucide lucide-phone group-hover:rotate-12 transition-transform" width={24} height={24} />
                <span>Ligar Agora</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></span>
                  <span>Resposta Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F8D617] rounded-full animate-pulse"></span>
                  <span>Atendimento Especializado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                  <span>Suporte Completo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Tem uma dúvida? Nossa equipe está pronta para ajudar você a encontrar
            a solução ideal!
          </p>
        </div>
      </div>
    </section>
  );
}
