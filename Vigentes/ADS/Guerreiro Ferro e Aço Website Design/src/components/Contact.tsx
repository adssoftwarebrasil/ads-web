import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="relative bg-gradient-to-br from-[#F48221] via-[#E67318] to-[#F48221] py-16 md:py-24 lg:py-32 px-[5%] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-4 border-white rotate-45 animate-pulse"></div>
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1A1A1A] rounded-full blur-[150px] opacity-10"></div>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-white tracking-[2px] mb-3 md:mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            FALE CONOSCO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Pronto para Iniciar <br />Seu Projeto?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fale com um de nossos especialistas e receba um orçamento personalizado em minutos!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
          <a
            href="https://wa.me/5571996694235?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white text-[#F48221] px-6 md:px-8 py-6 md:py-8 rounded-2xl font-bold text-base md:text-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F48221]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F48221] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <Phone className="lucide lucide-phone w-6 h-6 md:w-7 md:h-7 text-white" size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm text-[#F48221]/70 mb-1">WhatsApp</p>
                <p className="text-base md:text-lg font-bold">(71) 99669-4235</p>
              </div>
            </div>
          </a>
          <a
            href="mailto:comercial@grupoguerreiro.net"
            className="group relative bg-white text-[#F48221] px-6 md:px-8 py-6 md:py-8 rounded-2xl font-bold text-base md:text-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F48221]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F48221] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <Mail className="lucide lucide-mail w-6 h-6 md:w-7 md:h-7 text-white" size={24} />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-xs md:text-sm text-[#F48221]/70 mb-1">E-mail</p>
                <p className="text-sm md:text-base font-bold truncate">comercial@grupoguerreiro.net</p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 md:px-6 py-3 rounded-full">
            <MapPin className="lucide lucide-map-pin w-5 h-5 text-white" size={24} />
            <p className="text-sm md:text-base text-white font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ou visite uma de nossas filiais
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.641685662525!2d-38.425348299999996!3d-12.1366508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716bd2161bdfc41%3A0x3d0d382ff0b3e935!2sGUERREIRO%20FERRO%20E%20A%C3%87O%20ALAGOINHAS!5e0!3m2!1spt-PT!2sbr!4v1760388669468!5m2!1spt-PT!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
            title="Localização Guerreiro Ferro e Aço"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
