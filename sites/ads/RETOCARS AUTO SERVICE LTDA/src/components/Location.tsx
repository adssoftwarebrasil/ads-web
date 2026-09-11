import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="contato" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mapa */}
          <div className="order-2 lg:order-1 rounded-xl md:rounded-2xl overflow-hidden h-[250px] md:h-[350px] lg:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9876!2d-48.0295!3d-15.8089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzMyLjAiUyA0OMKwMDEnNDYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Retocars"
            ></iframe>
          </div>

          {/* Informações */}
          <div className="order-1 lg:order-2 space-y-5 md:space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4">
                Venha Conhecer a Retocars
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400">
                Estamos prontos para atender você com excelência
              </p>
            </div>

            {/* Cards de Informação */}
            <div className="space-y-3 md:space-y-4">
              {/* Endereço */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10 hover:border-[#fafe05] transition-colors duration-300">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-[#fafe05]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">Endereço</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Rua 03 Quadra 01 lote 05/12</p>
                  <p className="text-gray-400 text-xs md:text-sm">Vicente Pires - Brasília/DF</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10 hover:border-[#fafe05] transition-colors duration-300">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Clock className="text-[#fafe05]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">Horário de Funcionamento</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Segunda a Sexta</p>
                  <p className="text-gray-400 text-xs md:text-sm">07h às 18h</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10 hover:border-[#fafe05] transition-colors duration-300">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-[#fafe05]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">Telefone</h3>
                  
                    <a href="tel:+5561982160800"
                    className="text-gray-400 hover:text-[#fafe05] transition-colors text-xs md:text-sm"
                  >
                    (61) 98216-0800
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10 hover:border-[#fafe05] transition-colors duration-300">
                <div className="bg-[#fafe05]/20 p-2 md:p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-[#fafe05]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">E-mail</h3>
                  
                    <a href="mailto:consultor1.retocars@gmail.com"
                    className="text-gray-400 hover:text-[#fafe05] transition-colors text-xs md:text-sm break-all"
                  >
                    consultor1.retocars@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            
              <a href="https://www.google.com/maps/dir//Vicente+Pires,+Bras%C3%ADlia+-+DF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#fafe05] text-black px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base hover:bg-[#fafe05]/90 transition-all duration-300 hover:scale-105"
            >
              <Navigation size={18} />
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}